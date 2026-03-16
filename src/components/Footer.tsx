import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Consultoria', href: '#servicos' },
    { label: 'Desenvolvimento', href: '#servicos' },
    { label: 'Automação com IA', href: '#servicos' },
    { label: 'Integrações', href: '#servicos' },
    { label: 'Growth & Performance', href: '#servicos' },
    { label: 'Suporte Contínuo', href: '#servicos' },
  ];

  const company = [
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Como trabalhamos', href: '#processo' },
    { label: 'Cases', href: '#depoimentos' },
    { label: 'Blog', href: '#' },
  ];

  const contact = [
    { label: 'contato@afecomm.com.br', href: 'mailto:contato@afecomm.com.br' },
    { label: 'WhatsApp', href: 'https://wa.me/5551981220279' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] pt-16 pb-9 px-14">
      <div className="max-w-[1400px] mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-syne font-extrabold text-xl text-white no-underline inline-flex items-center gap-0.5 hover:opacity-80 transition-opacity"
            >
              AF<span className="text-[#FFD100]">ecomm</span>
            </Link>
            <p className="text-[13px] text-[#555555] mt-3.5 max-w-[240px] leading-[1.6]">
              Transformando negócios com tecnologia e estratégia desde 2016. Especialistas em e-commerce de alta performance.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8.5 h-8.5 border border-[#2A2A2A] rounded-lg flex items-center justify-center text-[#555555] no-underline text-sm transition-all duration-200 hover:border-[#FFD100] hover:text-[#FFD100] hover:bg-[rgba(255,209,0,0.10)]"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="w-8.5 h-8.5 border border-[#2A2A2A] rounded-lg flex items-center justify-center text-[#555555] no-underline text-sm transition-all duration-200 hover:border-[#FFD100] hover:text-[#FFD100] hover:bg-[rgba(255,209,0,0.10)]"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://wa.me/5551981220279"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 border border-[#2A2A2A] rounded-lg flex items-center justify-center text-[#555555] no-underline text-sm transition-all duration-200 hover:border-[#FFD100] hover:text-[#FFD100] hover:bg-[rgba(255,209,0,0.10)]"
                aria-label="WhatsApp"
              >
                wa
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#3A3A3A] mb-4.5">
              Serviços
            </h4>
            <ul className="list-none flex flex-col gap-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#777777] no-underline text-sm transition-colors duration-200 hover:text-[#FFD100]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#3A3A3A] mb-4.5">
              Empresa
            </h4>
            <ul className="list-none flex flex-col gap-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#777777] no-underline text-sm transition-colors duration-200 hover:text-[#FFD100]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#3A3A3A] mb-4.5">
              Contato
            </h4>
            <ul className="list-none flex flex-col gap-3">
              {contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[#777777] no-underline text-sm transition-colors duration-200 hover:text-[#FFD100]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#1A1A1A] pt-7 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[13px] text-[#3A3A3A]">
            © {currentYear} AF ecomm. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-[#3A3A3A] no-underline transition-colors duration-200 hover:text-[#777777]">
              Política de Privacidade
            </a>
            <a href="#" className="text-[13px] text-[#3A3A3A] no-underline transition-colors duration-200 hover:text-[#777777]">
              Termos de Uso
            </a>
            <a href="#" className="text-[13px] text-[#3A3A3A] no-underline transition-colors duration-200 hover:text-[#777777]">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
