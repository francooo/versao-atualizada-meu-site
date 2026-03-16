import { useEffect, useState, useRef } from 'react';

const whyItems = [
  {
    title: 'Especialistas em e-commerce',
    description: 'Foco 100% em comércio digital. Não somos uma agência generalista — cada profissional entende profundamente o mercado onde você opera e os desafios que enfrenta.',
  },
  {
    title: 'Método orientado a dados',
    description: 'Cada decisão parte de análise real: métricas de conversão, comportamento do cliente e benchmarks do segmento — não de feeling ou modismo.',
  },
  {
    title: 'IA aplicada ao negócio real',
    description: 'Integramos as mais novas tecnologias de inteligência artificial de forma prática, resolvendo problemas concretos da sua operação — não só conceitos.',
  },
  {
    title: 'Parceria de longo prazo',
    description: 'Nossos melhores projetos são aqueles em que crescemos junto com o cliente. Priorizamos relações duradouras, não entregas pontuais.',
  },
];

export const About = () => {
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
      id="sobre"
      ref={sectionRef}
      className="py-24 px-14 bg-[#0A0A0A]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Visual Element */}
          <div
            className={`aspect-[1/1.05] bg-[#111111] rounded-3xl border border-[#1A1A1A] flex items-center justify-center relative overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Background gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,209,0,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,209,0,0.07) 0%, transparent 50%)',
              }}
            ></div>

            {/* Background Text */}
            <div className="font-syne text-[80px] font-extrabold text-[#1A1A1A] leading-none text-center select-none tracking-[-4px]">
              AF<br />negócios<br />digitais
            </div>

            {/* Badge */}
            <div className="absolute bottom-7 left-7 bg-[#FFD100] text-[#0A0A0A] text-[13px] font-bold py-3 px-5 rounded-xl tracking-[-0.01em] z-10 shadow-[0_8px_24px_rgba(255,209,0,0.3)]">
              <span className="block text-[10px] font-normal opacity-60 mb-0.5 tracking-[0.05em] uppercase">
                No mercado
              </span>
              +8 anos de expertise
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-7 right-7 flex flex-col gap-2 z-10">
              <div className="w-11 h-0.5 rounded bg-[#FFD100] opacity-70"></div>
              <div className="w-7.5 h-0.5 rounded bg-[#FFD100] opacity-70"></div>
              <div className="w-4.5 h-0.5 rounded bg-[#FFD100] opacity-70"></div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="section-label">Por que nos escolher</p>
            <h2 className="section-title">
              Resultado, não<br />só entrega
            </h2>
            <p className="section-sub !mb-9">
              Somos obcecados por métricas reais. Nosso trabalho termina quando o seu resultado começa a aparecer.
            </p>

            {/* Why List */}
            <ul className="list-none flex flex-col gap-0">
              {whyItems.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-5 items-start py-7 border-b border-[#1A1A1A] transition-all duration-200 hover:pl-1.5 first:pt-0 last:border-b-0 last:pb-0"
                >
                  {/* Check Icon */}
                  <div className="w-7.5 h-7.5 bg-[rgba(255,209,0,0.10)] border border-[rgba(255,209,0,0.22)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:bg-[rgba(255,209,0,0.2)]">
                    <svg
                      className="w-3 h-3 stroke-[#FFD100] fill-none stroke-[2.2]"
                      viewBox="0 0 14 14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 7l3.5 3.5L12 3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-syne text-[17px] font-bold mb-1.5 text-white">
                      {item.title}
                    </div>
                    <p className="text-sm text-[#555555] leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
