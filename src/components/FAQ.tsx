import { useEffect, useState, useRef } from 'react';

const faqs = [
  {
    question: 'Em quanto tempo vejo resultados?',
    answer: 'Depende do serviço. Em consultoria, as primeiras recomendações chegam em até 2 semanas. Em desenvolvimento, o primeiro MVP fica pronto em 4 a 8 semanas. Para resultados de tráfego e conversão, os primeiros números aparecem em 30 a 60 dias de operação.',
  },
  {
    question: 'Trabalham com qual porte de empresa?',
    answer: 'Atendemos desde empreendedores que estão montando sua primeira loja até empresas com operações de médio e grande porte. O que importa é a vontade de crescer com estratégia — e não apenas ferramentas.',
  },
  {
    question: 'Posso contratar só um serviço?',
    answer: 'Sim. Você pode contratar consultoria pontual, um projeto de desenvolvimento específico, ou uma automação isolada. Não há obrigação de pacotes fechados — montamos o escopo de acordo com a sua necessidade real.',
  },
  {
    question: 'Quais plataformas vocês dominam?',
    answer: 'Shopify, WooCommerce, VTEX, Nuvemshop, Magento, e também plataformas customizadas. Além disso, trabalhamos com integrações nos principais marketplaces brasileiros: Mercado Livre, Amazon, Shopee e Magazine Luiza.',
  },
  {
    question: 'Como funciona o suporte pós-entrega?',
    answer: 'Oferecemos planos de suporte contínuo com SLA definido. Você pode escolher entre planos mensais com horas fixas de manutenção e evolução, ou suporte avulso. Nosso time está disponível via WhatsApp, e-mail e sistema de tickets.',
  },
];

export const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-14 bg-[#111111]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="section-label">Dúvidas frequentes</p>
            <h2 className="section-title">
              Perguntas<br />que você pode ter
            </h2>
            <p className="section-sub !mb-8">
              Ainda tem dúvidas? Fale com nosso time pelo WhatsApp — respondemos rápido.
            </p>
            <a
              href="https://wa.me/5551981220279"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-sm !py-3 !px-6"
            >
              Falar com especialista →
            </a>
          </div>

          {/* Right Column - FAQ List */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-[#1A1A1A] overflow-hidden ${
                  index === 0 ? 'border-t border-[#1A1A1A]' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between gap-4 py-5.5 w-full text-left cursor-pointer text-[15px] font-medium transition-colors duration-200 hover:text-white"
                  style={{ color: openIndex === index ? '#FFD100' : '#AAAAAA' }}
                >
                  {faq.question}
                  <span
                    className={`w-6 h-6 flex-shrink-0 flex items-center justify-center border rounded-full text-base transition-all duration-300 ${
                      openIndex === index
                        ? 'border-[#FFD100] text-[#FFD100] rotate-45'
                        : 'border-[#2A2A2A] text-[#555555]'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-350 text-sm text-[#555555] leading-[1.7] ${
                    openIndex === index ? 'max-h-60 pb-5.5' : 'max-h-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
