type SelectorProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
};

export function Selector({ label, value, onChange, options }: SelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-200">{label}</label>
      <div className="backdrop-blur-md bg-gray-800/50 p-4 rounded-xl shadow-md">
        <select
          className="w-full p-3 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
