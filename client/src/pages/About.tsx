import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { Target, Eye, Lightbulb, Award, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: language === 'ar' 
        ? 'نحن نبتكر باستمرار ونتبنى التقنيات الجديدة لتقديم حلول متطورة.'
        : 'We continuously innovate and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: language === 'ar'
        ? 'نسعى للتميز في كل جانب من جوانب خدماتنا وتفاعلاتنا مع العملاء.'
        : 'We strive for excellence in every aspect of our services and client interactions.',
    },
    {
      icon: Heart,
      title: t('about.values.trust'),
      description: language === 'ar'
        ? 'نبني علاقات طويلة الأمد على أساس الشفافية والموثوقية والنزاهة.'
        : 'We build long-term relationships based on transparency, reliability, and integrity.',
    },
    {
      icon: TrendingUp,
      title: t('about.values.growth'),
      description: language === 'ar'
        ? 'نحن ملتزمون بنمو عملائنا ونجاحهم من خلال التحول الرقمي.'
        : 'We are committed to our clients\' growth and success through digital transformation.',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={t('about.title')}
        description={t('about.subtitle')}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-about">
            {t('nav.about')}
          </Badge>
          <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('about.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="hover-elevate transition-all duration-300" data-testid="card-mission">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className={`font-display text-2xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.mission.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300" data-testid="card-vision">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-md bg-chart-2/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-chart-2" />
              </div>
              <h2 className={`font-display text-2xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.vision.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={`font-display text-3xl md:text-4xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('about.values.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className={`font-display text-xl font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-8 bg-card rounded-lg border">
          <div className="space-y-6">
            <h2 className={`font-display text-2xl md:text-3xl font-bold text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'لماذا تختار أفق أوتوميشن؟' : 'Why Choose Ufuq Automation?'}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {language === 'ar' 
                  ? 'في عالم يتغير بسرعة، تبرز أفق أوتوميشن كشريك موثوق للشركات التي تسعى للتحول الرقمي. نحن لا نقدم فقط حلول الأتمتة - نحن نقدم شراكة استراتيجية تضع نجاحك في المقدمة.'
                  : 'In a rapidly evolving world, Ufuq Automation stands out as a trusted partner for businesses seeking digital transformation. We don\'t just provide automation solutions - we offer a strategic partnership that puts your success first.'
                }
              </p>
              <p>
                {language === 'ar'
                  ? 'سواء كنت شركة ناشئة تبحث عن التوسع أو مؤسسة راسخة تسعى للتحديث، فإن فريقنا من الوكلاء الذكيين جاهز لتبسيط عملياتك، تقليل الأخطاء، وزيادة الإنتاجية بشكل مذهل.'
                  : 'Whether you\'re a startup looking to scale or an established enterprise seeking to modernize, our team of intelligent agents is ready to simplify your operations, reduce errors, and dramatically increase productivity.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
