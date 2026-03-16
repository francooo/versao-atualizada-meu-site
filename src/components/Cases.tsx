import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    stars: '★★★★★',
    text: '"A AF ecomm não entregou só um site — entregou uma máquina de vendas. Em 90 dias vimos nossa taxa de conversão dobrar e o custo por aquisição cair 40%."',
    author: 'Ricardo Santos',
    role: 'CEO · Loja Exclusiva',
    initials: 'RS',
  },
  {
    stars: '★★★★★',
    text: '"A automação com IA reduziu nossos custos operacionais em 35%. O time deles entende de tecnologia e de negócio ao mesmo tempo — combinação rara."',
    author: 'Camila Mendes',
    role: 'Diretora de Ops · ModaPlus',
    initials: 'CM',
  },
  {
    stars: '★★★★★',
    text: '"Migração completa do nosso ERP integrado ao Shopify sem uma hora de downtime. Profissionalismo e atenção ao detalhe que raramente encontramos no mercado."',
    author: 'Pedro Lima',
    role: 'CTO · TechStore Brasil',
    initials: 'PL',
  },
];

export const Cases = () => {
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
      id="depoimentos"
      ref={sectionRef}
      className="py-24 px-14 bg-[#0A0A0A]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <p className="section-label">O que dizem nossos clientes</p>
        <h2
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Cases reais,<br />resultados reais
        </h2>
        <p
          className={`section-sub transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Empresas que confiaram na AF ecomm para transformar suas operações digitais e alcançar novos patamares de crescimento.
        </p>

        {/* Testimonials Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-[#111111] border border-[#1A1A1A] rounded-[18px] p-8 transition-all duration-250 hover:border-[#2A2A2A] hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="text-[#FFD100] text-sm mb-5 tracking-[3px]">
                {testimonial.stars}
              </div>

              {/* Text */}
              <p className="text-sm leading-[1.75] text-[#AAAAAA] mb-7 italic">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#1A1A1A]">
                <div className="w-9.5 h-9.5 rounded-full bg-[rgba(255,209,0,0.10)] border border-[rgba(255,209,0,0.22)] flex items-center justify-center font-syne text-xs font-bold text-[#FFD100] flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-[#555555] mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
