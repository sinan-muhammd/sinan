export default function Badge({ title, subtitle, icon }) {
  return (
    <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3 border border-zinc-100">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 text-black">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm text-black uppercase tracking-tight">{title}</h4>
        <p className="text-xs text-zinc-500 font-medium">{subtitle}</p>
      </div>
    </div>
  );
}
