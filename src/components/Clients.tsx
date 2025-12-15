import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import unipelLogo from '../assets/unipel-logo.png';

const clients = [
  { name: 'Unipel Papeis Especiais', logo: unipelLogo },
  { name: 'Cliente 2', logo: 'https://via.placeholder.com/150x80?text=Cliente+2' },
  { name: 'Cliente 3', logo: 'https://via.placeholder.com/150x80?text=Cliente+3' },
  { name: 'Cliente 4', logo: 'https://via.placeholder.com/150x80?text=Cliente+4' },
  { name: 'Cliente 5', logo: 'https://via.placeholder.com/150x80?text=Cliente+5' },
  { name: 'Cliente 6', logo: 'https://via.placeholder.com/150x80?text=Cliente+6' },
  { name: 'Cliente 7', logo: 'https://via.placeholder.com/150x80?text=Cliente+7' },
  { name: 'Cliente 8', logo: 'https://via.placeholder.com/150x80?text=Cliente+8' },
];

export const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos <span className="text-yellow-500">Clientes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empresas que confiam em nosso trabalho para transformar seus negócios digitais
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-yellow-50 transition-colors duration-300"
              aria-label="Anterior"
              data-testid="button-clients-scroll-left"
            >
              <ChevronLeft className="w-6 h-6 text-yellow-500" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl shadow-md p-6 flex items-center justify-center min-w-[180px] h-[100px] hover:shadow-lg transition-shadow duration-300"
                data-testid={`card-client-${index}`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-yellow-50 transition-colors duration-300"
              aria-label="Próximo"
              data-testid="button-clients-scroll-right"
            >
              <ChevronRight className="w-6 h-6 text-yellow-500" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
