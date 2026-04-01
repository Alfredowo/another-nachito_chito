import { useEffect, useState } from "react";
import SyncButton from "../components/SyncButton";
import Sidebar from "../components/Sidebar";
import LogsTable from "../components/LogsTable";
import RecordsTable from "../components/RecordsTable";
import { runSync, getLogs, getRecords } from "../services/api";

export default function Home() {
  const [logs, setLogs] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("logs");

  const loadData = async () => {
    const logsResponse = await getLogs();
    const recordsResponse = await getRecords();

    setLogs(logsResponse.data);
    setRecords(recordsResponse.data);
  };

  const handleSync = async () => {
    setLoading(true);
    try {
      await runSync();
      console.log("Sincronización ejecutada");
      await loadData();
    } catch (error) {
      console.error("Error durante la sincronización:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadData();
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="sticky top-0 z-10 bg-white flex items-center gap-4 border-b border-slate-200 py-4 px-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">Nachito Chito</h1>
          <SyncButton onSync={handleSync} loading={loading} />
        </div>

        <div className="">
          {activeTab === "logs" ? (
            <LogsTable logs={logs} />
          ) : (
            <RecordsTable records={records} />
          )}
        </div>
      </div>
    </div>
  );
}