export default function LogsTable({ logs }) {
  return (
    <div>
      <h2 className="text-xl px-6 py-4 font-bold text-slate-800">
        Logs
      </h2>
      <div className="px-6 overflow-y-auto max-h-[80vh]">
        <table className="w-full">
          <thead className="bg-indigo-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Fecha</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Duración</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Registros</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="border-t border-slate-100 hover:bg-indigo-50 transition-colors">
                <td className="px-4 py-2 border border-slate-100 text-slate-500">{new Date(log.timestamp).toLocaleString()}</td>
                <td className={`px-4 py-2 border border-slate-100 font-semibold ${log.status === "success" ? "text-emerald-600" : "text-rose-600"}`}>
                  {log.status}
                </td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{log.duration} ms</td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{log.records_count}</td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}