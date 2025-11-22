import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ERP() {
  return (
    <>
      <Header />
      {/* Bloco de parceria Olist Tiny */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src="https://d3hw41hpah8tvx.cloudfront.net/images/logo_olist_rebrand_62df2f9c0a.svg" alt="Logo Olist Tiny" className="h-14 w-auto" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-yellow-600 mb-1">Parceiro Certificado Olist ERP Tiny</h3>
            <p className="text-gray-700 mb-2">Sou implementador e consultor parceiro do Olist Tiny ERP, pronto para ajudar sua empresa a automatizar processos, integrar sistemas e crescer com tecnologia de ponta.</p>
            <a href="https://tiny.com.br/parceiros-comerciais/sobre?parceiro=AFECOMMERCE" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 mt-2">Ver perfil de parceiro</a>
          </div>
        </div>
      </div>
      <ServiceTemplate
        icon={<Cog className="w-10 h-10 text-white" />}
        title="Implementação de ERPs"
        subtitle="Centralize e automatize sua gestão"
        description="Implementação de sistemas ERP sob medida para automatizar processos e centralizar a gestão."
        benefits={[
          'Diagnóstico e planejamento',
          'Parametrização e customização',
          'Integração de sistemas',
        ]}
        includes={[
          'Treinamento da equipe',
          'Suporte pós-implantação',
          'Acompanhamento contínuo',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Entendimento das necessidades e processos.' },
          { step: 'Desenvolvimento', description: 'Parametrização e integração do ERP.' },
          { step: 'Implementação', description: 'Treinamento e suporte pós-implantação.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 