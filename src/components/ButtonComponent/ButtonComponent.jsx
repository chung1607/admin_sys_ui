export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-2xl font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}