import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Activity, 
  Calendar, 
  FileText, 
  BarChart3, 
  Users, 
  Clock, 
  Shield, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Brain,
  MessageSquare,
  Bell,
  Globe,
  Sparkles
} from 'lucide-react';
import { Link } from 'wouter';

// Pricing Section Component
function PricingSection({ language }: { language: string }) {
  const [currency, setCurrency] = useState('USD');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'sixMonth' | 'annual'>('monthly');

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1.00 },
    { code: 'AED', name: 'UAE Dirham', symbol: 'AED', rate: 3.67 },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR', rate: 3.75 },
    { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.868748 },
    { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.765367 },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: 88.613373 },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 1.536024 },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: 1.409807 },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: 1.305472 },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', rate: 0.808824 },
    { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', rate: 4.182979 },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: 153.807642 },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', rate: 7.122996 },
    { code: 'SYP', name: 'Syrian Pound', symbol: 'SYP', rate: 11000 },
  ];

  const getCurrentCurrency = () => currencies.find(c => c.code === currency) || currencies[0];

  const convertPrice = (usdPrice: number) => {
    const curr = getCurrentCurrency();
    const converted = usdPrice * curr.rate;
    // For currencies like JPY, INR, and SYP, round to whole numbers, otherwise round to 2 decimals
    if (curr.code === 'JPY' || curr.code === 'INR' || curr.code === 'SYP') {
      return Math.round(converted);
    }
    return Math.round(converted * 100) / 100;
  };

  const getCurrencySymbol = () => {
    return getCurrentCurrency().symbol;
  };

  const getCurrentPrice = (plan: any) => {
    switch (billingPeriod) {
      case 'monthly': return plan.monthlyPrice;
      case 'sixMonth': return plan.sixMonthPrice;
      case 'annual': return plan.annualPrice;
    }
  };

  const getSavings = (plan: any) => {
    switch (billingPeriod) {
      case 'sixMonth': return plan.sixMonthSavings;
      case 'annual': return plan.annualSavings;
      default: return 0;
    }
  };

  const plans = [
    {
      name: language === 'ar' ? 'الباقة الأساسية' : 'Basic Plan',
      monthlyPrice: 149,
      sixMonthPrice: 799,
      annualPrice: 1499,
      sixMonthSavings: 95,
      annualSavings: 289,
      description: language === 'ar' 
        ? 'مثالية للعيادات الصغيرة التي تبدأ مع الأتمتة'
        : 'Perfect for small clinics just starting with automation',
      features: [
        language === 'ar' ? 'رقم واتساب واحد' : '1 WhatsApp number',
        language === 'ar' ? 'وكيل AI لحجز المواعيد' : 'AI appointment booking agent',
        language === 'ar' ? 'الوصول إلى CRM (مستخدم واحد)' : 'CRM access (1 user)',
        language === 'ar' ? 'لوحة تحليلات أساسية' : 'Basic analytics dashboard',
        language === 'ar' ? 'دعم عبر البريد الإلكتروني' : 'Email support',
      ],
      popular: false,
    },
    {
      name: language === 'ar' ? 'الباقة الاحترافية' : 'Pro Plan',
      monthlyPrice: 299,
      sixMonthPrice: 1599,
      annualPrice: 2999,
      sixMonthSavings: 195,
      annualSavings: 589,
      description: language === 'ar'
        ? 'مثالية للعيادات المتوسطة التي تحتاج أتمتة كاملة متعددة المنصات'
        : 'Ideal for medium clinics that need full multi-platform automation',
      features: [
        language === 'ar' ? 'حتى 3 قنوات تواصل (واتساب + إنستغرام + فيسبوك)' : 'Up to 3 communication channels (WhatsApp + Instagram + Facebook)',
        language === 'ar' ? 'وكيل أتمتة AI كامل' : 'Full AI automation agent',
        language === 'ar' ? 'الوصول إلى CRM (حتى 3 مستخدمين)' : 'CRM access (up to 3 users)',
        language === 'ar' ? 'تحليلات وتقارير متقدمة' : 'Advanced analytics & reports',
        language === 'ar' ? 'دعم تقني ذو أولوية' : 'Priority technical support',
      ],
      popular: true,
    },
    {
      name: language === 'ar' ? 'باقة المؤسسات' : 'Enterprise Plan',
      monthlyPrice: 599,
      sixMonthPrice: 3199,
      annualPrice: 5999,
      sixMonthSavings: 395,
      annualSavings: 1189,
      description: language === 'ar'
        ? 'مصممة للعيادات متعددة الفروع أو المراكز الطبية'
        : 'Built for multi-branch clinics or medical centers',
      features: [
        language === 'ar' ? 'تكامل غير محدود للمنصات (واتساب، إنستغرام، تيليغرام، إلخ)' : 'Unlimited platform integration (WhatsApp, Instagram, Telegram, etc.)',
        language === 'ar' ? 'وكيل AI مخصص ومُدرَّب على علامتك التجارية' : 'Custom AI agent fine-tuned to your brand',
        language === 'ar' ? 'الوصول الكامل إلى CRM (مستخدمين غير محدودين)' : 'Full CRM suite access (unlimited users)',
        language === 'ar' ? 'مدير حساب مخصص' : 'Dedicated account manager',
        language === 'ar' ? 'التكامل مع أنظمتك الحالية (ERP، مركز الاتصال، إلخ)' : 'Integration with your existing systems (ERP, call center, etc.)',
        language === 'ar' ? 'خيار العلامة البيضاء بعلامتك التجارية' : 'White-label option with your clinic\'s branding',
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {language === 'ar' ? 'خطط الاشتراك' : 'Subscription Plans'}
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
              {language === 'ar' ? 'اختر الباقة المناسبة لعيادتك' : 'Choose the Right Plan for Your Clinic'}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'ar'
                ? 'جميع الباقات تشمل إعداد AI مُدار بالكامل وبنية تحتية سحابية آمنة وقابلة للتوسع'
                : 'All plans include fully managed AI setup and secure, scalable cloud infrastructure'
              }
            </p>

            {/* Billing Period Switcher */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">
                {language === 'ar' ? 'فترة الفوترة:' : 'Billing Period:'}
              </span>
              <div className="inline-flex rounded-lg border p-1 bg-muted/50">
                <Button
                  variant={billingPeriod === 'monthly' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setBillingPeriod('monthly')}
                  className="rounded-md"
                >
                  {language === 'ar' ? 'شهري' : 'Monthly'}
                </Button>
                <Button
                  variant={billingPeriod === 'sixMonth' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setBillingPeriod('sixMonth')}
                  className="rounded-md relative"
                >
                  {language === 'ar' ? '6 أشهر' : '6 Months'}
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {language === 'ar' ? 'وفّر' : 'Save'}
                  </span>
                </Button>
                <Button
                  variant={billingPeriod === 'annual' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setBillingPeriod('annual')}
                  className="rounded-md relative"
                >
                  {language === 'ar' ? 'سنوي' : 'Annual'}
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {language === 'ar' ? 'وفّر' : 'Save'}
                  </span>
                </Button>
              </div>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-sm text-muted-foreground">
                {language === 'ar' ? 'العملة:' : 'Currency:'}
              </span>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr.code} value={curr.code}>
                      <div className="flex items-center justify-between w-full gap-3">
                        <span className="font-medium">{curr.code}</span>
                        <span className="text-muted-foreground text-sm">
                          {curr.name} ({curr.symbol})
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover-elevate transition-all duration-300 ${
                  plan.popular ? 'border-2 border-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600">
                      {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className={`text-2xl mb-2 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        {getCurrencySymbol()}{convertPrice(getCurrentPrice(plan)).toLocaleString()}
                      </span>
                      {billingPeriod === 'monthly' && (
                        <span className="text-muted-foreground">
                          /{language === 'ar' ? 'شهر' : 'month'}
                        </span>
                      )}
                    </div>
                    {billingPeriod === 'sixMonth' && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'ar' ? 'لمدة 6 أشهر' : 'for 6 months'}
                      </p>
                    )}
                    {billingPeriod === 'annual' && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'ar' ? 'سنوياً' : 'per year'}
                      </p>
                    )}
                    {getSavings(plan) > 0 && (
                      <div className="mt-2">
                        <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                          {language === 'ar' ? 'وفّر' : 'Save'} {getCurrencySymbol()}{convertPrice(getSavings(plan)).toLocaleString()}
                        </Badge>
                      </div>
                    )}
                    {currency !== 'USD' && (
                      <p className="text-xs text-muted-foreground mt-2">
                        (${getCurrentPrice(plan).toLocaleString()} USD)
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button 
                      className="w-full" 
                      size="lg"
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="mt-16 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-gray-900 dark:to-blue-950/30 rounded-2xl p-8 md:p-12">
            <h3 className={`text-2xl font-bold mb-6 text-center ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
              {language === 'ar' ? 'لماذا تختار أفق كلينك فلو؟' : 'Why Choose Ufuq ClinicFlow?'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === 'ar' ? 'إعداد AI مُدار بالكامل' : 'Fully Managed AI Setup'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' 
                      ? 'نحن نتعامل مع كل شيء من أجلك - من التثبيت إلى التدريب والصيانة'
                      : 'We handle everything for you - from installation to training and maintenance'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === 'ar' ? 'بنية تحتية سحابية آمنة وقابلة للتوسع' : 'Secure & Scalable Cloud Infrastructure'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar'
                      ? 'استضافة آمنة مع نسخ احتياطي تلقائي ووقت تشغيل 99.9%'
                      : 'Secure hosting with automatic backups and 99.9% uptime'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === 'ar' ? 'أتمتة 24/7 بجودة تفاعل شبيهة بالبشر' : '24/7 Automation with Human-Like Interaction'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar'
                      ? 'الذكاء الاصطناعي الخاص بنا يتفاعل بشكل طبيعي ويفهم السياق'
                      : 'Our AI interacts naturally and understands context'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === 'ar' ? 'مصمم للإمارات والسعودية' : 'Designed for UAE & Saudi Arabia'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar'
                      ? 'متوافق مع احتياجات سير العمل المحلية والمتطلبات التنظيمية'
                      : 'Compliant with local workflow needs and regulatory requirements'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClinicFlow() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: MessageSquare,
      title: language === 'ar' ? 'مركز تواصل موحّد (Omni-Channel)' : 'Unified Communication Hub (Omni-Channel)',
      description: language === 'ar'
        ? 'كل رسائل العيادة من واتساب، إنستغرام، فيسبوك، تيليغرام، الموقع الإلكتروني، وحتى الرسائل النصية في مكان واحد. يتعامل النظام مع جميع المحادثات عبر الوكيل الذكي (AI Agent) الذي يفهم استفسارات المرضى، يرد عليها، ويقوم بالحجز مباشرة دون تدخل بشري إلا عند الحاجة.'
        : 'All clinic messages from WhatsApp, Instagram, Facebook, Telegram, website, and even SMS in one place. The system handles all conversations through an AI Agent that understands patient inquiries, responds to them, and books appointments directly without human intervention unless needed.',
    },
    {
      icon: Brain,
      title: language === 'ar' ? 'مساعد ذكي لحجز المواعيد' : 'AI Booking Assistant',
      description: language === 'ar'
        ? 'المريض يرسل رسالة فقط مثل: "أريد موعد تنظيف أسنان الثلاثاء القادم." وسيتولى الذكاء الصناعي تلقائياً التأكد من المواعيد المتاحة، تنسيق الحجز، إرسال رسالة التأكيد، والتذكير قبل الموعد.'
        : 'Patient simply sends a message like: "I want a dental cleaning appointment next Tuesday." The AI automatically checks available slots, coordinates the booking, sends confirmation, and reminds before the appointment.',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'تكامل مباشر مع CRM العيادة' : 'Direct CRM Integration',
      description: language === 'ar'
        ? 'النظام متصل مباشرة بـ Ufuq ClinicFlow CRM ليعرض جميع بيانات المرضى والمواعيد والتقارير في لوحة تحكم واحدة. كل رسالة تُسجَّل، كل موعد يُحدَّث تلقائياً، وكل معلومة يمكن الوصول إليها فوراً دون الحاجة لفتح أنظمة متعددة.'
        : 'The system connects directly to Ufuq ClinicFlow CRM to display all patient data, appointments, and reports in one dashboard. Every message is logged, every appointment is automatically updated, and all information is instantly accessible without opening multiple systems.',
    },
    {
      icon: BarChart3,
      title: language === 'ar' ? 'تحليلات وتقارير ذكية' : 'Smart Analytics & Reports',
      description: language === 'ar'
        ? 'لوحة تحكم متقدمة تعرض إحصاءات دقيقة: عدد المحادثات اليومية لكل منصة، معدل الحجز والردود الآلية، أداء الفريق وسرعة الاستجابة، مستوى رضا المرضى (NPS)، وأكثر من 30 مؤشراً حيوياً (KPI) لمتابعة نمو العيادة.'
        : 'Advanced dashboard displaying accurate statistics: daily conversations per platform, booking rate and automated responses, team performance and response speed, patient satisfaction level (NPS), and over 30 vital KPIs to track clinic growth.',
    },
    {
      icon: Stethoscope,
      title: language === 'ar' ? 'تجربة مريض فريدة' : 'Unique Patient Experience',
      description: language === 'ar'
        ? 'تذكيرات تلقائية بالمواعيد، رسائل متابعة بعد الزيارة، إمكانية إرسال ملفات وفواتير مباشرة عبر واتساب، ردود سريعة وقوالب متعددة اللغات (عربي – إنجليزي).'
        : 'Automatic appointment reminders, follow-up messages after visits, ability to send files and invoices directly via WhatsApp, quick responses and multilingual templates (Arabic - English).',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'أمان وموثوقية عالية' : 'High Security & Reliability',
      description: language === 'ar'
        ? 'تم تصميم النظام بمعايير أمان طبية صارمة: تشفير كامل للبيانات، صلاحيات متعددة المستويات (Admin / Reception / Doctor)، تسجيل ومراجعة كل عملية (Audit Log)، متوافق مع معايير حماية البيانات الدولية مثل HIPAA وGDPR.'
        : 'Designed with strict medical security standards: complete data encryption, multi-level permissions (Admin / Reception / Doctor), logging and reviewing every operation (Audit Log), compliant with international data protection standards like HIPAA and GDPR.',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'قابلية التكامل والتوسع' : 'Integration & Scalability',
      description: language === 'ar'
        ? 'النظام يدعم الربط مع: Google Calendar وأنظمة المواعيد الداخلية، أنظمة الدفع الإلكتروني (للحجوزات المدفوعة مسبقاً)، البريد الإلكتروني وSMS، أي نظام طبي أو إداري آخر من خلال واجهات API مفتوحة. قابل للتوسّع حتى 1000 محادثة في الدقيقة الواحدة.'
        : 'The system supports integration with: Google Calendar and internal appointment systems, electronic payment systems (for prepaid bookings), email and SMS, any other medical or administrative system through open APIs. Scalable up to 1000 conversations per minute.',
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'متاح 24/7 بدون توقف' : 'Available 24/7 Non-Stop',
      description: language === 'ar'
        ? 'المساعد الذكي الذي لا ينام، ويعمل على مدار الساعة لضمان ألا تفقد أي حجز أو عميل محتمل. يُوفّر الوقت، يقلّل الأخطاء، ويمنح طاقم العمل تركيزاً أكبر على المرضى لا على الرسائل.'
        : 'The intelligent assistant that never sleeps, working around the clock to ensure you never lose any booking or potential client. Saves time, reduces errors, and gives staff greater focus on patients rather than messages.',
    },
  ];

  const benefits = [
    {
      title: language === 'ar' ? 'يعمل بذكاء، لا بمجهود' : 'Works Smart, Not Hard',
      description: language === 'ar'
        ? 'النظام يجعل العيادة تعمل بذكاء من خلال الأتمتة الكاملة للعمليات الروتينية'
        : 'The system makes the clinic work intelligently through complete automation of routine operations',
      icon: Brain,
    },
    {
      title: language === 'ar' ? 'توفير الوقت والجهد' : 'Save Time & Effort',
      description: language === 'ar'
        ? 'يُوفّر الوقت ويقلّل الأخطاء، ويمنح طاقم العمل تركيزاً أكبر على المرضى لا على الرسائل'
        : 'Saves time, reduces errors, and gives staff greater focus on patients rather than messages',
      icon: Zap,
    },
    {
      title: language === 'ar' ? 'لا تفقد أي عميل' : 'Never Lose a Client',
      description: language === 'ar'
        ? 'المساعد الذكي يعمل 24/7 لضمان ألا تفقد أي حجز أو عميل محتمل'
        : 'The intelligent assistant works 24/7 to ensure you never lose any booking or potential client',
      icon: CheckCircle2,
    },
    {
      title: language === 'ar' ? 'أكثر من 30 مؤشر أداء' : '30+ Performance KPIs',
      description: language === 'ar'
        ? 'تتبع شامل لأداء العيادة مع أكثر من 30 مؤشراً حيوياً لمتابعة النمو'
        : 'Comprehensive clinic performance tracking with over 30 vital KPIs to monitor growth',
      icon: BarChart3,
    },
  ];

  const useCases = [
    language === 'ar' ? 'العيادات الخاصة' : 'Private Clinics',
    language === 'ar' ? 'المراكز الطبية' : 'Medical Centers',
    language === 'ar' ? 'عيادات الأسنان' : 'Dental Clinics',
    language === 'ar' ? 'العيادات التخصصية' : 'Specialty Clinics',
    language === 'ar' ? 'مراكز العلاج الطبيعي' : 'Physical Therapy Centers',
    language === 'ar' ? 'العيادات البيطرية' : 'Veterinary Clinics',
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={language === 'ar' ? 'أفق كلينك فلو' : 'Ufuq ClinicFlow'}
        description={language === 'ar' 
          ? 'نظام أتمتة ذكي للعيادات الطبية مدعوم بالذكاء الاصطناعي'
          : 'AI-Powered Clinical Automation System'
        }
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              {language === 'ar' ? 'نظام طبي ذكي' : 'Intelligent Medical System'}
            </Badge>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Activity className="h-12 w-12 text-blue-600" />
              <h1 className={`font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'أفق كلينك فلو' : 'Ufuq ClinicFlow'}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نظام أتمتة متكامل يحوّل طريقة إدارة العيادات والمراكز الطبية إلى تجربة ذكية وسلسة بالكامل. يجمع بين الذكاء الصناعي والتحكم المركزي ليجعل التواصل مع المرضى وإدارة المواعيد والخدمات أكثر سرعة، دقة، وتنظيماً من أي وقت مضى.'
                : 'An integrated automation system developed by Ufuq Automation Agency that transforms clinic and medical center management into a completely intelligent and seamless experience. It combines artificial intelligence and centralized control to make patient communication, appointment management, and services faster, more accurate, and more organized than ever before.'
              }
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="group">
                  {language === 'ar' ? 'احجز عرضاً توضيحياً' : 'Book a Demo'}
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Sales'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
              {language === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'مجموعة شاملة من الأدوات والمميزات المصممة لتحسين إدارة عيادتك'
                : 'A comprehensive suite of tools and features designed to improve your clinic management'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className={`text-lg ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-gray-900 dark:to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
              {language === 'ar' ? 'الفوائد والمزايا' : 'Benefits & Advantages'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'اكتشف كيف يمكن لنظام كلينك فلو أن يحول عيادتك'
                : 'Discover how ClinicFlow can transform your clinic'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className={`text-xl ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Technical Features Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                {language === 'ar' ? 'المميزات التقنية' : 'Technical Features'}
              </Badge>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
                {language === 'ar' ? 'تقنيات متقدمة لأداء استثنائي' : 'Advanced Technologies for Exceptional Performance'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'دعم متعدد القنوات' : 'Multi-Channel Support'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'WhatsApp – Instagram – Telegram – Facebook – الموقع الإلكتروني – SMS'
                      : 'WhatsApp – Instagram – Telegram – Facebook – Website – SMS'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'لوحة تحكم فورية + تقارير متقدمة' : 'Real-Time Dashboard + Advanced Reports'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'أكثر من 30 مؤشر أداء حيوي (KPI) لمتابعة نمو العيادة'
                      : 'Over 30 vital KPIs to track clinic growth'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'تكامل مباشر مع CRM' : 'Direct CRM Integration'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'نظام إدارة علاقات العملاء متكامل مع جميع القنوات'
                      : 'Integrated customer relationship management system with all channels'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'مساعد AI مخصص' : 'Custom AI Assistant'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'وكيل ذكي مخصص لكل عيادة يفهم احتياجاتك الخاصة'
                      : 'Custom intelligent agent for each clinic that understands your specific needs'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'دعم لغتين' : 'Bilingual Support'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'دعم كامل للعربية والإنجليزية مع قوالب متعددة اللغات'
                      : 'Full Arabic and English support with multilingual templates'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'قابل للتوسّع' : 'Highly Scalable'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'يدعم حتى 1000 محادثة في الدقيقة الواحدة'
                      : 'Supports up to 1000 conversations per minute'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'جاهز للتخصيص' : 'Customizable'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'قابل للتخصيص حسب هوية وعلامة كل عيادة'
                      : 'Customizable according to each clinic\'s identity and brand'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? 'متوافق مع المعايير الدولية' : 'International Standards Compliant'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'متوافق مع معايير HIPAA وGDPR لحماية البيانات'
                      : 'Compliant with HIPAA and GDPR data protection standards'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-gray-900 dark:to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
                {language === 'ar' ? 'مناسب لجميع أنواع العيادات' : 'Suitable for All Types of Clinics'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'ar'
                  ? 'نظام مرن يتكيف مع احتياجات مختلف التخصصات الطبية'
                  : 'A flexible system that adapts to the needs of different medical specialties'
                }
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardContent className="flex items-center gap-3 p-6">
                    <Stethoscope className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{useCase}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection language={language} />

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : 'font-display'}`}>
              {language === 'ar' ? 'جاهز لتحويل عيادتك؟' : 'Ready to Transform Your Clinic?'}
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              {language === 'ar'
                ? 'احجز عرضاً توضيحياً مجانياً واكتشف كيف يمكن لنظام كلينك فلو أن يحسن عملياتك'
                : 'Book a free demo and discover how ClinicFlow can improve your operations'
              }
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  {language === 'ar' ? 'احجز عرضاً توضيحياً مجانياً' : 'Book a Free Demo'}
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  {language === 'ar' ? 'عودة إلى الحلول' : 'Back to Solutions'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
