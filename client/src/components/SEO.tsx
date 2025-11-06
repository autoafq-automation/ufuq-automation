import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
}

export function SEO({ title, description, ogType = 'website', ogImage }: SEOProps) {
  const { language } = useLanguage();
  
  const defaultTitle = language === 'ar' ? 'أفق أوتوميشن - حلول الأتمتة بالذكاء الاصطناعي' : 'Ufuq Automation - AI Automation Solutions';
  const defaultDescription = language === 'ar' 
    ? 'نساعد الشركات على تطوير أعمالها من خلال تحويل العمليات التقليدية إلى أنظمة مؤتمتة بالكامل يديرها وكلاء ذكاء صنعي متخصصون.'
    : 'We help companies develop their businesses by transforming traditional processes into fully automated systems managed by specialized AI agents.';
  
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const fullDescription = description || defaultDescription;

  return (
    <Helmet>
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
