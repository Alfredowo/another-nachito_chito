export default function LogsTable({ logs }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Fecha</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Status</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Duración</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Registros</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">{new Date(log.timestamp).toLocaleString()}</td>
              <td className={`px-4 py-2 border border-gray-200 font-semibold ${log.status === "success" ? "text-green-600" : "text-red-600"}`}>
                {log.status}
              </td>
              <td className="px-4 py-2 border border-gray-200">{log.duration} ms</td>
              <td className="px-4 py-2 border border-gray-200">{log.records_count}</td>
              <td className="px-4 py-2 border border-gray-200">{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}