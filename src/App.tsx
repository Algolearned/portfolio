import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./views/components/layout/Navbar";
import { Footer } from "./views/components/layout/Footer";
import { HomePage } from "./views/pages/HomePage";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;