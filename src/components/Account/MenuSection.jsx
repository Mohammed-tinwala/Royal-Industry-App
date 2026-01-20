import MenuItem from "./MenuItem";

export default function MenuSection({ title, items }) {
  return (
    <div>
      <h2 className="text-gray-800 font-semibold mb-3">{title}</h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <MenuItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}
