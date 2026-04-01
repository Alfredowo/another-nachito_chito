export default function SyncButton({ onSync, loading }) {
  return (
    <button
      onClick={onSync}
      disabled={loading}
      className={`px-6 py-2 rounded-md font-semibold text-white cursor-pointer transition shadow-sm
        ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'}`}
    >
      {loading ? "Sincronizando..." : "Sincronizar"}
    </button>
  );
}