// translate.ts
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
  const res = await fetch("http://localhost:8000/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      from_lang: from,
      to_lang: to,
      model,
    }),
  });

  if (!res.ok) {
    throw new Error("Erro na tradução");
  }

  const data = await res.json();
  return data.translated_code;
}