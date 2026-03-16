import { ReactNode } from 'react';
import { CheckCircle, ListChecks, Phone, Mail } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <main className="flex-1 container mx-auto px-4 py-16 pt-28">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto bg-[#111111] rounded-2xl shadow-lg p-8 border border-[#1A1A1A] mb-10 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[rgba(255,209,0,0.10)] border border-[rgba(255,209,0,0.22)] flex items-center justify-center mb-4">
              {icon}
            </div>
            <h1 className="font-syne text-4xl font-bold text-[#FFD100] mb-2">{title}</h1>
            <h2 className="text-xl text-[#AAAAAA] font-medium mb-4">{subtitle}</h2>
            <p className="text-lg text-[#777777] mb-6">{description}</p>
            <a href="tel:+5551981220279">
              <Button variant="default" className="bg-[#FFD100] hover:bg-[#E6BC00] text-[#0A0A0A] font-semibold px-8 py-4 flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5" /> Solicitar Orçamento (51) 98122-0279
              </Button>
            </a>
          </div>
        </div>

        {/* Sobre o serviço */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#111111] rounded-2xl shadow p-6 border border-[#1A1A1A]">
            <h3 className="text-[#FFD100] font-semibold mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Benefícios</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-[#AAAAAA] text-base"><CheckCircle className="w-4 h-4 text-[#FFD100] mr-2" />{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111111] rounded-2xl shadow p-6 border border-[#1A1A1A]">
            <h3 className="text-[#FFD100] font-semibold mb-4 flex items-center gap-2"><ListChecks className="w-5 h-5" />O que inclui</h3>
            <ul className="space-y-3">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center text-[#AAAAAA] text-base"><span className="w-2 h-2 bg-[#FFD100] rounded-full mr-2"></span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Processo */}
        <div className="max-w-4xl mx-auto bg-[#111111] rounded-2xl shadow p-8 border border-[#1A1A1A] mb-12">
          <h3 className="font-syne text-2xl font-bold text-[#FFD100] mb-8 text-center">Como funciona nosso processo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#FFD100] flex items-center justify-center text-[#0A0A0A] text-2xl font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold text-[#FFD100] mb-2">{step.step}</h4>
                <p className="text-[#555555] text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <div className="bg-[#FFD100] rounded-2xl p-8 shadow-xl">
            <h3 className="font-syne text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4">Pronto para começar?</h3>
            <p className="text-[#0A0A0A]/80 mb-6 text-lg">Entre em contato conosco e descubra como podemos transformar seu negócio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:andrewsfranco93@gmail.com">
                <Button variant="outline" className="text-[#0A0A0A] border-[#0A0A0A] bg-white hover:bg-[#0A0A0A] hover:text-[#FFD100] font-semibold px-8 py-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Enviar Email
                </Button>
              </a>
              <a href="tel:+5551981220279">
                <Button variant="default" className="bg-[#0A0A0A] text-[#FFD100] hover:bg-[#111111] font-semibold px-8 py-4 flex items-center gap-2 border border-[#0A0A0A]">
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
