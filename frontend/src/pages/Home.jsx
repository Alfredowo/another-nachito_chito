import { useEffect, useState } from "react";
import SyncButton from "../components/SyncButton";
import LogsTable from "../components/LogsTable";
import RecordsTable from "../components/RecordsTable";
import { runSync, getLogs, getRecords } from "../services/api";

export default function Home() {
  const [logs, setLogs] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="container mx-auto">
      <div className="sticky top-0 z-10 bg-white flex items-center gap-4 border-gray-200 py-8 px-6">
        <h1 className="text-2xl font-bold">Nachito Chito</h1>
        <SyncButton onSync={handleSync} loading={loading} />
      </div>

      <div className="">
        <LogsTable logs={logs} />

        <RecordsTable records={records} />
      </div>
    </div>
  );
}