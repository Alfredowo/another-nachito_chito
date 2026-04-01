import { useEffect, useState } from "react";
import SyncButton from "../components/syncButton";
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
    await runSync();
    console.log("Sincronización ejecutada");
    await loadData();
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadData();
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Nachito Chito Sync</h1>

      <SyncButton onSync={handleSync} loading={loading} />
      <br /><br />

      <LogsTable logs={logs} />

      <RecordsTable records={records} />
    </div>
  );
}