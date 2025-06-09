import { useState } from "react";
import { ClipboardCheck, ClipboardCopy } from "lucide-react";
import { toast } from "sonner";

type CodeEditorProps = {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
};

export function CodeEditor({
  label,
  value,
  onChange,
  readOnly = false,
}: CodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Código copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="font-semibold text-gray-200 mb-1">{label}</label>
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 p-2 text-gray-400 hover:text-white transition"
        aria-label="Copiar código"
      >
        {copied ? <ClipboardCheck size={20} /> : <ClipboardCopy size={20} />}
      </button>
      <div className="backdrop-blur-md bg-[#0f172a] p-1 rounded-xl shadow-lg">
        <textarea
          className="w-full h-64 p-3 rounded-md bg-[#0b1120] text-gray-100 font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-700"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}
