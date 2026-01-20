export default function MenuItem({ icon, text }) {
  return (
    <div className="w-full bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm">

      <div className="flex items-center gap-3">
        <span className={`material-symbols-rounded text-gray-700 text-2xl`}>
          {icon}
        </span>
        <span className="text-gray-700 text-lg">{text}</span>
      </div>

      <span className="material-symbols-rounded text-gray-400 text-2xl">
        chevron_right
      </span>
    </div>
  );
}
