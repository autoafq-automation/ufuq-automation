import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { Cpu, BarChart3, Zap, Users, Shield, Workflow, Bot, TrendingUp } from 'lucide-react';

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Cpu,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: [
        language === 'ar' ? 'روبوتات ذكية قابلة للتخصيص' : 'Customizable AI agents',
        language === 'ar' ? 'تعلم آلي متقدم' : 'Advanced machine learning',
        language === 'ar' ? 'معالجة لغة طبيعية' : 'Natural language processing',
      ],
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      features: [
        language === 'ar' ? 'تحليل بيانات في الوقت الفعلي' : 'Real-time data analysis',
        language === 'ar' ? 'تحليلات تنبؤية' : 'Predictive analytics',
        language === 'ar' ? 'لوحات معلومات مخصصة' : 'Custom dashboards',
      ],
    },
    {
      icon: Zap,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      features: [
        language === 'ar' ? 'دعم API شامل' : 'Comprehensive API support',
        language === 'ar' ? 'مزامنة البيانات' : 'Data synchronization',
        language === 'ar' ? 'تكامل سحابي' : 'Cloud integration',
      ],
    },
    {
      icon: Users,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: [
        language === 'ar' ? 'دعم متعدد اللغات' : 'Multilingual support',
        language === 'ar' ? 'استجابة فورية' : 'Instant response',
        language === 'ar' ? 'مساعدة مخصصة' : 'Dedicated assistance',
      ],
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'الأمن والخصوصية' : 'Security & Privacy',
      description: language === 'ar' 
        ? 'حماية من الدرجة الأولى للبيانات والعمليات الخاصة بك مع التشفير المتقدم والامتثال.'
        : 'Enterprise-grade protection for your data and operations with advanced encryption and compliance.',
      features: [
        language === 'ar' ? 'تشفير من طرف إلى طرف' : 'End-to-end encryption',
        language === 'ar' ? 'الامتثال للمعايير' : 'Standards compliance',
        language === 'ar' ? 'نسخ احتياطي آمن' : 'Secure backups',
      ],
    },
    {
      icon: Workflow,
      title: language === 'ar' ? 'أتمتة سير العمل' : 'Workflow Automation',
      description: language === 'ar'
        ? 'قم بتبسيط العمليات المعقدة مع سير العمل الذكي الذي يتكيف مع احتياجات عملك.'
        : 'Streamline complex processes with intelligent workflows that adapt to your business needs.',
      features: [
        language === 'ar' ? 'محرر مرئي لسير العمل' : 'Visual workflow editor',
        language === 'ar' ? 'أتمتة قائمة على القواعد' : 'Rule-based automation',
        language === 'ar' ? 'مسارات ذكية' : 'Smart routing',
      ],
    },
    {
      icon: Bot,
      title: language === 'ar' ? 'روبوتات دردشة ذكية' : 'Intelligent Chatbots',
      description: language === 'ar'
        ? 'مساعدون محادثة مدعومون بالذكاء الاصطناعي يوفرون تجارب شخصية على نطاق واسع.'
        : 'AI-powered conversational assistants that provide personalized experiences at scale.',
      features: [
        language === 'ar' ? 'فهم متقدم للسياق' : 'Advanced context understanding',
        language === 'ar' ? 'دعم متعدد القنوات' : 'Multi-channel support',
        language === 'ar' ? 'إجابات تلقائية' : 'Automated responses',
      ],
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'تحسين الأعمال' : 'Business Optimization',
      description: language === 'ar'
        ? 'حدد الفرص وحسّن الأداء من خلال التحليلات المستندة إلى الذكاء الاصطناعي.'
        : 'Identify opportunities and optimize performance through AI-driven insights and recommendations.',
      features: [
        language === 'ar' ? 'تحسين العمليات' : 'Process optimization',
        language === 'ar' ? 'خفض التكاليف' : 'Cost reduction',
        language === 'ar' ? 'تحسين الكفاءة' : 'Efficiency improvement',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={t('services.title')}
        description={t('services.subtitle')}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-services">
            {t('nav.services')}
          </Badge>
          <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('services.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={`text-xl ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
