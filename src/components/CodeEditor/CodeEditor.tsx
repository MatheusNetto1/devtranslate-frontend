// src/components/CodeEditor/CodeEditor.tsx
import { useState, useEffect } from "react";
import { ClipboardCheck, ClipboardCopy, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import Editor from "@monaco-editor/react";
import { LANGUAGE_OPTIONS, type LanguageLabel, type LanguageValue } from "@/constants/languages";

type CodeEditorProps = {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
  language?: LanguageLabel | LanguageValue;
};

export function CodeEditor({
  label,
  value,
  onChange,
  readOnly = false,
  language = "javascript",
}: CodeEditorProps) {
  const storageKey = `codeEditor-collapsed-${label}`; // chave única por editor
  const [copied, setCopied] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Recupera do localStorage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setCollapsed(saved === "true");
    }
  }, [storageKey]);

  const handleToggleCollapse = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem(storageKey, String(newState));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Código copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  const editorLanguage =
    LANGUAGE_OPTIONS.find(
      (opt) =>
        opt.label.toLowerCase() === String(language).toLowerCase() ||
        opt.value.toLowerCase() === String(language).toLowerCase()
    )?.value || "plaintext";

  function handleBeforeMount(monaco: any) {
    monaco.editor.setTheme("vs-dark");
  }

  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden border border-slate-700 bg-neutral-900 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800/70 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleCollapse}
            className="p-1.5 rounded-md hover:bg-slate-700 transition text-gray-400 hover:text-white"
            aria-label="Colapsar editor"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronDown size={18} />}
          </button>

          <span className="font-medium text-gray-200">{label}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-mono bg-slate-700/50 text-blue-300 rounded">
            {editorLanguage}
          </span>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-slate-700 transition text-gray-400 hover:text-white"
            aria-label="Copiar código"
          >
            {copied ? <ClipboardCheck size={18} /> : <ClipboardCopy size={18} />}
          </button>
        </div>
      </div>

      {/* Editor com transição */}
      <div
        className={`transition-all duration-300 ${
          collapsed ? "max-h-0 opacity-0 pointer-events-none" : "max-h-[1000px] opacity-100"
        }`}
      >
        <Editor
          height="300px"
          language={editorLanguage}
          value={value}
          onChange={(val) => onChange?.(val || "")}
          theme="vs-dark"
          beforeMount={handleBeforeMount}
          options={{
            readOnly,
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "JetBrains Mono, Fira Code, monospace",
            scrollBeyondLastLine: false,
            wordWrap: "on",
            padding: { top: 10 },
          }}
        />
      </div>
    </div>
  );
}