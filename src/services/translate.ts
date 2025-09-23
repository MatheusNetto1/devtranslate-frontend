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
  const modelMapping: Record<string, string> = {
    "gpt-4": "openai",
    "gpt4": "openai",
    "openai": "openai",
    "claude": "claude",
    "anthropic": "claude",
    "gemini": "gemini",
    "google": "gemini",
  };

  const normalizedModel =
    modelMapping[model.toLowerCase()] || model.toLowerCase();

  const payload = { code, from, to, model: normalizedModel };
  console.log("Enviando para o backend:", payload);

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
 
  const res = await fetch(`${apiUrl}/translate`, {
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

  // Agora retornamos o objeto completo
  return {
    translatedCode: data.translated_code,
    explanation: data.explanation,
  };
}
