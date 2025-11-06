import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { Cpu, BarChart3, Zap, Users, ArrowRight, Play } from 'lucide-react';
import heroImage from '@assets/generated_images/AI_automation_neural_network_visualization_c5a0ecfc.png';

export default function Home() {
  const { t, language, isRTL } = useLanguage();

  const services = [
    {
      icon: Cpu,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
    },
    {
      icon: Zap,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
    },
    {
      icon: Users,
      title: t('services.support.title'),
      description: t('services.support.description'),
    },
  ];

  const stats = [
    { value: '80+', label: t('hero.badge1') },
    { value: '24/7', label: t('hero.badge3') },
    { value: '100%', label: t('hero.badge2') },
  ];

  return (
    <div className="min-h-screen">
      <SEO />
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center gap-2 flex-wrap">
              {stats.map((stat, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm backdrop-blur-sm bg-card/50" data-testid={`badge-stat-${index}`}>
                  <span className="font-bold text-primary">{stat.value}</span>
                  <span className={`${isRTL ? 'mr-2' : 'ml-2'}`}>{stat.label}</span>
                </Badge>
              ))}
            </div>

            <h1 className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${language === 'ar' ? 'font-arabic' : ''}`}>
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <p className="text-base md:text-lg max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" data-testid="link-hero-cta">
                <Button size="lg" className="gap-2">
                  {t('hero.cta1')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm bg-background/50" data-testid="button-watch-demo">
                <Play className="h-5 w-5" />
                {t('hero.cta2')}
              </Button>
            </div>

            <p className="text-sm md:text-base text-muted-foreground italic pt-4">
              {t('home.tagline')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={`font-display text-xl font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="link-view-all-services">
              <Button variant="outline" size="lg" className="gap-2">
                {t('nav.services')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('home.reviews.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('home.reviews.subtitle')}
            </p>
          </div>

          <div className="text-center">
            <Link href="/reviews" data-testid="link-view-reviews">
              <Button variant="outline" size="lg" className="gap-2">
                {t('nav.reviews')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
