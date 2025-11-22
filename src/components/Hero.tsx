
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Transforme seu ecommerce com inteligência",
    "Automatize processos e maximize resultados",
    "Tecnologia que impulsiona vendas"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-2 sm:px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight break-words">
            <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {texts[currentText]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 animate-slide-up max-w-full" style={{ animationDelay: '0.4s' }}>
            Soluções completas em tecnologia para ecommerce que transformam ideias em resultados extraordinários
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-yellow-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px]"
              style={{ minHeight: 44 }}
            >
              Quero Crescer! 🚀
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300 min-h-[44px]"
              style={{ minHeight: 44 }}
            >
              Nossos Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              { number: '200+', label: 'Projetos' },
              { number: '98%', label: 'Satisfação' },
              { number: '5+', label: 'Anos' },
              { number: '24/7', label: 'Suporte' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-base sm:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
