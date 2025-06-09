import { useState } from "react";
import { CodeEditor } from "../CodeEditor/CodeEditor";
import { Selector } from "../Selector/Selector";
import { toast } from "sonner";
import { ConvertButton } from "../ConvertButton/ConvertButton";

export function TranslateForms() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("JavaScript");
  const [language, setLanguage] = useState("Python");
  const [model, setModel] = useState("GPT-4");
  const [isLoading, setIsLoading] = useState(false); // 2. Crie o estado de loading

  const handleTranslate = () => {
    setIsLoading(true); // 3. Ative o loading
    toast.info("Traduzindo...");

    setTimeout(() => {
      setOutputCode(
        `// Traduzido de ${sourceLanguage} para ${language} usando ${model}\n\n${inputCode}`
      );
      toast.success("Tradução concluída!");
      setIsLoading(false); // 4. Desative o loading ao concluir
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Selector
          label="Linguagem de origem"
          value={sourceLanguage}
          onChange={setSourceLanguage}
          options={["JavaScript", "Python", "C#", "Java"]}
        />
        <Selector
          label="Linguagem de destino"
          value={language}
          onChange={setLanguage}
          options={["JavaScript", "Python", "C#", "Java"]}
        />
        <Selector
          label="Modelo de IA"
          value={model}
          onChange={setModel}
          options={["GPT-4", "Claude", "Gemini"]}
        />
        <div className="flex items-end">
          <ConvertButton
            loading={isLoading}
            onClick={handleTranslate}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CodeEditor
          label="Código original"
          value={inputCode}
          onChange={setInputCode}
        />
        <CodeEditor
          label="Código traduzido"
          value={outputCode}
          readOnly
        />
      </div>
    </div>
  );
}