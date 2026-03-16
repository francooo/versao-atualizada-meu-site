import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
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

  const navLinks = [
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'processo', label: 'Processo' },
    { id: 'depoimentos', label: 'Cases' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/97 py-3.5 px-14'
            : 'bg-[#0A0A0A]/90 py-5 px-14'
        } backdrop-blur-xl border-b border-[#FFD100]/10`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-syne font-extrabold text-[22px] tracking-[-0.5px] text-white no-underline flex items-center gap-0.5 hover:opacity-80 transition-opacity"
        >
          AF<span className="text-[#FFD100]">ecomm</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-normal tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  activeSection === link.id ? 'text-[#FFD100]' : 'text-[#AAAAAA] hover:text-[#FFD100]'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#FFD100] text-[#0A0A0A] font-medium text-sm py-2.5 px-5.5 rounded-md transition-all duration-200 hover:bg-[#E6BC00] hover:-translate-y-0.5 border-none cursor-pointer"
            >
              Fale Conosco
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className={`md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1 ${
            isMobileMenuOpen ? 'open' : ''
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-250 ${
              isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-250 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-250 ${
              isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-[#111111] border-b border-[#1A1A1A] py-6 px-6 pb-8 z-[999] flex-col gap-5 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="text-[#AAAAAA] no-underline text-base font-normal py-2 border-b border-[#1A1A1A] transition-colors text-left w-full hover:text-[#FFD100]"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('contato')}
          className="bg-[#FFD100] text-[#0A0A0A] font-semibold text-center rounded-lg py-3.5 !border-none mt-2 hover:bg-[#E6BC00] transition-colors"
        >
          Falar com um especialista →
        </button>
      </div>
    </>
  );
};
