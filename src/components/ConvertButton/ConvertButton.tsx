import { Loader2, Repeat } from "lucide-react";

type ConvertButtonProps = {
  loading: boolean;
  onClick: () => void;
  className?: string; // 1. Adicione a prop className (opcional)
};

export function ConvertButton({ loading, onClick, className }: ConvertButtonProps) {
  return (
    <button
      // 2. Junte as classes do componente com a className recebida
      className={`flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-medium rounded-xl px-4 py-3 transition transform hover:scale-105 ${className}`}
      onClick={onClick}
      disabled={loading}
      aria-label="Converter código"
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <Repeat className="w-5 h-5" />
      )}
      {loading ? "Convertendo..." : "Converter"}
    </button>
  );
}