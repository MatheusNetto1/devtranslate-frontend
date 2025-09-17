// src/components/TranslateForms/TranslateForms.tsx
import { useEffect, useState } from "react";
import { CodeEditor } from "../CodeEditor/CodeEditor";
import { Selector } from "../Selector/Selector";
import { toast } from "sonner";
import { ConvertButton } from "../ConvertButton/ConvertButton";
import { translateCode } from "@/services/translate";
import { ExplanationBox } from "../ExplanationBox/ExplanationBox";
import { LANGUAGE_OPTIONS, type LanguageLabel } from "@/constants/languages";
import { MODELS, type Model } from "@/constants/models";

export function TranslateForms() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [explanation, setExplanation] = useState(""); // <<<< novo estado
  const [sourceLanguage, setSourceLanguage] = useState<LanguageLabel>("JavaScript");
  const [targetLanguage, setTargetLanguage] = useState<LanguageLabel>("Python");
  const [model, setModel] = useState<Model>("GPT-4");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "DevTranslate";
  }, []);

  const handleTranslate = async () => {
    try {
      setIsLoading(true);
      toast.info("Traduzindo...");

      const fromValue =
        LANGUAGE_OPTIONS.find((opt) => opt.label === sourceLanguage)?.value || "";
      const toValue =
        LANGUAGE_OPTIONS.find((opt) => opt.label === targetLanguage)?.value || "";

      const { translatedCode, explanation } = await translateCode({
        code: inputCode,
        from: fromValue,
        to: toValue,
        model,
      });

      setOutputCode(translatedCode);
      setExplanation(explanation); // <<<< salvar explicação
      toast.success("Tradução concluída!");
    } catch (error) {
      toast.error("Erro na tradução");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Selectores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Selector
          label="Linguagem de origem"
          value={sourceLanguage}
          onChange={(val) => setSourceLanguage(val as LanguageLabel)}
          options={LANGUAGE_OPTIONS.map((opt) => opt.label)}
        />
        <Selector
          label="Linguagem de destino"
          value={targetLanguage}
          onChange={(val) => setTargetLanguage(val as LanguageLabel)}
          options={LANGUAGE_OPTIONS.map((opt) => opt.label)}
        />
        <Selector
          label="Modelo de IA"
          value={model}
          onChange={(val) => setModel(val as Model)}
          options={[...MODELS]}
        />
      </div>

      {/* Editores */}
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
          language={targetLanguage}
          readOnly
        />
      </div>

      {/* Nova caixa de explicação */}
      <ExplanationBox explanation={explanation} />

      {/* Botão de conversão */}
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
