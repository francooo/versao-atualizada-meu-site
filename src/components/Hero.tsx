import { useEffect, useState, useRef } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '+150', label: 'Projetos entregues' },
    { number: '98%', label: 'Satisfação dos clientes' },
    { number: '8 anos', label: 'Expertise em e-commerce' },
    { number: 'R$ 800k+', label: 'Em vendas geradas' },
  ];

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center pt-36 pb-20 px-14 relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="hero-grid-bg"></div>
      
      {/* Glow Effect */}
      <div className="hero-glow"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Hero Tag */}
        <div
          className={`inline-flex items-center gap-2 bg-[rgba(255,209,0,0.10)] border border-[rgba(255,209,0,0.22)] text-[#FFD100] text-[11px] font-medium tracking-[0.12em] uppercase py-[7px] px-4 rounded-full mb-9 w-fit transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="w-1.5 h-1.5 bg-[#FFD100] rounded-full animate-pulse-dot"></span>
          Especialistas em e-commerce
        </div>

        {/* Main Title */}
        <h1
          className={`font-syne font-extrabold text-[clamp(46px,7.5vw,88px)] leading-[1.02] tracking-[-0.03em] max-w-[860px] mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Transformando<br />
          <span className="text-[#FFD100]">negócios</span> com<br />
          <span className="text-outline">tecnologia</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg font-light text-[#AAAAAA] max-w-[540px] leading-[1.7] mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Consultoria, desenvolvimento e automação com IA para lojas virtuais que querem crescer de verdade — com estratégia, execução e resultado mensurável.
        </p>

        {/* Action Buttons */}
        <div
          className={`flex gap-4 items-center flex-wrap transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() => scrollToSection('servicos')}
            className="btn-primary"
          >
            Ver nossos serviços →
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="btn-ghost"
          >
            Como trabalhamos
          </button>
        </div>

        {/* Stats */}
        <div
          className={`flex gap-14 mt-20 pt-12 border-t border-[#1A1A1A] flex-wrap transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-syne text-[38px] font-extrabold text-[#FFD100] leading-none mb-1.5">
                {stat.number}
              </div>
              <div className="text-[13px] text-[#555555] font-normal tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
