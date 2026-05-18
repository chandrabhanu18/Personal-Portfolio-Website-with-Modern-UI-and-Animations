export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-slate-700/50 text-slate-300 border border-slate-600 ${className}`}>
      {children}
    </span>
  );
}
