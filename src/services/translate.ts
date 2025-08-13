// src/services/translate.ts
export async function translateCode({
  code,
  from,
  to,
  model,
}: {
  code: string;
  from: string;
  to: string;
  model: string;
}) {
  // Normalizar nomes de modelos para os esperados pelo backend
  const modelMapping: Record<string, string> = {
    "gpt-4": "openai",
    "gpt4": "openai",
    "openai": "openai",
    "claude": "claude",
    "anthropic": "claude",
    "gemini": "gemini",
    "google": "gemini",
  };

  const normalizedModel = modelMapping[model.toLowerCase()] || model.toLowerCase();

  const payload = { code, from, to, model: normalizedModel };
  console.log("Enviando para o backend:", payload);

  const res = await fetch("http://localhost:8000/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    console.error("Erro do backend:", errorData);
    throw new Error(errorData?.detail || "Erro na tradução");
  }

  const data = await res.json();
  console.log("Resposta do backend:", data);
  return data.translated_code;
}
