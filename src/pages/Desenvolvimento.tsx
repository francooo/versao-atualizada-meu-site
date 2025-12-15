import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ServiceTemplate } from '@/components/ServiceTemplate';
import { Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Desenvolvimento() {
  return (
    <>
      <Header />
      {/* Bloco de parceria Nuvemshop */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src="https://app-insti-cdn.nuvemshop.com.br/site/dist/images/widgets/closing-cta/image-3.webp?v=3ded868" alt="Logo Nuvemshop" className="h-14 w-auto" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-yellow-600 mb-1">Parceiro Certificado Nuvemshop</h3>
            <p className="text-gray-700 mb-2">Sou parceiro certificado da Nuvemshop, a maior plataforma de ecommerce da América Latina. Ofereço implantação, customização e integração de lojas virtuais para você vender mais e crescer com tecnologia de ponta.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Botão WhatsApp */}
              <a href="https://wa.me/5551981220279" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
                Falar no WhatsApp
              </a>
              {/* Link para página detalhada */}
              <Link to="/servicos/desenvolvimento/nuvemshop" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
                Saiba mais sobre Nuvemshop
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bloco de parceria Linx */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src="https://www.linx.com.br/app/themes/linx/assets/crystals/static/logo.png" alt="Logo Linx" className="h-14 w-auto" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-yellow-600 mb-1">Parceiro certificado em Linx Commerce</h3>
            <p className="text-gray-700 mb-2">Atuo com implantação, integração e customização de lojas virtuais na plataforma Linx Commerce, referência em soluções robustas para grandes operações de ecommerce no Brasil. Conte com expertise para potencializar sua loja Linx.</p>
            <a href="https://wa.me/5551981220279" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 mt-2">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bloco de parceria Uappi (Wapstore) */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src="https://allomni.com.br/wp-content/uploads/2024/08/allomni-ecommerce-partner-tech-ferramentas-uappi.png" alt="Logo Uappi" className="h-14 w-auto" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-yellow-600 mb-1">Parceiro certificado Uappi</h3>
            <p className="text-gray-700 mb-2">Realizo implantação, personalização e integração de lojas na plataforma Uappi, ideal para quem busca flexibilidade e inovação no ecommerce. Transforme sua ideia em uma loja virtual de sucesso com Uappi.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/5551981220279" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
                Falar no WhatsApp
              </a>
              <a href="https://uappi.com.br/agencia/af-ecomm/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
                Saiba mais sobre a Uappi
              </a>
            </div>
          </div>
        </div>
      </div>
      <ServiceTemplate
        icon={<Cog className="w-10 h-10 text-white" />}
        title="Desenvolvimento de Ecommerce"
        subtitle="Lojas virtuais modernas e escaláveis"
        description="Desenvolvimento de lojas virtuais sob medida, seguras e otimizadas para performance e conversão."
        benefits={[
          'Design responsivo e exclusivo',
          'Integração de pagamentos',
          'SEO otimizado',
        ]}
        includes={[
          'Briefing e planejamento',
          'Desenvolvimento ágil',
          'Testes e homologação',
          'Suporte pós-lançamento',
        ]}
        process={[
          { step: 'Mapeamento', description: 'Entendimento do público, objetivos e diferenciais.' },
          { step: 'Desenvolvimento', description: 'Criação da loja virtual com tecnologia de ponta.' },
          { step: 'Implementação', description: 'Publicação, testes finais e suporte contínuo.' },
        ]}
      />
      <Footer />
      <BackToTop />
    </>
  );
} 