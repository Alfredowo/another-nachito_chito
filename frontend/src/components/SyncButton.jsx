export default function SyncButton({ onSync, loading }) {
  return (
    <button
      onClick={onSync}
      disabled={loading}
      className={`px-6 py-2 rounded-md font-semibold text-white cursor-pointer transition
        ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
    >
      {loading ? "Sincronizando..." : "Sincronizar"}
    </button>
  );
}