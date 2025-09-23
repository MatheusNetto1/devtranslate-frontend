// src/components/ExplanationBox/ExplanationBox.tsx
import ReactMarkdown from "react-markdown";

type ExplanationBoxProps = {
  explanation: string;
};

export function ExplanationBox({ explanation }: ExplanationBoxProps) {
  if (!explanation) return null;

  return (
    <div className="relative bg-neutral-900/95 border border-neutral-800 text-gray-100 rounded-xl shadow-xl overflow-hidden animate-fadeIn">
      {/* Header */}
      <div className="px-6 py-3 border-b border-neutral-800 bg-gradient-to-r from-blue-500/20 to-cyan-500/10">
        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Explicação da Tradução
        </h2>
      </div>

      {/* Body */}
      <div className="px-6 py-4 max-h-[320px] overflow-y-auto custom-scrollbar space-y-4">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="leading-relaxed mb-6">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside ml-6 space-y-6">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            strong: ({ children }) => (
              <span className="text-blue-300 font-semibold">{children}</span>
            ),
            code: ({ children }) => (
              <code className="bg-neutral-800/80 px-2 py-0.5 rounded-md text-sm font-mono text-sky-300">
                {children}
              </code>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
                {children}
              </blockquote>
            ),
          }}
        >
          {explanation}
        </ReactMarkdown>
      </div>
    </div>
  );
}