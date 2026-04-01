export default function LogsTable({ logs }) {
  return (
    <div>
      <h2>Bitácora</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Status</th>
            <th>Duración</th>
            <th>Registros</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.timestamp}</td>
              <td>{log.status}</td>
              <td>{log.duration} ms</td>
              <td>{log.records_count}</td>
              <td>{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}