import { useEffect, useState, useRef } from 'react';

export const Marquee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const items = [
    'Consultoria em E-commerce',
    'Desenvolvimento de Lojas Virtuais',
    'Automação com Inteligência Artificial',
    'Integrações e APIs',
    'Marketing Digital e Growth',
    'Shopify · WooCommerce · VTEX',
    'Suporte Contínuo com SLA',
  ];

  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      ref={sectionRef}
      className={`overflow-hidden border-t border-b border-[#1A1A1A] py-4.5 bg-[#111111] transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="animate-marquee flex gap-13 w-max hover:[animation-play-state:paused]">
        {allItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3.5 text-xs font-medium tracking-[0.08em] uppercase text-[#555555] whitespace-nowrap transition-colors hover:text-[#AAAAAA]"
          >
            <span className="w-1.5 h-1.5 bg-[#FFD100] rounded-full flex-shrink-0"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
