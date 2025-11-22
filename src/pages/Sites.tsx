import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { File } from 'lucide-react';

export default function Sites() {
  return (
    <>
      <Header />
      <ServiceTemplate
        icon={<File className="w-10 h-10 text-white" />}
        title="Sites Institucionais"
        subtitle="Presença digital forte e profissional"
        description="Desenvolvimento de sites institucionais modernos, responsivos e otimizados para resultados."
        benefits={[
          'Design exclusivo',
          'Responsividade total',
          'SEO avançado',
        ]}
        includes={[
          'Layout personalizado',
          'CMS integrado',
          'Otimização de performance',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Levantamento de requisitos e identidade visual.' },
          { step: 'Desenvolvimento', description: 'Criação do site com foco em performance.' },
          { step: 'Implementação', description: 'Publicação e otimização para SEO.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 