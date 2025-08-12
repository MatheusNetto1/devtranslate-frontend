// src/constants/models.ts
export const MODELS = ["GPT-4", "Claude", "Gemini"] as const;

export type Model = typeof MODELS[number];