// src/pages/Home.tsx
import { TranslateForms } from "../components/TranslateForms/TranslateForms";

export function Home() {
  return (
    <main className="p-6 sm:p-8 max-w-7xl mx-auto w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">DevTranslate</h1>
      <TranslateForms />
    </main>
  );
}