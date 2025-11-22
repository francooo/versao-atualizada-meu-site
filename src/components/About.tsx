
import { useState, useEffect, useRef } from 'react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const timeline = [
    { year: '2023', title: 'Primeiros Projetos', description: 'Início dos primeiros projetos de ecommerce e consultoria' },
    { year: '2024', title: 'Expansão dos Serviços', description: 'Aumento dos serviços para implantação e integração de ERPs' },
    { year: '2025', title: 'BI e Inteligência Artificial', description: 'Início dos trabalhos com BI e inteligência artificial' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % timeline.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transform -skew-y-3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Sobre a <span className="text-yellow-500">AF ecomm</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Somos especialistas em transformar negócios através da tecnologia, 
            oferecendo soluções inovadoras que impulsionam o crescimento do seu ecommerce.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Info */}
          <div className="transition-all duration-1000 delay-500">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa Missão</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Democratizar o acesso às tecnologias mais avançadas do mercado, 
                permitindo que empresas de todos os tamanhos possam competir em 
                igualdade no mundo digital.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: '100+', label: 'Projetos Entregues' },
                  { value: '88%', label: 'Taxa de Sucesso' },
                  { value: '2', label: 'Anos de Experiência' },
                  { value: '50+', label: 'Clientes Ativos' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-yellow-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline - Nova Jornada */}
          <div className="">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">Nossa Jornada</h3>
            <div className="relative pl-8">
              {/* Linha vertical */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-yellow-300 rounded-full"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-10">
                  {/* Bolinha */}
                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-4 border-white shadow-lg flex items-center justify-center absolute left-0 top-0 z-10">
                    <span className="text-white font-bold text-base">•</span>
                  </div>
                  {/* Conteúdo */}
                  <div className="ml-12">
                    <div className="inline-block bg-yellow-200 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
