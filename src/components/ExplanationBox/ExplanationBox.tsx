type ExplanationBoxProps = {
  explanation: string;
};

export function ExplanationBox({ explanation }: ExplanationBoxProps) {
  if (!explanation) return null;

  return (
    <div className="bg-gray-800 border border-blue-700 text-gray-100 p-5 rounded-xl shadow-md space-y-2">
      <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-400">
        Explicação da Tradução
      </h2>
      <p className="whitespace-pre-wrap leading-relaxed text-sm">
        {explanation}
      </p>
    </div>
  );
}