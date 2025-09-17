// src/app/App.tsx
import { AppRoutes } from "../routes/AppRoutes";
import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <Header />
      <div className="flex-grow p-8 text-gray-100">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;