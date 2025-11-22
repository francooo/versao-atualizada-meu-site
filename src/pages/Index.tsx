
import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Cases } from '@/components/Cases';
import { HowItWorks } from '@/components/HowItWorks';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Cases />
      <HowItWorks />
      <Contact />
      <Footer />
      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5551981220279"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Conversar no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-whatsapp">
          <path d="M21.67 20.13a1.85 1.85 0 0 1-1.31 1.31c-1.14.31-5.7.31-5.7.31s-4.56 0-5.7-.31a1.85 1.85 0 0 1-1.31-1.31C2.69 18.19 2 15.7 2 12.94 2 7.61 6.61 3 12 3s10 4.61 10 9.94c0 2.76-.69 5.25-2.33 7.19z"></path>
          <path d="M16.24 7.76a6.5 6.5 0 0 0-8.48 0c-2.53 2.53-2.53 6.63 0 9.16a6.5 6.5 0 0 0 8.48 0c2.53-2.53 2.53-6.63 0-9.16z"></path>
        </svg>
      </a>
      <BackToTop />
    </div>
  );
};

export default Index;
