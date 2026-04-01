export default function RecordsTable({ records }) {
  return (
    <div>
      <h2 className="text-xl px-6 py-4 font-bold text-slate-800">
        Registros
      </h2>
      <div className="px-6 overflow-y-auto max-h-[80vh]">
        <table className="w-full">
          <thead className="bg-indigo-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Nombre</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Teléfono</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Servicio</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Monto</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border border-indigo-100">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <tr key={record.id} className="border-t border-slate-100 hover:bg-indigo-50 transition-colors">
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{record.application_id}</td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{record.name ?? '-'}</td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{record.email ?? '-'}</td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{record.phone ?? '-'}</td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{record.service_type ?? '-'}</td>
                <td className="px-4 py-2 border border-slate-100 text-slate-700">{record.requested_amount != null ? `$${record.requested_amount}` : '-'}</td>
                <td className={`px-4 py-2 border border-slate-100 font-semibold ${record.status === 'aprobado' ? 'text-emerald-600' : record.status === 'rechazado' ? 'text-rose-600' : 'text-amber-500'}`}>
                  {record.status ?? '-'}
                </td>
                <td className="px-4 py-2 border border-slate-100 text-slate-500">{new Date(record.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}