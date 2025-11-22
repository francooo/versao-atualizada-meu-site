
import { useState, useEffect, useRef } from 'react';
import { Search, Cog, Calendar, CalendarCheck } from 'lucide-react';

export const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      icon: Search,
      title: 'Análise e Diagnóstico',
      description: 'Realizamos uma análise completa do seu negócio atual, identificando oportunidades e pontos de melhoria.',
      details: ['Auditoria técnica completa', 'Análise da concorrência', 'Identificação de oportunidades'],
      duration: '1-2 semanas'
    },
    {
      icon: Cog,
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos uma estratégia sob medida para seu negócio, alinhada com seus objetivos e recursos.',
      details: ['Planejamento estratégico', 'Definição de tecnologias', 'Cronograma de implementação'],
      duration: '1 semana'
    },
    {
      icon: Calendar,
      title: 'Desenvolvimento',
      description: 'Colocamos a mão na massa para implementar as soluções planejadas com qualidade e agilidade.',
      details: ['Desenvolvimento ágil', 'Testes contínuos', 'Comunicação transparente'],
      duration: '4-12 semanas'
    },
    {
      icon: CalendarCheck,
      title: 'Entrega e Suporte',
      description: 'Entregamos o projeto finalizado e oferecemos suporte contínuo para garantir o sucesso.',
      details: ['Treinamento da equipe', 'Monitoramento 24/7', 'Suporte técnico contínuo'],
      duration: 'Ongoing'
    }
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
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Como <span className="text-yellow-500">Funcionamos</span>
          </h2>
          <p className={`text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Um processo estruturado e transparente para garantir o sucesso do seu projeto.
          </p>
        </div>

        {/* Desktop Process */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform -translate-y-1/2 transition-all duration-1000"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>

            <div className="grid grid-cols-4 gap-4 sm:gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index <= activeStep;
                const isCurrent = index === activeStep;

                return (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 cursor-pointer ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step Number */}
                    <div className={`relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 flex items-center justify-center ${
                      isActive ? 'bg-yellow-500 scale-110' : 'bg-gray-300'
                    } ${isCurrent ? 'animate-pulse' : ''}`}>
                      <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        isActive ? 'bg-yellow-600 text-white' : 'bg-gray-400 text-white'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-base sm:text-lg font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    <div className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full inline-block ${
                      isActive ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {step.duration}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Process */}
        <div className="lg:hidden">
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index <= activeStep;

              return (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 sm:space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isActive ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}>
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <h3 className={`text-base sm:text-lg font-bold ${isActive ? 'text-yellow-600' : 'text-gray-600'}`}> 
                        {step.title}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        isActive ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-xs sm:text-sm text-gray-500 flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 sm:mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Pronto para começar sua transformação digital?
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Entre em contato conosco e vamos construir juntos o futuro do seu negócio.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px] text-base sm:text-lg"
            style={{ minHeight: 44 }}
          >
            Iniciar Meu Projeto Agora!
          </button>
        </div>
      </div>
    </section>
  );
};
