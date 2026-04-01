export default function SyncButton({ onSync, loading }) {
  return (
    <button onClick={onSync} disabled={loading}>
      {loading ? "Sincronizando..." : "Sincronizar"}
    </button>
  );
}