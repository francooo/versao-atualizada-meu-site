
import { useState, useEffect, useRef } from 'react';

export const Cases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const cases = [
    {
      category: 'BI',
      title: 'Time do Cruzeiro - Porto Alegre',
      description: 'Desenvolvimento de BI personalizado para avaliação de desempenho de atletas do time do Cruzeiro de Porto Alegre.',
      duration: '30 dias',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    },
    {
      category: 'E-commerce',
      title: 'BR Auto Peças',
      description: 'Construção completa do ecommerce para BR Auto Peças, implementando soluções personalizadas para otimização de vendas.',
      duration: '90 dias',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', // NOVA IMAGEM
    },
    {
      category: 'Integração',
      title: 'Integração E-rede com ERP Tiny',
      description: 'Case de integração da E-rede com o ERP Tiny da Olist, automatizando processos e otimizando operações.',
      duration: '30 dias',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    },
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
        setActiveCase((prev) => (prev + 1) % cases.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="cases" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 transform skew-y-3"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Cases de <span className="text-yellow-500">Sucesso</span>
          </h2>
          <p className={`text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Conheça alguns projetos que transformaram negócios e geraram resultados extraordinários.
          </p>
        </div>

        {/* Interactive Case Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Case Content */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="mb-3 sm:mb-4">
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  {cases[activeCase].category}
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                {cases[activeCase].title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                {cases[activeCase].description}
              </p>
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-yellow-50 rounded-xl px-6 sm:px-10 py-4 sm:py-6 text-center shadow-sm">
                  <div className="text-lg sm:text-2xl font-bold text-yellow-600 mb-1">{cases[activeCase].duration}</div>
                  <div className="text-gray-700 font-medium text-xs sm:text-base">Duração do Projeto</div>
                </div>
              </div>
              {/* Case Navigation */}
              <div className="flex space-x-2 justify-center">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCase(index)}
                    className={`w-6 h-4 rounded-full border transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      activeCase === index ? 'bg-yellow-400 border-yellow-600' : 'bg-gray-200 border-gray-300'
                    }`}
                    style={{ minWidth: 24, minHeight: 24 }}
                    aria-label={`Selecionar case ${index + 1}`}
                  >
                    {activeCase === index && <span className="block w-4 h-4 bg-yellow-600 rounded-full"></span>}
                  </button>
                ))}
              </div>
            </div>
            {/* Case Image */}
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative group">
                <img 
                  src={cases[activeCase].image}
                  alt={cases[activeCase].title}
                  className="w-full h-56 xs:h-72 sm:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80">{cases[activeCase].category}</div>
                  <div className="text-base sm:text-xl font-semibold">{cases[activeCase].title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className={`mt-10 sm:mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              {[
                { number: '100+', label: 'Projetos Concluídos', icon: '🚀' },
                { number: '88%', label: 'Taxa de Satisfação', icon: '⭐' },
                { number: '120%', label: 'Aumento Médio em Vendas', icon: '📈' },
                { number: '24h', label: 'Tempo de Resposta', icon: '⚡' }
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/90 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
