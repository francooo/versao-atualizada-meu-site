
import { useState, useEffect, useRef } from 'react';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Função para renderizar o formulário e feedback
  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Entre em <span className="text-yellow-500">Contato</span>
          </h2>
          <p className={`text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Pronto para transformar seu negócio? Vamos conversar sobre suas necessidades e objetivos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Solicite uma Consultoria</h3>
                <form id="contato-form" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                      <input type="text" id="nome" name="entry.471806836" required className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300 text-sm sm:text-base" placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input type="email" id="email" name="entry.751549023" required className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300 text-sm sm:text-base" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <input type="text" id="telefone" name="entry.881349871" className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300 text-sm sm:text-base" placeholder="(51) 98122-0279" />
                    </div>
                    <div>
                      <label htmlFor="servico" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Tipo de Serviço *</label>
                      <select id="servico" name="entry.1375871764" required className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300 text-sm sm:text-base">
                        <option value="">Selecione um serviço</option>
                        <option value="Consultoria em Ecommerce">Consultoria em Ecommerce</option>
                        <option value="Desenvolvimento de Ecommerce">Desenvolvimento de Ecommerce</option>
                        <option value="Sistemas com IA">Sistemas com IA</option>
                        <option value="Desenvolvimento de BI">Desenvolvimento de BI</option>
                        <option value="Automação de Processos">Automação de Processos</option>
                        <option value="Sites Institucionais">Sites Institucionais</option>
                        <option value="Gestão de Tráfego Pago">Gestão de Tráfego Pago</option>
                        <option value="Implementação de ERPs">Implementação de ERPs</option>
                        <option value="Integração de Sistemas">Integração de Sistemas</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                    <textarea id="mensagem" name="entry.939193327" required rows={5} className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300 resize-none text-sm sm:text-base" placeholder="Conte-nos sobre seu projeto e objetivos..." />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-h-[44px] text-base sm:text-lg">Enviar Mensagem 🚀</button>
                  <div id="form-feedback" className="text-center text-base font-semibold mt-2"></div>
                </form>
                <script dangerouslySetInnerHTML={{__html:`
                  document.addEventListener('DOMContentLoaded', function () {
                    const form = document.getElementById('contato-form');
                    const feedback = document.getElementById('form-feedback');
                    if (!form) return;
                    form.addEventListener('submit', function (e) {
                      e.preventDefault();
                      feedback.textContent = '';
                      const formData = new FormData(form);
                      const googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeeFuncBiul4vEoXW0n11BOTFCrzaofyF6ygP2Gk5wca4-ovg/formResponse';
                      fetch(googleFormsURL, {
                        method: 'POST',
                        mode: 'no-cors',
                        body: formData
                      })
                      .then(() => {
                        form.reset();
                        feedback.style.color = 'green';
                        feedback.textContent = 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.';
                      })
                      .catch(() => {
                        feedback.style.color = 'red';
                        feedback.textContent = 'Houve um problema ao enviar sua mensagem. Tente novamente.';
                      });
                    });
                  });
                `}} />
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Contact Information */}
              <div className="bg-gray-800 text-white p-4 sm:p-8 rounded-2xl shadow-lg mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">Informações de Contato</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">contato@afecomm.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Telefone</h4>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5551981220279&text=sejabemvindo&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-xs sm:text-sm underline hover:text-yellow-300"
                      >
                        (51) 98122-0279
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Localização</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">Porto Alegre, RS - Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      ⏰
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Horário de Atendimento</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                  <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Siga-nos nas Redes Sociais</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    {[
                      { name: 'LinkedIn', emoji: '💼' },
                      { name: 'Instagram', emoji: '📷' },
                      { name: 'Facebook', emoji: '📘' },
                      { name: 'WhatsApp', emoji: '💬' }
                    ].map((social, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300 hover:scale-110 transform"
                      >
                        <span className="text-base sm:text-lg">{social.emoji}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-48 sm:h-64 flex items-center justify-center shadow-lg overflow-hidden">
                <iframe
                  title="Mapa Interativo"
                  src="https://www.google.com/maps?q=R.+Eng.+Ludolfo+Boehl,+834+-+Teres%C3%B3polis,+Porto+Alegre+-+RS,+91720-150&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-48 sm:h-64 rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
