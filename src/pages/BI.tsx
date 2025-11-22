import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { Calendar } from 'lucide-react';

export default function BI() {
  return (
    <>
      <Header />
      <ServiceTemplate
        icon={<Calendar className="w-10 h-10 text-white" />}
        title="Business Intelligence (BI)"
        subtitle="Transforme dados em decisões"
        description="Soluções de BI com dashboards, relatórios e análises para impulsionar o crescimento."
        benefits={[
          'Dashboards interativos',
          'Relatórios automatizados',
          'KPIs personalizados',
        ]}
        includes={[
          'Mapeamento de indicadores',
          'Desenvolvimento de painéis',
          'Treinamento de equipe',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Levantamento de necessidades e indicadores.' },
          { step: 'Desenvolvimento', description: 'Criação de dashboards e relatórios.' },
          { step: 'Implementação', description: 'Treinamento e acompanhamento dos resultados.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 