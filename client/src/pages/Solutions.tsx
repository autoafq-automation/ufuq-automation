import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Activity, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function Solutions() {
  const { t, language } = useLanguage();

  const solutions = [
    {
      id: 'clinicflow',
      icon: Activity,
      name: language === 'ar' ? 'أفق كلينك فلو' : 'Ufuq ClinicFlow',
      tagline: language === 'ar' 
        ? 'نظام أتمتة ذكي للعيادات الطبية' 
        : 'AI-Powered Clinical Automation System',
      description: language === 'ar'
        ? 'نظام شامل لإدارة العيادات الطبية مدعوم بالذكاء الاصطناعي، يوفر أتمتة كاملة للعمليات السريرية، إدارة المرضى، والجدولة الذكية.'
        : 'A comprehensive AI-powered clinical management system that provides complete automation for clinical operations, patient management, and intelligent scheduling.',
      features: [
        language === 'ar' ? 'إدارة ذكية للمرضى' : 'Smart Patient Management',
        language === 'ar' ? 'جدولة مواعيد تلقائية' : 'Automated Appointment Scheduling',
        language === 'ar' ? 'سجلات طبية إلكترونية' : 'Electronic Medical Records',
        language === 'ar' ? 'تحليلات طبية متقدمة' : 'Advanced Medical Analytics',
      ],
      status: language === 'ar' ? 'متاح الآن' : 'Available Now',
      link: '/solutions/clinicflow',
      gradient: 'from-blue-500 to-cyan-500',
    },
    // Placeholder for future solutions
    {
      id: 'coming-soon-1',
      icon: Sparkles,
      name: language === 'ar' ? 'قريباً' : 'Coming Soon',
      tagline: language === 'ar' 
        ? 'حلول مبتكرة قادمة' 
        : 'Innovative Solutions Coming',
      description: language === 'ar'
        ? 'نحن نعمل على تطوير حلول جديدة ومبتكرة لتلبية احتياجاتكم. ترقبوا المزيد من الأنظمة الذكية قريباً.'
        : 'We are developing new and innovative solutions to meet your needs. Stay tuned for more intelligent systems coming soon.',
      features: [
        language === 'ar' ? 'تقنيات متقدمة' : 'Advanced Technologies',
        language === 'ar' ? 'حلول مخصصة' : 'Custom Solutions',
        language === 'ar' ? 'تكامل سلس' : 'Seamless Integration',
      ],
      status: language === 'ar' ? 'قيد التطوير' : 'In Development',
      link: '#',
      gradient: 'from-purple-500 to-pink-500',
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={language === 'ar' ? 'حلولنا' : 'Our Solutions'}
        description={language === 'ar' 
          ? 'اكتشف أنظمتنا الذكية المدعومة بالذكاء الاصطناعي المصممة لتحويل عملك'
          : 'Discover our intelligent AI-powered systems designed to transform your business'
        }
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {language === 'ar' ? 'حلولنا' : 'Our Solutions'}
          </Badge>
          <h1 className={`font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'أنظمة ذكية لمستقبل أفضل' : 'Intelligent Systems for a Better Future'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نقدم مجموعة من الأنظمة الذكية المدعومة بالذكاء الاصطناعي المصممة خصيصاً لتلبية احتياجات مختلف القطاعات وتحسين الكفاءة التشغيلية'
              : 'We offer a suite of intelligent AI-powered systems specifically designed to meet the needs of various sectors and improve operational efficiency'
            }
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={solution.id} 
                className={`relative overflow-hidden hover-elevate transition-all duration-300 ${solution.comingSoon ? 'opacity-90' : ''}`}
                data-testid={`solution-card-${solution.id}`}
              >
                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${solution.gradient}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant={solution.comingSoon ? 'outline' : 'default'}>
                      {solution.status}
                    </Badge>
                  </div>
                  <CardTitle className={`text-2xl mb-2 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
                    {solution.name}
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    {solution.tagline}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      {language === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  {!solution.comingSoon ? (
                    <Link href={solution.link}>
                      <Button className="w-full group" size="lg">
                        {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                        <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full" size="lg" variant="outline" disabled>
                      {language === 'ar' ? 'قريباً' : 'Coming Soon'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
            {language === 'ar' ? 'هل تحتاج إلى حل مخصص؟' : 'Need a Custom Solution?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نحن متخصصون في تطوير حلول مخصصة تلبي احتياجات عملك الفريدة. تواصل معنا لمناقشة مشروعك.'
              : 'We specialize in developing custom solutions that meet your unique business needs. Contact us to discuss your project.'
            }
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
