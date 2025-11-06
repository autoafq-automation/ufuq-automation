import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { language, isRTL } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SEO 
        title={language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        description={language === 'ar' 
          ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
          : 'Sorry, the page you are looking for doesn\'t exist or has been moved.'}
      />
      <div className="text-center space-y-6 px-4">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-primary">404</h1>
        <h2 className={`text-2xl md:text-3xl font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-muted-foreground max-w-md">
          {language === 'ar' 
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : 'Sorry, the page you are looking for doesn\'t exist or has been moved.'}
        </p>
        <Link href="/" data-testid="link-home">
          <Button size="lg" className="gap-2">
            <Home className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {language === 'ar' ? 'العودة للرئيسية' : 'Go Home'}
          </Button>
        </Link>
      </div>
    </div>
  );
}
