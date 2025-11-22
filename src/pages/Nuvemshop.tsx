import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Nuvemshop() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuvemshop - <span className="text-blue-600">Faça seu E-commerce</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Conheça a maior plataforma de e-commerce da América Latina e como a AF ecomm pode ajudar você a ter sucesso com esta tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* AF ecomm Silver Partner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-8">
              <img 
                src="/Nuvemshop Partners - Parceiro Silver_1_1.png" 
                alt="AF ecomm - Parceiro Silver Nuvemshop" 
                className="max-w-md w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              AF ecomm é <span className="text-yellow-500">Parceiro Silver</span> da Nuvemshop
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Como parceiro certificado Silver da Nuvemshop, oferecemos implementação especializada, 
              customização avançada e suporte completo para sua loja virtual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+5551981220279">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Ligar Agora (51) 98122-0279
                </Button>
              </a>
              <a href="https://wa.me/5551981220279" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-green-600 border-green-500 hover:bg-green-50 font-semibold px-8 py-4 flex items-center gap-2">
                  WhatsApp <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Nuvemshop Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Sobre a <span className="text-blue-600">Nuvemshop</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">História da Nuvemshop</h3>
                <p className="text-gray-600 mb-4">
                  Fundada em 2011 na Argentina, a Nuvemshop nasceu com a missão de democratizar o comércio eletrônico na América Latina. 
                  Hoje é umas das grandes plataforma de e-commerce do pais, atendendo mais de 90.000 lojas ativas.
                </p>
                <p className="text-gray-600">
                  Com escritórios no Brasil, Argentina, México e Colômbia, a empresa se consolidou como líder absoluta 
                  em soluções de e-commerce para pequenas e médias empresas.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Números Impressionantes</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Mais de 90.000 lojas ativas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Presença em 4 países
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Mais de R$ 8 bilhões em GMV anual
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Uma das lideres na América Latina
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Por que escolher a Nuvemshop?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Facilidade de Uso</h4>
                  <p className="text-blue-100">Interface intuitiva que permite criar e gerenciar sua loja sem conhecimento técnico.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Escalabilidade</h4>
                  <p className="text-blue-100">Plataforma robusta que cresce junto com seu negócio, suportando grandes volumes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Integrações</h4>
                  <p className="text-blue-100">Centenas de apps e integrações para potencializar sua operação de vendas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Nossos Serviços <span className="text-yellow-500">Nuvemshop</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Implementação Completa</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Setup inicial da loja
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Configuração de produtos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Integração de pagamentos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Configuração de frete
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Customização Avançada</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Design personalizado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Funcionalidades exclusivas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Integrações customizadas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Otimização para conversão
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Migração de Plataforma</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Migração de produtos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Transferência de clientes
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Preservação de SEO
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Zero tempo de inatividade
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Suporte Contínuo</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Atualizações regulares
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Monitoramento de performance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Suporte técnico especializado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Consultoria estratégica
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para criar sua loja Nuvemshop?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Como parceiro Silver certificado, oferecemos implementação especializada e suporte completo 
            para sua loja virtual na maior plataforma de e-commerce da América Latina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:andrewsfranco93@gmail.com">
              <Button variant="outline" className="text-yellow-600 border-white bg-white hover:bg-yellow-50 font-semibold px-8 py-4 flex items-center gap-2">
                <Mail className="w-5 h-5" /> Enviar Email
              </Button>
            </a>
            <a href="tel:+5551981220279">
              <Button className="bg-white text-yellow-600 hover:bg-yellow-100 font-semibold px-8 py-4 flex items-center gap-2 border border-white">
                <Phone className="w-5 h-5" /> Ligar Agora (51) 98122-0279
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}