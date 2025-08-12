// TranslateForms.tsx
import { useEffect, useState } from "react";
import { CodeEditor } from "../CodeEditor/CodeEditor";
import { Selector } from "../Selector/Selector";
import { toast } from "sonner";
import { ConvertButton } from "../ConvertButton/ConvertButton";
import { translateCode } from "@/services/translate";

const LANGUAGES = ["JavaScript", "Python", "C#", "Java"] as const;
const MODELS = ["GPT-4", "Claude", "Gemini"] as const;

type Language = typeof LANGUAGES[number];
type Model = typeof MODELS[number];

export function TranslateForms() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState<Language>("JavaScript");
  const [language, setLanguage] = useState<Language>("Python");
  const [model, setModel] = useState<Model>("GPT-4");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "DevTranslate";
  }, []);

  const handleTranslate = async () => {
    try {
      setIsLoading(true);
      toast.info("Traduzindo...");
      const translated = await translateCode({
        code: inputCode,
        from: sourceLanguage,
        to: language,
        model,
      });
      setOutputCode(translated);
      toast.success("Tradução concluída!");
    } catch (error) {
      toast.error("Erro na tradução");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Selector
          label="Linguagem de origem"
          value={sourceLanguage}
          onChange={(val) => setSourceLanguage(val as Language)}
          options={LANGUAGES as unknown as string[]}
        />
        <Selector
          label="Linguagem de destino"
          value={language}
          onChange={(val) => setLanguage(val as Language)}
          options={LANGUAGES as unknown as string[]}
        />
        <Selector
          label="Modelo de IA"
          value={model}
          onChange={(val) => setModel(val as Model)}
          options={MODELS as unknown as string[]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CodeEditor
          label="Código original"
          value={inputCode}
          onChange={setInputCode}
          language={sourceLanguage}
          readOnly={false}
        />

        <CodeEditor
          label="Código traduzido"
          value={outputCode}
          language={language}
          readOnly
        />
      </div>

      <div className="flex justify-center">
        <ConvertButton
          loading={isLoading}
          onClick={handleTranslate}
          className="w-full max-w-xs"
        />
      </div>
    </div>
  );
}