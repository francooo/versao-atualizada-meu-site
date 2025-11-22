import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { CalendarCheck } from 'lucide-react';

export default function Trafego() {
  return (
    <>
      <Header />
      <ServiceTemplate
        icon={<CalendarCheck className="w-10 h-10 text-white" />}
        title="Gestão de Tráfego Pago"
        subtitle="Atraia mais clientes e vendas"
        description="Campanhas estratégicas em Google Ads, Facebook Ads e outras plataformas para maximizar resultados."
        benefits={[
          'Planejamento de campanhas',
          'Criação de anúncios',
          'Otimização de investimento',
        ]}
        includes={[
          'Gestão de contas',
          'Relatórios de performance',
          'Remarketing',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Análise do público e definição de objetivos.' },
          { step: 'Desenvolvimento', description: 'Criação e otimização das campanhas.' },
          { step: 'Implementação', description: 'Acompanhamento e ajustes para maximizar ROI.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 