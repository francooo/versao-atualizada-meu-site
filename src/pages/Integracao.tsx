import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { Link as LinkIcon } from 'lucide-react';

export default function Integracao() {
  return (
    <>
      <Header />
      <ServiceTemplate
        icon={<LinkIcon className="w-10 h-10 text-white" />}
        title="Integração de Sistemas"
        subtitle="Conecte todas as áreas do seu negócio"
        description="Integrações inteligentes entre plataformas, ERPs, e-commerces e APIs."
        benefits={[
          'Mapeamento de necessidades',
          'Desenvolvimento de APIs',
          'Sincronização de dados',
        ]}
        includes={[
          'Monitoramento 24/7',
          'Documentação completa',
          'Suporte técnico',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Identificação dos sistemas e fluxos a integrar.' },
          { step: 'Desenvolvimento', description: 'Criação de APIs e conectores sob medida.' },
          { step: 'Implementação', description: 'Monitoramento, documentação e suporte.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 