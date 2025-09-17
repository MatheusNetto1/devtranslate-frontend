// src/pages/Home.tsx
import { TranslateForms } from "../components/TranslateForms/TranslateForms";

export function Home() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">DevTranslate</h1>
      <TranslateForms />
    </main>
  );
}