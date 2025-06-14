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
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(
        `// Traduzido de ${from} para ${to} usando ${model}\n\n${code}`
      );
    }, 1000);
  });
}