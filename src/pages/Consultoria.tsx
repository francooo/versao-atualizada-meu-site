import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { Search } from 'lucide-react';

export default function Consultoria() {
  return (
    <>
      <Header />
      <ServiceTemplate
        icon={<Search className="w-10 h-10 text-white" />}
        title="Consultoria em Ecommerce"
        subtitle="Transforme seu negócio digital com estratégia"
        description="Consultoria estratégica e personalizada para identificar oportunidades, corrigir gargalos e potencializar resultados."
        benefits={[
          'Diagnóstico completo do e-commerce',
          'Plano de ação personalizado',
          'Acompanhamento e mentoria',
        ]}
        includes={[
          'Análise técnica e operacional',
          'Roadmap de prioridades',
          'Reuniões periódicas',
          'Suporte de especialistas',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Análise detalhada do cenário atual e identificação de oportunidades.' },
          { step: 'Desenvolvimento', description: 'Elaboração do plano de ação e definição de estratégias.' },
          { step: 'Implementação', description: 'Acompanhamento e ajustes contínuos para garantir resultados.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 