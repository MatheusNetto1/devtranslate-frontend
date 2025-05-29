import { useState } from "react";
import { CodeEditor } from "../CodeEditor/CodeEditor";
import { Selector } from "../Selector/Selector";
import { ConvertButton } from "../ConvertButton/ConvertButton";


export function TranslateForms() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [language, setLanguage] = useState("Python");
  const [model, setModel] = useState("GPT-4");
  const [loading, setLoading] = useState(false);

  const handleTranslate = () => {
    setLoading(true);
    setTimeout(() => {
      setOutputCode(`// Código traduzido em ${language} usando ${model}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Selector
          label="Linguagem destino"
          value={language}
          onChange={setLanguage}
          options={["Python", "JavaScript", "C#", "Java"]}
        />
        <Selector
          label="Modelo de IA"
          value={model}
          onChange={setModel}
          options={["GPT-4", "Claude", "Gemini"]}
        />
      </div>

      <div className="border-t border-gray-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CodeEditor
          label="Código original"
          value={inputCode}
          onChange={setInputCode}
        />
        <CodeEditor label="Código traduzido" value={outputCode} readOnly />
      </div>

      <div className="flex justify-center">
        <ConvertButton loading={loading} onClick={handleTranslate} />
      </div>
    </div>
  );
}
