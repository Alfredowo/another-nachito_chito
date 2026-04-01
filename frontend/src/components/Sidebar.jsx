const tabs = [
  { key: "records", label: "Records" },
  { key: "logs", label: "Logs" },
];

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-48 shrink-0 bg-slate-200 border-r border-slate-300 flex flex-col gap-1 p-4 pt-8">
      <h2 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3 px-2">Vistas</h2>
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onTabChange(key)}
          className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium cursor-pointer
            ${activeTab === key
              ? "bg-indigo-500 text-white shadow-sm"
              : "text-slate-500 hover:bg-slate-200 hover:text-slate-800"}`}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}
