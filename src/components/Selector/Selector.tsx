// src/components/Selector/Selector.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SelectorProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: Option[];
};

export function Selector({ label, value, onChange, options }: SelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-200">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-700">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent className="bg-gray-900 text-white border-gray-700">
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
              className={opt.disabled ? "opacity-60 cursor-not-allowed" : ""}
            >
              <div className="flex items-center justify-between w-full">
                <span>{opt.label}</span>
                {opt.disabled && (
                  <span className="ml-2 text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">
                    em breve
                  </span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}