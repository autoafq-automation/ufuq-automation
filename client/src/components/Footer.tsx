import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Cpu } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaXTwitter, FaReddit, FaGithub, FaLinkedin } from 'react-icons/fa6';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ufuq-automation-agency',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/ufuq.automation?igsh=c2t0djd0a2J2bndt',
      icon: FaInstagram,
      color: 'hover:text-pink-500'
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/17LrxMuYLG/?mibextid=wwXIfr',
      icon: FaFacebook,
      color: 'hover:text-blue-500'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ufuqautomationagency?si=MCVG4XOTYSaZCvZn',
      icon: FaYoutube,
      color: 'hover:text-red-500'
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/ufuq_automation?s=21',
      icon: FaXTwitter,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    { 
      name: 'Reddit', 
      url: 'https://www.reddit.com/user/Famous_Pass5782/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
      icon: FaReddit,
      color: 'hover:text-orange-500'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/autoafq-automation',
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
  ];

  const footerSections = [
    {
      title: t('footer.about'),
      links: [
        { label: t('nav.about'), href: '/about' },
        { label: t('nav.services'), href: '/services' },
        { label: t('nav.countries'), href: '/countries' },
      ],
    },
    {
      title: t('footer.services'),
      links: [
        { label: t('services.ai.title'), href: '/services' },
        { label: t('services.analytics.title'), href: '/services' },
        { label: t('services.integration.title'), href: '/services' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('nav.blog'), href: '/blog' },
        { label: t('nav.magazine'), href: '/magazine' },
        { label: t('nav.reviews'), href: '/reviews' },
      ],
    },
    {
      title: t('footer.contact'),
      links: [
        { label: t('nav.contact'), href: '/contact' },
        { label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', href: '/faq' },
      ],
    },
  ];

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold">
                  {language === 'ar' ? 'أفق أوتوميشن' : 'Ufuq Automation'}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('home.tagline')}
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`footer-link-${link.href.slice(1)}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {language === 'ar' ? 'أفق أوتوميشن' : 'Ufuq Automation'}. {t('footer.rights')}
              </p>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground transition-colors ${social.color}`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-4 text-sm">
                <Link 
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  href="/terms-of-use"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
