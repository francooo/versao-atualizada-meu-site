import { ReactNode } from 'react';
import { CheckCircle, ListChecks, Phone, Mail, ArrowRightCircle } from 'lucide-react';
import { Button } from './ui/button';

interface ServiceTemplateProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  includes: string[];
  process: { step: string; description: string }[];
}

export function ServiceTemplate({
  icon,
  title,
  subtitle,
  description,
  benefits,
  includes,
  process,
}: ServiceTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-yellow-100">
      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-yellow-100 mb-10 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-4">
              {icon}
            </div>
            <h1 className="text-4xl font-bold text-yellow-600 mb-2">{title}</h1>
            <h2 className="text-xl text-yellow-700 font-medium mb-4">{subtitle}</h2>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            <a href="tel:+5551981220279">
              <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5" /> Solicitar Orçamento (51) 98122-0279
              </Button>
            </a>
          </div>
        </div>

        {/* Sobre o serviço */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow p-6 border border-yellow-100">
            <h3 className="text-yellow-500 font-semibold mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Benefícios</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-gray-700 text-base"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-yellow-100">
            <h3 className="text-yellow-500 font-semibold mb-4 flex items-center gap-2"><ListChecks className="w-5 h-5" />O que inclui</h3>
            <ul className="space-y-3">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 text-base"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Processo */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 border border-yellow-100 mb-12">
          <h3 className="text-2xl font-bold text-yellow-600 mb-8 text-center">Como funciona nosso processo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold text-yellow-700 mb-2">{step.step}</h4>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para começar?</h3>
            <p className="text-white/90 mb-6 text-lg">Entre em contato conosco e descubra como podemos transformar seu negócio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:andrewsfranco93@gmail.com">
                <Button variant="outline" className="text-yellow-600 border-white bg-white hover:bg-yellow-50 font-semibold px-8 py-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Enviar Email
                </Button>
              </a>
              <a href="tel:+5551981220279">
                <Button variant="default" className="bg-white text-yellow-600 hover:bg-yellow-100 font-semibold px-8 py-4 flex items-center gap-2 border border-white">
                  <Phone className="w-5 h-5" /> Ligar Agora (51) 98122-0279
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 