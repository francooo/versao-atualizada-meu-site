import { useEffect, useState, useRef } from 'react';

export const CTABanner = () => {
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
      id="contato"
      ref={sectionRef}
      className="bg-[#FFD100] py-20 px-14 relative overflow-hidden"
    >
      {/* Background AF Text */}
      <div className="absolute -right-5 top-1/2 -translate-y-1/2 font-syne text-[260px] font-extrabold text-black/5 tracking-[-10px] leading-none pointer-events-none select-none">
        AF
      </div>

      <div
        className={`max-w-[1400px] mx-auto flex items-center justify-between gap-10 flex-wrap relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Content */}
        <div>
          <p className="section-label !text-black/45 before:!bg-black/35">
            Pronto para crescer?
          </p>
          <h2 className="section-title !text-[#0A0A0A] !mb-0">
            Vamos transformar<br />seu e-commerce.
          </h2>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 items-start">
          <a
            href="https://wa.me/5551981220279"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black"
          >
            Falar no WhatsApp →
          </a>
          <span className="text-[13px] text-black/45 pl-1">
            Resposta em até 2 horas úteis
          </span>
        </div>
      </div>
    </section>
  );
};
