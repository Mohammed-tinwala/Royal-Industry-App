export function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 rounded-xl bg-(--primary-color) text-white font-semibold ${className}`}
    >
      {children}
    </button>
  );
}