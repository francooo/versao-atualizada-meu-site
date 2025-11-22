import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { Link as LinkIcon } from 'lucide-react';

export default function Automacao() {
  return (
    <>
      <Header />
      <ServiceTemplate
        icon={<LinkIcon className="w-10 h-10 text-white" />}
        title="Automação de Processos"
        subtitle="Eficiência e redução de custos"
        description="Automatize tarefas repetitivas e aumente a eficiência do seu negócio com automação inteligente."
        benefits={[
          'Mapeamento de processos',
          'Desenvolvimento de integrações',
          'Workflows automatizados',
        ]}
        includes={[
          'Análise de gargalos',
          'Criação de fluxos',
          'Monitoramento e alertas',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Identificação de gargalos e oportunidades.' },
          { step: 'Desenvolvimento', description: 'Criação de integrações e automações.' },
          { step: 'Implementação', description: 'Monitoramento e suporte contínuo.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 