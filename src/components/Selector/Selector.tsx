import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ModernSelectorProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
};

export function Selector({ label, value, onChange, options }: ModernSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-200">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-700">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent className="bg-gray-900 text-white border-gray-700">
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
