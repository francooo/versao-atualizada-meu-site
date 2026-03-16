import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Cog, Image, Calendar, Link as LinkIcon, File, CalendarCheck, Phone } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Search,
    title: 'Consultoria em Ecommerce',
    subtitle: 'Transforme seu negócio digital com estratégia',
    description: 'Consultoria estratégica e personalizada para identificar oportunidades, corrigir gargalos e potencializar resultados.',
    benefits: [
      'Diagnóstico completo do e-commerce',
      'Plano de ação personalizado',
      'Acompanhamento e mentoria',
    ],
    includes: [
      'Análise técnica e operacional',
      'Roadmap de prioridades',
      'Suporte de especialistas',
    ],
    link: '/servicos/consultoria',
  },
  {
    icon: Cog,
    title: 'Desenvolvimento de Ecommerce',
    subtitle: 'Lojas virtuais modernas e escaláveis',
    description: 'Desenvolvimento de lojas virtuais sob medida, seguras e otimizadas para performance e conversão.',
    benefits: [
      'Design responsivo e exclusivo',
      'Integração de pagamentos',
      'SEO otimizado',
    ],
    includes: [
      'Briefing e planejamento',
      'Desenvolvimento ágil',
      'Suporte pós-lançamento',
    ],
    link: '/servicos/desenvolvimento',
  },
  {
    icon: Image,
    title: 'Sistemas com IA',
    subtitle: 'Automatize e personalize com inteligência',
    description: 'Soluções de IA sob medida para automação, personalização e decisões inteligentes.',
    benefits: [
      'Chatbots inteligentes',
      'Recomendações personalizadas',
      'Análise preditiva',
    ],
    includes: [
      'Desenvolvimento de modelos IA',
      'Integração com sistemas',
      'Treinamento e suporte',
    ],
    link: '/servicos/ia',
  },
  {
    icon: Calendar,
    title: 'Desenvolvimento de BI',
    subtitle: 'Transforme dados em decisões',
    description: 'Soluções de BI com dashboards, relatórios e análises para impulsionar o crescimento.',
    benefits: [
      'Dashboards interativos',
      'Relatórios automatizados',
      'KPIs personalizados',
    ],
    includes: [
      'Mapeamento de indicadores',
      'Desenvolvimento de painéis',
      'Treinamento de equipe',
    ],
    link: '/servicos/bi',
  },
  {
    icon: LinkIcon,
    title: 'Automação de Processos',
    subtitle: 'Eficiência e redução de custos',
    description: 'Automatize tarefas repetitivas e aumente a eficiência do seu negócio com automação inteligente.',
    benefits: [
      'Mapeamento de processos',
      'Desenvolvimento de integrações',
      'Workflows automatizados',
    ],
    includes: [
      'Análise de gargalos',
      'Criação de fluxos',
      'Monitoramento e alertas',
    ],
    link: '/servicos/automacao',
  },
  {
    icon: File,
    title: 'Sites Institucionais',
    subtitle: 'Presença digital forte e profissional',
    description: 'Desenvolvimento de sites institucionais modernos, responsivos e otimizados para resultados.',
    benefits: [
      'Design exclusivo',
      'Responsividade total',
      'SEO avançado',
    ],
    includes: [
      'Layout personalizado',
      'CMS integrado',
      'Otimização de performance',
    ],
    link: '/servicos/sites',
  },
  {
    icon: CalendarCheck,
    title: 'Gestão de Tráfego Pago',
    subtitle: 'Atraia mais clientes e vendas',
    description: 'Campanhas estratégicas em Google Ads, Facebook Ads e outras plataformas para maximizar resultados.',
    benefits: [
      'Planejamento de campanhas',
      'Criação de anúncios',
      'Otimização de investimento',
    ],
    includes: [
      'Gestão de contas',
      'Relatórios de performance',
      'Remarketing',
    ],
    link: '/servicos/trafego',
  },
  {
    icon: Cog,
    title: 'Implementação de ERPs',
    subtitle: 'Centralize e automatize sua gestão',
    description: 'Implementação de sistemas ERP sob medida para automatizar processos e centralizar a gestão.',
    benefits: [
      'Diagnóstico e planejamento',
      'Parametrização e customização',
      'Integração de sistemas',
    ],
    includes: [
      'Treinamento da equipe',
      'Suporte pós-implantação',
      'Acompanhamento contínuo',
    ],
    link: '/servicos/erp',
  },
  {
    icon: LinkIcon,
    title: 'Integração de Sistemas',
    subtitle: 'Conecte todas as áreas do seu negócio',
    description: 'Integrações inteligentes entre plataformas, ERPs, e-commerces e APIs.',
    benefits: [
      'Mapeamento de necessidades',
      'Desenvolvimento de APIs',
      'Sincronização de dados',
    ],
    includes: [
      'Monitoramento 24/7',
      'Documentação completa',
      'Suporte técnico',
    ],
    link: '/servicos/integracao',
  },
];

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-24 px-4 md:px-14 bg-[#111111]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <p className="section-label">O que fazemos</p>
        <h2
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Nossos <span className="text-[#FFD100]">Serviços</span>
        </h2>
        <p
          className={`section-sub transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Soluções completas em tecnologia para impulsionar seu ecommerce e transformar sua presença digital.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-[#0A0A0A] rounded-2xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#FFD100]/30 transition-all duration-500 flex flex-col h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon and Title */}
                <div className="flex flex-col items-start mb-4">
                  <IconComponent className="w-10 h-10 text-[#FFD100] mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{service.title}</h3>
                  <span className="text-[#FFD100] font-medium mb-3 text-sm sm:text-base">{service.subtitle}</span>
                </div>

                {/* Description */}
                <p className="text-[#AAAAAA] mb-4 flex-1 text-sm sm:text-base">{service.description}</p>

                {/* Benefits and Includes */}
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <h4 className="text-[#FFD100] font-semibold mb-2 flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-[#FFD100] rounded-full"></span>
                      Benefícios
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-[#AAAAAA] text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 bg-[#FFD100] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#FFD100] font-semibold mb-2 flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-[#FFD100] rounded-full"></span>
                      O que inclui
                    </h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-[#AAAAAA] text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 bg-[#FFD100]/50 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2">
                  <Link to={service.link} className="w-full">
                    <Button variant="outline" className="w-full text-[#FFD100] border-[#FFD100]/50 hover:bg-[#FFD100]/10 font-semibold px-4 py-2 flex items-center justify-center gap-2 min-h-[44px] text-sm">
                      Saiba mais →
                    </Button>
                  </Link>
                  <a href="tel:+5551981220279" className="w-full">
                    <Button className="w-full bg-[#FFD100] hover:bg-[#E6BC00] text-[#0A0A0A] font-semibold px-4 py-2 flex items-center justify-center gap-2 min-h-[44px] text-sm">
                      <Phone className="w-4 h-4" /> (51) 98122-0279
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
