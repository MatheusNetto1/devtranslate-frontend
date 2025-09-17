// src/components/ExplanationBox/ExplanationBox.tsx
import ReactMarkdown from "react-markdown";

type ExplanationBoxProps = {
  explanation: string;
};

export function ExplanationBox({ explanation }: ExplanationBoxProps) {
  if (!explanation) return null;

  return (
    <div className="bg-gray-800 border border-gray-700 text-gray-100 p-5 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-400">
        Explicação da Tradução
      </h2>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="leading-relaxed mb-2">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}<br></br></li>
            ),
            strong: ({ children }) => (
              <span className="text-blue-300 font-semibold">{children}</span>
            ),
            code: ({ children }) => (
              <code className="bg-gray-700 px-1 py-0.5 rounded text-sm">
                {children}
              </code>
            ),
          }}
        >
          {explanation}
        </ReactMarkdown>
      </div>
    </div>
  );
}