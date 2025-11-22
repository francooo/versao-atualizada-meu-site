
import { useState, useEffect, useRef } from 'react';
import {
  Search,
  Cog,
  Calendar,
  Image,
  CalendarCheck,
  File,
  Link as LinkIcon,
  ArrowRight,
  CheckCircle,
  ListChecks,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const serviceCards = [
  {
    icon: <Search className="w-10 h-10 text-yellow-500 mb-4" />,
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
      'Reuniões periódicas',
      'Suporte de especialistas',
    ],
    link: '/servicos/consultoria',
  },
  {
    icon: <Cog className="w-10 h-10 text-yellow-500 mb-4" />,
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
      'Testes e homologação',
      'Suporte pós-lançamento',
    ],
    link: '/servicos/desenvolvimento',
  },
  {
    icon: <Image className="w-10 h-10 text-yellow-500 mb-4" />,
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
    icon: <Calendar className="w-10 h-10 text-yellow-500 mb-4" />,
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
    icon: <LinkIcon className="w-10 h-10 text-yellow-500 mb-4" />,
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
    icon: <File className="w-10 h-10 text-yellow-500 mb-4" />,
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
    icon: <CalendarCheck className="w-10 h-10 text-yellow-500 mb-4" />,
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
    icon: <Cog className="w-10 h-10 text-yellow-500 mb-4" />,
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
    icon: <LinkIcon className="w-10 h-10 text-yellow-500 mb-4" />,
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
  const isMobile = useIsMobile();

  useEffect(() => {
    // On mobile, show immediately or use a timer fallback
    if (isMobile) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // Show after 500ms on mobile
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 } // Lowered threshold for better mobile detection
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Nossos <span className="text-yellow-500">Serviços</span></h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Soluções completas em tecnologia para impulsionar seu ecommerce e transformar sua presença digital.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {serviceCards.map((service, index) => (
            <div key={index} className={`group bg-white rounded-2xl p-4 sm:p-8 shadow-lg border border-yellow-100 hover:border-yellow-300 transition-all duration-500 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex flex-col items-start mb-3 sm:mb-4">
                {service.icon}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
                <span className="text-yellow-600 font-medium mb-2 text-base sm:text-lg">{service.subtitle}</span>
              </div>
              <p className="text-gray-600 mb-3 sm:mb-4 flex-1 text-sm sm:text-base">{service.description}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <h4 className="text-yellow-500 font-semibold mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base"><CheckCircle className="w-5 h-5" />Benefícios</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-xs sm:text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-500 font-semibold mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base"><ListChecks className="w-5 h-5" />O que inclui</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-xs sm:text-sm"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <Link to={service.link} className="w-full sm:w-fit">
                  <Button variant="outline" className="text-yellow-600 border-yellow-500 hover:bg-yellow-50 font-semibold px-4 py-2 flex items-center gap-2 min-h-[44px] text-sm sm:text-base">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+5551981220279" className="w-full sm:w-fit">
                  <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 flex items-center gap-2 min-h-[44px] text-sm sm:text-base">
                    <Phone className="w-4 h-4" /> (51) 98122-0279
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para transformar seu negócio?</h3>
            <p className="text-white/90 mb-6 text-lg">Entre em contato conosco e descubra como podemos impulsionar seus resultados.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:andrewsfranco93@gmail.com">
                <Button variant="outline" className="text-yellow-600 border-white bg-white hover:bg-yellow-50 font-semibold px-8 py-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Enviar Email
                </Button>
              </a>
              <a href="tel:+5551981220279">
                <Button variant="default" className="bg-white text-yellow-600 hover:bg-yellow-100 font-semibold px-8 py-4 flex items-center gap-2 border border-white">
                  <Phone className="w-5 h-5" /> Ligar Agora (51) 98122-0279
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
