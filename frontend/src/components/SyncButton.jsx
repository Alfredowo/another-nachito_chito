export default function SyncButton({ onSync, loading }) {
  return (
    <button
      onClick={onSync}
      disabled={loading}
      className={`px-6 py-2 rounded-md font-semibold text-white transition shadow-sm
        ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600 cursor-pointer'}`}
    >
      {loading ? "Sincronizando..." : "Sincronizar"}
    </button>
  );
}