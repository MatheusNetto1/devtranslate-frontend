import { AppRoutes } from "../routes/AppRoutes";
import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="p-8 max-w-6xl mx-auto text-gray-100">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
