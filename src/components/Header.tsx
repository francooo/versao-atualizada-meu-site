
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-yellow-500 hover:scale-105 transition-transform duration-300 cursor-pointer">
          AF<span className="text-gray-800">ecomm</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'services', 'cases', 'clients', 'process', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-700 hover:text-yellow-500 font-medium transition-colors duration-300 relative group"
            >
              {item === 'home' && 'Início'}
              {item === 'about' && 'Sobre'}
              {item === 'services' && 'Serviços'}
              {item === 'cases' && 'Cases'}
              {item === 'clients' && 'Clientes'}
              {item === 'process' && 'Processo'}
              {item === 'contact' && 'Contato'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Solicite uma Consultoria
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          style={{ minHeight: 44, minWidth: 44 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 border-b border-yellow-100 z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="flex flex-col p-4 space-y-4">
            {['home', 'about', 'services', 'cases', 'clients', 'process', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-800 hover:text-yellow-500 font-medium transition-colors duration-300 text-left py-3 px-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ minHeight: 44, fontSize: 18 }}
              >
                {item === 'home' && 'Início'}
                {item === 'about' && 'Sobre'}
                {item === 'services' && 'Serviços'}
                {item === 'cases' && 'Cases'}
                {item === 'clients' && 'Clientes'}
                {item === 'process' && 'Processo'}
                {item === 'contact' && 'Contato'}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 text-center mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{ minHeight: 44, fontSize: 18 }}
            >
              Solicite uma Consultoria
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
