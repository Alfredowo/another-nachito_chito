export default function RecordsTable({ records }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Nombre</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Teléfono</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Servicio</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Monto</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Status</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-200">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">{record.application_id}</td>
              <td className="px-4 py-2 border border-gray-200">{record.name ?? '-'}</td>
              <td className="px-4 py-2 border border-gray-200">{record.email ?? '-'}</td>
              <td className="px-4 py-2 border border-gray-200">{record.phone ?? '-'}</td>
              <td className="px-4 py-2 border border-gray-200">{record.service_type ?? '-'}</td>
              <td className="px-4 py-2 border border-gray-200">{record.requested_amount ?? '-'}</td>
              <td className={`px-4 py-2 border border-gray-200 font-semibold ${record.status === 'approved' ? 'text-green-600' : 'text-red-600'}`}>
                {record.status ?? '-'}
              </td>
              <td className="px-4 py-2 border border-gray-200">{new Date(record.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}