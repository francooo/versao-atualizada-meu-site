import { useEffect, useState, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    description: 'Analisamos fundo o seu negócio: métricas, tecnologia, concorrência e oportunidades para montar um diagnóstico preciso.',
  },
  {
    num: '02',
    title: 'Estratégia',
    description: 'Desenhamos o plano de ação com prioridades, entregáveis, timelines e KPIs claros — sem achismo.',
  },
  {
    num: '03',
    title: 'Execução',
    description: 'Nosso time entra em campo: desenvolvimento, integrações, automações e ajustes acontecem com total transparência.',
  },
  {
    num: '04',
    title: 'Evolução Contínua',
    description: 'Monitoramos, medimos e evoluímos. Relatórios periódicos e otimizações constantes para maximizar seus resultados.',
  },
];

export const HowItWorks = () => {
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

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="py-24 px-14 bg-[#111111]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <p className="section-label">Como trabalhamos</p>
        <h2
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Da estratégia à execução<br />em 4 etapas
        </h2>
        <p
          className={`section-sub transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Um processo claro e transparente para que você saiba exatamente o que esperar em cada fase do projeto.
        </p>

        {/* Process Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative mt-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-7 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="group px-6 text-center relative"
            >
              {/* Step Number Circle */}
              <div className="flex justify-center mb-7">
                <div className="w-14 h-14 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center font-syne text-base font-extrabold text-[#3A3A3A] transition-all duration-250 relative z-10 group-hover:bg-[#FFD100] group-hover:text-[#0A0A0A] group-hover:border-[#FFD100]">
                  {step.num}
                </div>
              </div>

              {/* Title */}
              <div className="font-syne text-base font-bold mb-2.5 text-white">
                {step.title}
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#555555] leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
