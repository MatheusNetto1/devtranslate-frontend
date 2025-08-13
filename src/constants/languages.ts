// src/constants/languages.ts
export const LANGUAGE_OPTIONS = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C#", value: "csharp" },
  { label: "C++", value: "cpp" },
  { label: "Go", value: "go" },
  { label: "PHP", value: "php" },
  { label: "Ruby", value: "ruby" },
  { label: "Rust", value: "rust" },
] as const;

export type LanguageLabel = typeof LANGUAGE_OPTIONS[number]["label"];
export type LanguageValue = typeof LANGUAGE_OPTIONS[number]["value"];