// Header.tsx
import { Code } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gray-900 text-gray-100 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center gap-2">
        <Code className="w-6 h-6 text-blue-500" />
        <h1 className="text-xl font-bold">DevTranslate</h1>
      </div>
    </header>
  );
}