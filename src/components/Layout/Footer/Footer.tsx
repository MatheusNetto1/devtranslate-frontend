// src/components/layout/Footer/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 mt-8">
      <div className="w-full text-center text-xs px-4 sm:px-8">
        © {new Date().getFullYear()} DevTranslate. Todos os direitos reservados.
      </div>
    </footer>
  );
}