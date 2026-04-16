export function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-zinc-900 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-tight ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-white text-black border border-zinc-200 px-8 py-3 rounded-full font-bold text-sm hover:border-black hover:shadow-lg transition-all duration-300 uppercase tracking-tight ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
