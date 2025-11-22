import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { Image } from 'lucide-react';

export default function IA() {
  return (
    <>
      <Header />
      <ServiceTemplate
        icon={<Image className="w-10 h-10 text-white" />}
        title="Sistemas com Inteligência Artificial"
        subtitle="Automatize e personalize com inteligência"
        description="Soluções de IA sob medida para automação, personalização e decisões inteligentes."
        benefits={[
          'Chatbots inteligentes',
          'Recomendações personalizadas',
          'Análise preditiva',
        ]}
        includes={[
          'Desenvolvimento de modelos IA',
          'Integração com sistemas',
          'Treinamento e suporte',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Identificação de oportunidades para IA no seu negócio.' },
          { step: 'Desenvolvimento', description: 'Criação e treinamento de modelos inteligentes.' },
          { step: 'Implementação', description: 'Integração e acompanhamento dos resultados.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 