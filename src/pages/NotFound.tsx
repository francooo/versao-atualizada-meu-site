import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-center">
        <h1 className="font-syne text-6xl font-bold text-[#FFD100] mb-4">404</h1>
        <p className="text-xl text-[#AAAAAA] mb-4">Oops! Página não encontrada</p>
        <a href="/" className="text-[#FFD100] hover:text-[#E6BC00] underline transition-colors">
          Voltar para o Início
        </a>
        <div className="mt-8 text-[#555555] text-sm">
          <span className="font-semibold">CNPJ: 60.311.539/0001-93</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
