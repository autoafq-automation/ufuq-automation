import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';

type Language = 'en' | 'ar' | 'es' | 'fr' | 'de' | 'zh' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
  availableLanguages: { code: Language; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.magazine': 'Magazine',
    'nav.mediaStudio': 'Media Studio',
    'nav.reviews': 'Business Reviews',
    'nav.countries': 'Countries We Serve',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'Discover New Horizons with Ufuq Automation',
    'hero.subtitle': 'In a world moving at the speed of artificial intelligence, Ufuq Automation brings you the next generation of intelligent automation.',
    'hero.description': 'We help companies develop their businesses by transforming traditional processes into fully automated systems managed by specialized AI agents, more professional, accurate, and advanced than ever before.',
    'hero.cta1': 'Get Started',
    'hero.cta2': 'Watch Demo',
    'hero.badge1': '80+ Countries',
    'hero.badge2': 'AI-Powered',
    'hero.badge3': '24/7 Support',
    
    // Home Page
    'home.tagline': 'The future isn\'t far away... it begins at Ufuq.',
    'home.services.title': 'Our AI Automation Solutions',
    'home.services.subtitle': 'Advanced AI agents designed to transform your business operations',
    'home.reviews.title': 'Trusted by Leading Companies',
    'home.reviews.subtitle': 'See what our clients say about working with Ufuq Automation',
    
    // Services Page
    'services.title': 'AI Automation Services',
    'services.subtitle': 'Comprehensive solutions powered by advanced artificial intelligence',
    'services.ai.title': 'Intelligent Process Automation',
    'services.ai.description': 'Transform your workflows with AI agents that learn and adapt to your business needs.',
    'services.analytics.title': 'Advanced Analytics & Insights',
    'services.analytics.description': 'Data-driven decision making powered by sophisticated AI algorithms.',
    'services.integration.title': 'Seamless System Integration',
    'services.integration.description': 'Connect all your tools and platforms with intelligent automation bridges.',
    'services.support.title': '24/7 AI Support',
    'services.support.description': 'Round-the-clock intelligent assistance for your business operations.',
    
    // About Page
    'about.title': 'About Ufuq Automation',
    'about.subtitle': 'Leading the AI automation revolution',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To empower businesses worldwide with cutting-edge AI automation that drives innovation, efficiency, and growth.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'A world where every business, from startups to enterprises, can harness the power of AI to reach new heights.',
    'about.values.title': 'Our Values',
    'about.values.innovation': 'Innovation',
    'about.values.excellence': 'Excellence',
    'about.values.trust': 'Trust',
    'about.values.growth': 'Growth',
    
    // Blog
    'blog.title': 'Insights & Articles',
    'blog.subtitle': 'The latest in AI automation and business transformation',
    'blog.readMore': 'Read More',
    'blog.readTime': 'min read',
    'blog.author': 'By',
    'blog.category': 'Category',
    'blog.published': 'Published on',
    'blog.back': 'Back to Blog',
    
    // Magazine
    'magazine.title': 'Ufuq Magazine',
    'magazine.subtitle': 'In-depth analysis and industry insights',
    'magazine.readMore': 'Read Full Article',
    'magazine.readTime': 'min read',
    'magazine.back': 'Back to Magazine',
    
    // Business Reviews
    'reviews.title': 'Client Success Stories',
    'reviews.subtitle': 'Real results from businesses we\'ve transformed',
    'reviews.rating': 'Rating',
    'reviews.stars': 'stars',
    
    // Countries
    'countries.title': 'Global Reach',
    'countries.subtitle': 'Serving businesses across 82 countries worldwide',
    'countries.search': 'Search countries...',
    'countries.region': 'Region',
    'countries.all': 'All Regions',
    'countries.count': 'countries',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s discuss how AI automation can transform your business',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number (Optional)',
    'contact.company': 'Company Name (Optional)',
    'contact.message': 'Tell us about your needs',
    'contact.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! We\'ll get back to you soon.',
    'contact.error': 'Something went wrong. Please try again.',
    
    // Footer
    'footer.about': 'About',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.blog': 'المدونة',
    'nav.magazine': 'المجلة',
    'nav.mediaStudio': 'استوديو الميديا',
    'nav.reviews': 'آراء العملاء',
    'nav.countries': 'الدول التي نخدمها',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    
    // Hero Section
    'hero.title': 'اكتشف آفاقاً جديدة مع أفق أوتوميشن',
    'hero.subtitle': 'في عالم يتحرك بسرعة الذكاء الصناعي، أفق أوتوميشن تقدم لك الجيل الجديد من الأتمتة الذكية.',
    'hero.description': 'نساعد الشركات على تطوير أعمالها من خلال تحويل العمليات التقليدية إلى أنظمة مؤتمتة بالكامل يديرها وكلاء ذكاء صنعي متخصصون، أكثر احترافية، دقة، وتطوراً من أي وقت مضى.',
    'hero.cta1': 'ابدأ الآن',
    'hero.cta2': 'شاهد العرض',
    'hero.badge1': '+80 دولة',
    'hero.badge2': 'بقوة الذكاء الاصطناعي',
    'hero.badge3': 'دعم 24/7',
    
    // Home Page
    'home.tagline': 'المستقبل ليس بعيداً... إنه يبدأ من أفق.',
    'home.services.title': 'حلول الأتمتة بالذكاء الاصطناعي',
    'home.services.subtitle': 'وكلاء ذكاء صنعي متقدمون مصممون لتحويل عمليات أعمالك',
    'home.reviews.title': 'موثوق به من قبل الشركات الرائدة',
    'home.reviews.subtitle': 'اطلع على ما يقوله عملاؤنا عن العمل مع أفق أوتوميشن',
    
    // Services Page
    'services.title': 'خدمات الأتمتة بالذكاء الاصطناعي',
    'services.subtitle': 'حلول شاملة مدعومة بالذكاء الاصطناعي المتقدم',
    'services.ai.title': 'أتمتة العمليات الذكية',
    'services.ai.description': 'حول سير عملك مع وكلاء الذكاء الاصطناعي الذين يتعلمون ويتكيفون مع احتياجات عملك.',
    'services.analytics.title': 'التحليلات والرؤى المتقدمة',
    'services.analytics.description': 'اتخاذ القرارات القائمة على البيانات بواسطة خوارزميات الذكاء الاصطناعي المتطورة.',
    'services.integration.title': 'تكامل سلس للأنظمة',
    'services.integration.description': 'اربط جميع أدواتك ومنصاتك بجسور أتمتة ذكية.',
    'services.support.title': 'دعم ذكي 24/7',
    'services.support.description': 'مساعدة ذكية على مدار الساعة لعمليات عملك.',
    
    // About Page
    'about.title': 'عن أفق أوتوميشن',
    'about.subtitle': 'قيادة ثورة الأتمتة بالذكاء الاصطناعي',
    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'تمكين الشركات في جميع أنحاء العالم بأتمتة الذكاء الاصطناعي المتطورة التي تدفع الابتكار والكفاءة والنمو.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'عالم يمكن فيه لكل شركة، من الشركات الناشئة إلى المؤسسات، الاستفادة من قوة الذكاء الاصطناعي للوصول إلى آفاق جديدة.',
    'about.values.title': 'قيمنا',
    'about.values.innovation': 'الابتكار',
    'about.values.excellence': 'التميز',
    'about.values.trust': 'الثقة',
    'about.values.growth': 'النمو',
    
    // Blog
    'blog.title': 'المقالات والرؤى',
    'blog.subtitle': 'أحدث الأخبار في الأتمتة بالذكاء الاصطناعي وتحول الأعمال',
    'blog.readMore': 'اقرأ المزيد',
    'blog.readTime': 'دقيقة قراءة',
    'blog.author': 'بواسطة',
    'blog.category': 'الفئة',
    'blog.published': 'نُشر في',
    'blog.back': 'العودة إلى المدونة',
    
    // Magazine
    'magazine.title': 'مجلة أفق',
    'magazine.subtitle': 'تحليلات متعمقة ورؤى صناعية',
    'magazine.readMore': 'اقرأ المقال الكامل',
    'magazine.readTime': 'دقيقة قراءة',
    'magazine.back': 'العودة إلى المجلة',
    
    // Business Reviews
    'reviews.title': 'قصص نجاح العملاء',
    'reviews.subtitle': 'نتائج حقيقية من الشركات التي قمنا بتحويلها',
    'reviews.rating': 'التقييم',
    'reviews.stars': 'نجوم',
    
    // Countries
    'countries.title': 'انتشار عالمي',
    'countries.subtitle': 'خدمة الشركات عبر 82 دولة حول العالم',
    'countries.search': 'ابحث عن الدول...',
    'countries.region': 'المنطقة',
    'countries.all': 'جميع المناطق',
    'countries.count': 'دولة',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'دعنا نناقش كيف يمكن للأتمتة بالذكاء الاصطناعي تحويل عملك',
    'contact.name': 'اسمك',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف (اختياري)',
    'contact.company': 'اسم الشركة (اختياري)',
    'contact.message': 'أخبرنا عن احتياجاتك',
    'contact.submit': 'إرسال الرسالة',
    'contact.sending': 'جارٍ الإرسال...',
    'contact.success': 'شكراً لك! سنعاود الاتصال بك قريباً.',
    'contact.error': 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    
    // Footer
    'footer.about': 'من نحن',
    'footer.services': 'الخدمات',
    'footer.resources': 'الموارد',
    'footer.contact': 'اتصل بنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.magazine': 'Revista',
    'nav.mediaStudio': 'Estudio de Medios',
    'nav.reviews': 'Reseñas',
    'nav.countries': 'Países',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',
    
    // Hero Section
    'hero.title': 'Descubre Nuevos Horizontes con Ufuq Automation',
    'hero.subtitle': 'En un mundo que se mueve a la velocidad de la IA, Ufuq Automation te trae la próxima generación de automatización inteligente.',
    'hero.description': 'Ayudamos a las empresas a desarrollar sus negocios transformando procesos tradicionales en sistemas totalmente automatizados gestionados por agentes de IA especializados.',
    'hero.cta1': 'Comenzar',
    'hero.cta2': 'Ver Demo',
    'hero.badge1': '+80 Países',
    'hero.badge2': 'Impulsado por IA',
    'hero.badge3': 'Soporte 24/7',
    
    // Home Page
    'home.tagline': 'El futuro no está lejos... comienza en Ufuq.',
    'home.services.title': 'Nuestras Soluciones de Automatización con IA',
    'home.services.subtitle': 'Agentes de IA avanzados diseñados para transformar tus operaciones',
    'home.reviews.title': 'Confiado por Empresas Líderes',
    'home.reviews.subtitle': 'Mira lo que dicen nuestros clientes',
    
    // Services Page
    'services.title': 'Servicios de Automatización con IA',
    'services.subtitle': 'Soluciones integrales impulsadas por IA avanzada',
    'services.ai.title': 'Automatización Inteligente de Procesos',
    'services.ai.description': 'Transforma tus flujos de trabajo con agentes de IA.',
    'services.analytics.title': 'Análisis Avanzado e Insights',
    'services.analytics.description': 'Decisiones basadas en datos con algoritmos de IA.',
    'services.integration.title': 'Integración Perfecta de Sistemas',
    'services.integration.description': 'Conecta todas tus herramientas con automatización inteligente.',
    'services.support.title': 'Soporte IA 24/7',
    'services.support.description': 'Asistencia inteligente las 24 horas.',
    
    // About Page
    'about.title': 'Sobre Ufuq Automation',
    'about.subtitle': 'Liderando la revolución de la automatización con IA',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.description': 'Empoderar empresas con automatización de IA que impulsa innovación, eficiencia y crecimiento.',
    'about.vision.title': 'Nuestra Visión',
    'about.vision.description': 'Un mundo donde cada negocio pueda aprovechar el poder de la IA.',
    'about.values.title': 'Nuestros Valores',
    'about.values.innovation': 'Innovación',
    'about.values.excellence': 'Excelencia',
    'about.values.trust': 'Confianza',
    'about.values.growth': 'Crecimiento',
    
    // Blog
    'blog.title': 'Insights y Artículos',
    'blog.subtitle': 'Lo último en automatización con IA',
    'blog.readMore': 'Leer Más',
    'blog.readTime': 'min de lectura',
    'blog.author': 'Por',
    'blog.category': 'Categoría',
    'blog.published': 'Publicado el',
    'blog.back': 'Volver al Blog',
    
    // Magazine
    'magazine.title': 'Revista Ufuq',
    'magazine.subtitle': 'Análisis en profundidad e insights',
    'magazine.readMore': 'Leer Artículo Completo',
    'magazine.readTime': 'min de lectura',
    'magazine.back': 'Volver a la Revista',
    
    // Business Reviews
    'reviews.title': 'Historias de Éxito',
    'reviews.subtitle': 'Resultados reales de empresas transformadas',
    'reviews.rating': 'Calificación',
    'reviews.stars': 'estrellas',
    
    // Countries
    'countries.title': 'Alcance Global',
    'countries.subtitle': 'Sirviendo empresas en 82 países',
    'countries.search': 'Buscar países...',
    'countries.region': 'Región',
    'countries.all': 'Todas las Regiones',
    'countries.count': 'países',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Hablemos sobre cómo la IA puede transformar tu negocio',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Teléfono (Opcional)',
    'contact.company': 'Nombre de la Empresa (Opcional)',
    'contact.message': 'Cuéntanos sobre tus necesidades',
    'contact.submit': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Gracias! Te contactaremos pronto.',
    'contact.error': 'Algo salió mal. Por favor intenta de nuevo.',
    
    // Footer
    'footer.about': 'Nosotros',
    'footer.services': 'Servicios',
    'footer.resources': 'Recursos',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.rights': 'Todos los derechos reservados.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.blog': 'Blog',
    'nav.magazine': 'Magazine',
    'nav.mediaStudio': 'Studio Média',
    'nav.reviews': 'Avis',
    'nav.countries': 'Pays',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Commencer',
    
    // Hero Section
    'hero.title': 'Découvrez de Nouveaux Horizons avec Ufuq Automation',
    'hero.subtitle': 'Dans un monde qui évolue à la vitesse de l\'IA, Ufuq Automation vous apporte la prochaine génération d\'automatisation intelligente.',
    'hero.description': 'Nous aidons les entreprises à développer leurs activités en transformant les processus traditionnels en systèmes entièrement automatisés gérés par des agents IA spécialisés.',
    'hero.cta1': 'Commencer',
    'hero.cta2': 'Voir la Démo',
    'hero.badge1': '+80 Pays',
    'hero.badge2': 'Propulsé par l\'IA',
    'hero.badge3': 'Support 24/7',
    
    // Home Page
    'home.tagline': 'L\'avenir n\'est pas loin... il commence à Ufuq.',
    'home.services.title': 'Nos Solutions d\'Automatisation IA',
    'home.services.subtitle': 'Agents IA avancés conçus pour transformer vos opérations',
    'home.reviews.title': 'Approuvé par les Entreprises Leaders',
    'home.reviews.subtitle': 'Découvrez ce que nos clients disent',
    
    // Services Page
    'services.title': 'Services d\'Automatisation IA',
    'services.subtitle': 'Solutions complètes alimentées par l\'IA avancée',
    'services.ai.title': 'Automatisation Intelligente des Processus',
    'services.ai.description': 'Transformez vos flux de travail avec des agents IA.',
    'services.analytics.title': 'Analyses Avancées et Insights',
    'services.analytics.description': 'Décisions basées sur les données avec des algorithmes IA.',
    'services.integration.title': 'Intégration Transparente des Systèmes',
    'services.integration.description': 'Connectez tous vos outils avec l\'automatisation intelligente.',
    'services.support.title': 'Support IA 24/7',
    'services.support.description': 'Assistance intelligente 24h/24.',
    
    // About Page
    'about.title': 'À Propos d\'Ufuq Automation',
    'about.subtitle': 'Leader de la révolution de l\'automatisation IA',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Donner aux entreprises les moyens d\'utiliser l\'automatisation IA qui stimule l\'innovation, l\'efficacité et la croissance.',
    'about.vision.title': 'Notre Vision',
    'about.vision.description': 'Un monde où chaque entreprise peut exploiter la puissance de l\'IA.',
    'about.values.title': 'Nos Valeurs',
    'about.values.innovation': 'Innovation',
    'about.values.excellence': 'Excellence',
    'about.values.trust': 'Confiance',
    'about.values.growth': 'Croissance',
    
    // Blog
    'blog.title': 'Insights et Articles',
    'blog.subtitle': 'Les dernières actualités en automatisation IA',
    'blog.readMore': 'Lire Plus',
    'blog.readTime': 'min de lecture',
    'blog.author': 'Par',
    'blog.category': 'Catégorie',
    'blog.published': 'Publié le',
    'blog.back': 'Retour au Blog',
    
    // Magazine
    'magazine.title': 'Magazine Ufuq',
    'magazine.subtitle': 'Analyses approfondies et insights',
    'magazine.readMore': 'Lire l\'Article Complet',
    'magazine.readTime': 'min de lecture',
    'magazine.back': 'Retour au Magazine',
    
    // Business Reviews
    'reviews.title': 'Histoires de Réussite',
    'reviews.subtitle': 'Résultats réels d\'entreprises transformées',
    'reviews.rating': 'Note',
    'reviews.stars': 'étoiles',
    
    // Countries
    'countries.title': 'Portée Mondiale',
    'countries.subtitle': 'Au service des entreprises dans 82 pays',
    'countries.search': 'Rechercher des pays...',
    'countries.region': 'Région',
    'countries.all': 'Toutes les Régions',
    'countries.count': 'pays',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Discutons de la façon dont l\'IA peut transformer votre entreprise',
    'contact.name': 'Votre Nom',
    'contact.email': 'Adresse Email',
    'contact.phone': 'Téléphone (Optionnel)',
    'contact.company': 'Nom de l\'Entreprise (Optionnel)',
    'contact.message': 'Parlez-nous de vos besoins',
    'contact.submit': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Merci ! Nous vous contacterons bientôt.',
    'contact.error': 'Une erreur s\'est produite. Veuillez réessayer.',
    
    // Footer
    'footer.about': 'À Propos',
    'footer.services': 'Services',
    'footer.resources': 'Ressources',
    'footer.contact': 'Contact',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.rights': 'Tous droits réservés.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über Uns',
    'nav.blog': 'Blog',
    'nav.magazine': 'Magazin',
    'nav.mediaStudio': 'Medienstudio',
    'nav.reviews': 'Bewertungen',
    'nav.countries': 'Länder',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Loslegen',
    
    // Hero Section
    'hero.title': 'Entdecken Sie Neue Horizonte mit Ufuq Automation',
    'hero.subtitle': 'In einer Welt, die sich mit KI-Geschwindigkeit bewegt, bringt Ufuq Automation die nächste Generation intelligenter Automatisierung.',
    'hero.description': 'Wir helfen Unternehmen, ihr Geschäft zu entwickeln, indem wir traditionelle Prozesse in vollautomatisierte Systeme umwandeln, die von spezialisierten KI-Agenten verwaltet werden.',
    'hero.cta1': 'Loslegen',
    'hero.cta2': 'Demo Ansehen',
    'hero.badge1': '+80 Länder',
    'hero.badge2': 'KI-gestützt',
    'hero.badge3': '24/7 Support',
    
    // Home Page
    'home.tagline': 'Die Zukunft ist nicht weit... sie beginnt bei Ufuq.',
    'home.services.title': 'Unsere KI-Automatisierungslösungen',
    'home.services.subtitle': 'Fortschrittliche KI-Agenten zur Transformation Ihrer Prozesse',
    'home.reviews.title': 'Vertraut von Führenden Unternehmen',
    'home.reviews.subtitle': 'Sehen Sie, was unsere Kunden sagen',
    
    // Services Page
    'services.title': 'KI-Automatisierungsdienste',
    'services.subtitle': 'Umfassende Lösungen mit fortschrittlicher KI',
    'services.ai.title': 'Intelligente Prozessautomatisierung',
    'services.ai.description': 'Transformieren Sie Ihre Workflows mit KI-Agenten.',
    'services.analytics.title': 'Erweiterte Analysen & Insights',
    'services.analytics.description': 'Datengesteuerte Entscheidungen durch KI-Algorithmen.',
    'services.integration.title': 'Nahtlose Systemintegration',
    'services.integration.description': 'Verbinden Sie alle Tools mit intelligenter Automatisierung.',
    'services.support.title': '24/7 KI-Support',
    'services.support.description': 'Rund um die Uhr intelligente Unterstützung.',
    
    // About Page
    'about.title': 'Über Ufuq Automation',
    'about.subtitle': 'Führend in der KI-Automatisierungsrevolution',
    'about.mission.title': 'Unsere Mission',
    'about.mission.description': 'Unternehmen weltweit mit KI-Automatisierung zu stärken, die Innovation, Effizienz und Wachstum vorantreibt.',
    'about.vision.title': 'Unsere Vision',
    'about.vision.description': 'Eine Welt, in der jedes Unternehmen die Kraft der KI nutzen kann.',
    'about.values.title': 'Unsere Werte',
    'about.values.innovation': 'Innovation',
    'about.values.excellence': 'Exzellenz',
    'about.values.trust': 'Vertrauen',
    'about.values.growth': 'Wachstum',
    
    // Blog
    'blog.title': 'Insights & Artikel',
    'blog.subtitle': 'Das Neueste in KI-Automatisierung',
    'blog.readMore': 'Mehr Lesen',
    'blog.readTime': 'Min. Lesezeit',
    'blog.author': 'Von',
    'blog.category': 'Kategorie',
    'blog.published': 'Veröffentlicht am',
    'blog.back': 'Zurück zum Blog',
    
    // Magazine
    'magazine.title': 'Ufuq Magazin',
    'magazine.subtitle': 'Tiefgehende Analysen und Insights',
    'magazine.readMore': 'Vollständigen Artikel Lesen',
    'magazine.readTime': 'Min. Lesezeit',
    'magazine.back': 'Zurück zum Magazin',
    
    // Business Reviews
    'reviews.title': 'Kunden-Erfolgsgeschichten',
    'reviews.subtitle': 'Echte Ergebnisse von transformierten Unternehmen',
    'reviews.rating': 'Bewertung',
    'reviews.stars': 'Sterne',
    
    // Countries
    'countries.title': 'Globale Reichweite',
    'countries.subtitle': 'Wir bedienen Unternehmen in 82 Ländern',
    'countries.search': 'Länder suchen...',
    'countries.region': 'Region',
    'countries.all': 'Alle Regionen',
    'countries.count': 'Länder',
    
    // Contact
    'contact.title': 'Kontaktieren Sie Uns',
    'contact.subtitle': 'Lassen Sie uns besprechen, wie KI Ihr Unternehmen transformieren kann',
    'contact.name': 'Ihr Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.phone': 'Telefon (Optional)',
    'contact.company': 'Firmenname (Optional)',
    'contact.message': 'Erzählen Sie uns von Ihren Anforderungen',
    'contact.submit': 'Nachricht Senden',
    'contact.sending': 'Wird gesendet...',
    'contact.success': 'Vielen Dank! Wir melden uns bald.',
    'contact.error': 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
    
    // Footer
    'footer.about': 'Über Uns',
    'footer.services': 'Dienstleistungen',
    'footer.resources': 'Ressourcen',
    'footer.contact': 'Kontakt',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.about': '关于我们',
    'nav.blog': '博客',
    'nav.magazine': '杂志',
    'nav.mediaStudio': '媒体工作室',
    'nav.reviews': '客户评价',
    'nav.countries': '服务国家',
    'nav.contact': '联系我们',
    'nav.getStarted': '开始使用',
    
    // Hero Section
    'hero.title': '与Ufuq Automation探索新视野',
    'hero.subtitle': '在一个以人工智能速度发展的世界中，Ufuq Automation为您带来下一代智能自动化。',
    'hero.description': '我们帮助企业通过将传统流程转变为由专业AI代理管理的全自动化系统来发展业务。',
    'hero.cta1': '开始使用',
    'hero.cta2': '观看演示',
    'hero.badge1': '80+国家',
    'hero.badge2': 'AI驱动',
    'hero.badge3': '24/7支持',
    
    // Home Page
    'home.tagline': '未来并不遥远...它从Ufuq开始。',
    'home.services.title': '我们的AI自动化解决方案',
    'home.services.subtitle': '旨在转变您业务运营的先进AI代理',
    'home.reviews.title': '受领先企业信赖',
    'home.reviews.subtitle': '看看我们的客户对我们的评价',
    
    // Services Page
    'services.title': 'AI自动化服务',
    'services.subtitle': '由先进人工智能驱动的综合解决方案',
    'services.ai.title': '智能流程自动化',
    'services.ai.description': '使用AI代理转变您的工作流程。',
    'services.analytics.title': '高级分析与洞察',
    'services.analytics.description': '由AI算法驱动的数据驱动决策。',
    'services.integration.title': '无缝系统集成',
    'services.integration.description': '通过智能自动化连接您的所有工具。',
    'services.support.title': '24/7 AI支持',
    'services.support.description': '为您的业务运营提供全天候智能协助。',
    
    // About Page
    'about.title': '关于Ufuq Automation',
    'about.subtitle': '引领AI自动化革命',
    'about.mission.title': '我们的使命',
    'about.mission.description': '通过推动创新、效率和增长的AI自动化赋能全球企业。',
    'about.vision.title': '我们的愿景',
    'about.vision.description': '一个每个企业都能利用AI力量的世界。',
    'about.values.title': '我们的价值观',
    'about.values.innovation': '创新',
    'about.values.excellence': '卓越',
    'about.values.trust': '信任',
    'about.values.growth': '成长',
    
    // Blog
    'blog.title': '见解与文章',
    'blog.subtitle': 'AI自动化的最新动态',
    'blog.readMore': '阅读更多',
    'blog.readTime': '分钟阅读',
    'blog.author': '作者',
    'blog.category': '类别',
    'blog.published': '发布于',
    'blog.back': '返回博客',
    
    // Magazine
    'magazine.title': 'Ufuq杂志',
    'magazine.subtitle': '深度分析和行业见解',
    'magazine.readMore': '阅读完整文章',
    'magazine.readTime': '分钟阅读',
    'magazine.back': '返回杂志',
    
    // Business Reviews
    'reviews.title': '客户成功案例',
    'reviews.subtitle': '我们转型企业的真实成果',
    'reviews.rating': '评分',
    'reviews.stars': '星',
    
    // Countries
    'countries.title': '全球覆盖',
    'countries.subtitle': '为全球82个国家的企业提供服务',
    'countries.search': '搜索国家...',
    'countries.region': '地区',
    'countries.all': '所有地区',
    'countries.count': '国家',
    
    // Contact
    'contact.title': '联系我们',
    'contact.subtitle': '让我们讨论AI自动化如何转变您的业务',
    'contact.name': '您的姓名',
    'contact.email': '电子邮箱',
    'contact.phone': '电话（可选）',
    'contact.company': '公司名称（可选）',
    'contact.message': '告诉我们您的需求',
    'contact.submit': '发送消息',
    'contact.sending': '发送中...',
    'contact.success': '谢谢！我们会尽快与您联系。',
    'contact.error': '出了点问题。请重试。',
    
    // Footer
    'footer.about': '关于',
    'footer.services': '服务',
    'footer.resources': '资源',
    'footer.contact': '联系',
    'footer.privacy': '隐私政策',
    'footer.terms': '使用条款',
    'footer.rights': '版权所有。',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.services': 'सेवाएं',
    'nav.about': 'हमारे बारे में',
    'nav.blog': 'ब्लॉग',
    'nav.magazine': 'पत्रिका',
    'nav.mediaStudio': 'मीडिया स्टूडियो',
    'nav.reviews': 'समीक्षाएं',
    'nav.countries': 'देश',
    'nav.contact': 'संपर्क करें',
    'nav.getStarted': 'शुरू करें',
    
    // Hero Section
    'hero.title': 'Ufuq Automation के साथ नए क्षितिज खोजें',
    'hero.subtitle': 'एक ऐसी दुनिया में जो AI की गति से आगे बढ़ रही है, Ufuq Automation आपके लिए बुद्धिमान स्वचालन की अगली पीढ़ी लाता है।',
    'hero.description': 'हम कंपनियों को पारंपरिक प्रक्रियाओं को विशेष AI एजेंटों द्वारा प्रबंधित पूर्ण स्वचालित प्रणालियों में बदलकर अपने व्यवसाय को विकसित करने में मदद करते हैं।',
    'hero.cta1': 'शुरू करें',
    'hero.cta2': 'डेमो देखें',
    'hero.badge1': '80+ देश',
    'hero.badge2': 'AI-संचालित',
    'hero.badge3': '24/7 सहायता',
    
    // Home Page
    'home.tagline': 'भविष्य दूर नहीं है... यह Ufuq से शुरू होता है।',
    'home.services.title': 'हमारे AI स्वचालन समाधान',
    'home.services.subtitle': 'आपके व्यवसाय संचालन को बदलने के लिए डिज़ाइन किए गए उन्नत AI एजेंट',
    'home.reviews.title': 'अग्रणी कंपनियों द्वारा विश्वसनीय',
    'home.reviews.subtitle': 'देखें कि हमारे ग्राहक क्या कहते हैं',
    
    // Services Page
    'services.title': 'AI स्वचालन सेवाएं',
    'services.subtitle': 'उन्नत AI द्वारा संचालित व्यापक समाधान',
    'services.ai.title': 'बुद्धिमान प्रक्रिया स्वचालन',
    'services.ai.description': 'AI एजेंटों के साथ अपने वर्कफ़्लो को बदलें।',
    'services.analytics.title': 'उन्नत विश्लेषण और अंतर्दृष्टि',
    'services.analytics.description': 'AI एल्गोरिदम द्वारा संचालित डेटा-संचालित निर्णय।',
    'services.integration.title': 'सहज सिस्टम एकीकरण',
    'services.integration.description': 'बुद्धिमान स्वचालन के साथ अपने सभी उपकरणों को कनेक्ट करें।',
    'services.support.title': '24/7 AI सहायता',
    'services.support.description': 'आपके व्यावसायिक संचालन के लिए चौबीसों घंटे सहायता।',
    
    // About Page
    'about.title': 'Ufuq Automation के बारे में',
    'about.subtitle': 'AI स्वचालन क्रांति का नेतृत्व',
    'about.mission.title': 'हमारा मिशन',
    'about.mission.description': 'दुनिया भर के व्यवसायों को AI स्वचालन के साथ सशक्त बनाना जो नवाचार, दक्षता और विकास को बढ़ावा देता है।',
    'about.vision.title': 'हमारी दृष्टि',
    'about.vision.description': 'एक ऐसी दुनिया जहां हर व्यवसाय AI की शक्ति का उपयोग कर सके।',
    'about.values.title': 'हमारे मूल्य',
    'about.values.innovation': 'नवाचार',
    'about.values.excellence': 'उत्कृष्टता',
    'about.values.trust': 'विश्वास',
    'about.values.growth': 'विकास',
    
    // Blog
    'blog.title': 'अंतर्दृष्टि और लेख',
    'blog.subtitle': 'AI स्वचालन में नवीनतम',
    'blog.readMore': 'और पढ़ें',
    'blog.readTime': 'मिनट पढ़ें',
    'blog.author': 'द्वारा',
    'blog.category': 'श्रेणी',
    'blog.published': 'प्रकाशित',
    'blog.back': 'ब्लॉग पर वापस जाएं',
    
    // Magazine
    'magazine.title': 'Ufuq पत्रिका',
    'magazine.subtitle': 'गहन विश्लेषण और उद्योग अंतर्दृष्टि',
    'magazine.readMore': 'पूरा लेख पढ़ें',
    'magazine.readTime': 'मिनट पढ़ें',
    'magazine.back': 'पत्रिका पर वापस जाएं',
    
    // Business Reviews
    'reviews.title': 'ग्राहक सफलता की कहानियां',
    'reviews.subtitle': 'हमारे द्वारा परिवर्तित व्यवसायों के वास्तविक परिणाम',
    'reviews.rating': 'रेटिंग',
    'reviews.stars': 'सितारे',
    
    // Countries
    'countries.title': 'वैश्विक पहुंच',
    'countries.subtitle': '82 देशों में व्यवसायों की सेवा',
    'countries.search': 'देश खोजें...',
    'countries.region': 'क्षेत्र',
    'countries.all': 'सभी क्षेत्र',
    'countries.count': 'देश',
    
    // Contact
    'contact.title': 'संपर्क में रहें',
    'contact.subtitle': 'आइए चर्चा करें कि AI स्वचालन आपके व्यवसाय को कैसे बदल सकता है',
    'contact.name': 'आपका नाम',
    'contact.email': 'ईमेल पता',
    'contact.phone': 'फोन (वैकल्पिक)',
    'contact.company': 'कंपनी का नाम (वैकल्पिक)',
    'contact.message': 'हमें अपनी आवश्यकताओं के बारे में बताएं',
    'contact.submit': 'संदेश भेजें',
    'contact.sending': 'भेजा जा रहा है...',
    'contact.success': 'धन्यवाद! हम जल्द ही संपर्क करेंगे।',
    'contact.error': 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
    
    // Footer
    'footer.about': 'हमारे बारे में',
    'footer.services': 'सेवाएं',
    'footer.resources': 'संसाधन',
    'footer.contact': 'संपर्क करें',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'उपयोग की शर्तें',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
  },
};

// Available languages with their display names
const availableLanguages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'ar' as Language, name: 'Arabic', nativeName: 'العربية' },
  { code: 'es' as Language, name: 'Spanish', nativeName: 'Español' },
  { code: 'fr' as Language, name: 'French', nativeName: 'Français' },
  { code: 'de' as Language, name: 'German', nativeName: 'Deutsch' },
  { code: 'zh' as Language, name: 'Chinese', nativeName: '中文' },
  { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिन्दी' },
];

// Helper function to detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  console.log('🌍 Browser Language Detected:', browserLang);
  
  let detectedLang: Language = 'en';
  if (browserLang) {
    const langCode = browserLang.toLowerCase();
    // Check for all supported language codes
    if (langCode.startsWith('ar')) detectedLang = 'ar';
    else if (langCode.startsWith('es')) detectedLang = 'es';
    else if (langCode.startsWith('fr')) detectedLang = 'fr';
    else if (langCode.startsWith('de')) detectedLang = 'de';
    else if (langCode.startsWith('zh')) detectedLang = 'zh';
    else if (langCode.startsWith('hi')) detectedLang = 'hi';
  }
  
  console.log('🔍 Detected Language:', detectedLang);
  
  // Check if user has manually overridden the language before
  const savedLang = localStorage.getItem('language') as Language;
  const hasManualOverride = localStorage.getItem('language-manual-override') === 'true';
  
  const validLanguages: Language[] = ['en', 'ar', 'es', 'fr', 'de', 'zh', 'hi'];
  if (hasManualOverride && savedLang && validLanguages.includes(savedLang)) {
    console.log('✅ Using saved preference:', savedLang);
    return savedLang;
  }
  
  // Use detected browser language
  console.log('🎯 Using browser language:', detectedLang);
  localStorage.setItem('language', detectedLang);
  return detectedLang;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => detectBrowserLanguage());

  useEffect(() => {
    // Only run this once on mount to set the detected language
    const detectedLang = detectBrowserLanguage();
    setLanguage(detectedLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    // RTL for Arabic only
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Arabic font for Arabic, Hindi font for Hindi
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
    }
  }, [language]);

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    localStorage.setItem('language-manual-override', 'true');
    console.log('🔄 Language manually changed to:', newLang);
  };

  const toggleLanguage = () => {
    // Legacy toggle function - cycles between en and ar
    const newLang = language === 'en' ? 'ar' : 'en';
    changeLanguage(newLang);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: changeLanguage,
      toggleLanguage, 
      t, 
      isRTL: language === 'ar',
      availableLanguages 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
