// src/components/layout/Footer/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 mt-8">
      <div className="max-w-6xl mx-auto text-center text-xs">
        © {new Date().getFullYear()} DevTranslate. Todos os direitos reservados.
      </div>
    </footer>
  );
}