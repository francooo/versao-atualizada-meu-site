
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 mb-6 md:mb-0">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3 sm:mb-4">
              AF<span className="text-white">ecomm</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Transformamos negócios através da tecnologia, oferecendo soluções 
              inovadoras para ecommerce que geram resultados extraordinários.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { name: 'LinkedIn', emoji: '💼' },
                { name: 'Instagram', emoji: '📷' },
                { name: 'Facebook', emoji: '📘' },
                { name: 'WhatsApp', emoji: '💬' }
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label={social.name}
                >
                  <span className="text-base sm:text-lg">{social.emoji}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-yellow-500">Serviços</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {[
                'Consultoria em Ecommerce',
                'Desenvolvimento Web',
                'Sistemas com IA',
                'Business Intelligence',
                'Automação de Processos'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-yellow-500">Contato</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span>📧</span>
                <span className="text-gray-400">contato@afecomm.com.br</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span>📱</span>
                <a
                  href="https://api.whatsapp.com/send/?phone=5551981220279&text=sejabemvindo&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                >
                  (51) 98122-0279
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span>📍</span>
                <span className="text-gray-400">Porto Alegre, RS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 AF ecomm. Todos os direitos reservados. 
            <span className="text-yellow-500"> Transformando negócios através da tecnologia.</span>
            <br />
            <span className="text-gray-300 font-semibold">CNPJ: 60.311.539/0001-93</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
