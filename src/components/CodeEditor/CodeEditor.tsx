// CodeEditor.tsx
import { useState } from "react";
import { ClipboardCheck, ClipboardCopy } from "lucide-react";
import { toast } from "sonner";
import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
  language?: string; // nova prop
};

export function CodeEditor({
  label,
  value,
  onChange,
  readOnly = false,
  language = "javascript",
}: CodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Código copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Mapeia nome amigável para o nome reconhecido pelo Monaco
  const languageMap: Record<string, string> = {
    javascript: "javascript",
    typescript: "typescript",
    python: "python",
    java: "java",
    csharp: "csharp",
    cpp: "cpp",
    go: "go",
    php: "php",
    ruby: "ruby",
    rust: "rust",
  };

  const editorLanguage =
    languageMap[language.toLowerCase()] || "plaintext";

  return (
    <div className="flex flex-col gap-2 relative w-full">
      <label className="font-semibold text-gray-200 mb-1">{label}</label>
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 p-2 text-gray-400 hover:text-white transition"
        aria-label="Copiar código"
      >
        {copied ? <ClipboardCheck size={20} /> : <ClipboardCopy size={20} />}
      </button>

      <div className="backdrop-blur-md bg-[#0f172a] rounded-xl shadow-lg overflow-hidden">
        <Editor
          height="300px"
          defaultLanguage={editorLanguage}
          language={editorLanguage}
          value={value}
          onChange={(val) => onChange?.(val || "")}
          options={{
            readOnly,
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            wordWrap: "on",
            theme: "vs-dark",
            padding: { top: 10 },
          }}
        />
      </div>
    </div>
  );
}