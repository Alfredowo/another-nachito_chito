export default function RecordsTable({ records }) {
  return (
    <div>
      <h2 style={{ marginTop: 20 }}>Registros</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Servicio</th>
            <th>Monto</th>
            <th>Status</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.application_id}</td>
              <td>{record.name ?? '-'}</td>
              <td>{record.email ?? '-'}</td>
              <td>{record.phone ?? '-'}</td>
              <td>{record.service_type ?? '-'}</td>
              <td>{record.requested_amount ?? '-'}</td>
              <td style={{ color: record.status === 'approved' ? 'green' : 'red' }}>
                {record.status ?? '-'}
              </td>
              <td>{new Date(record.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}