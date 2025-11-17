import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  Calendar,
  Database,
  Shield,
  Clock,
  Stethoscope,
  Bot,
  DollarSign,
  Target,
  Sparkles
} from 'lucide-react';

export default function USMarket() {
  const { t, language } = useLanguage();

  const coreCapabilities = [
    {
      icon: Phone,
      title: language === 'ar' ? 'مكالمات الذكاء الاصطناعي الواردة والصادرة' : 'Inbound & Outbound AI Calls',
      description: language === 'ar'
        ? 'يتعامل مع جميع مكالمات المرضى تلقائياً: حجز المواعيد، الإجابة على الأسئلة الشائعة، وجمع بيانات المرضى. يجري مكالمات صادرة لتأكيد العملاء الجدد وتذكير المرضى بالمواعيد. يدعم اللغتين الإنجليزية والعربية.'
        : 'Handles all inbound patient calls automatically: books appointments, answers FAQs, and collects patient details. Makes outbound calls to confirm new leads and remind patients of appointments. Supports both English and Arabic interactions.',
    },
    {
      icon: MessageSquare,
      title: language === 'ar' ? 'التواصل متعدد القنوات' : 'Multi-Channel Communication',
      description: language === 'ar'
        ? 'نظام مركزي يستقبل ويرد على رسائل المرضى من واتساب، إنستغرام، ميسنجر، تيليجرام، وغيرها. يتعامل مع جميع أنواع البيانات: نصوص، صوت، صور، ومستندات.'
        : 'Centralized system that receives and responds to patient messages from WhatsApp, Instagram, Messenger, Telegram, and more. Handles all data types: text, audio, images, and documents. Automatically syncs with clinic calendar and CRM.',
    },
    {
      icon: Bot,
      title: language === 'ar' ? 'موظف استقبال ذكي' : 'AI Receptionist',
      description: language === 'ar'
        ? 'يعمل كمكتب استقبال افتراضي كامل. يحجز ويعيد جدولة أو يلغي المواعيد بناءً على التوفر في الوقت الفعلي. يرسل تأكيدات وتذكيرات تلقائية عبر واتساب أو SMS أو المكالمات.'
        : 'Acts as a full virtual front desk. Books, reschedules, or cancels appointments based on real-time availability. Sends automated confirmations and reminders via WhatsApp, SMS, or call. Notifies doctors instantly about cancellations or urgent cases.',
    },
    {
      icon: Stethoscope,
      title: language === 'ar' ? 'مساعد الطبيب الداخلي' : "Doctor's Internal Assistant",
      description: language === 'ar'
        ? 'يمكن الوصول إليه عبر واتساب وتيليجرام للاستخدام الداخلي. يتصل مباشرة بقاعدة بيانات العيادة والتقويم. يمكنه إدارة إعادة الجدولة، إضافة المهام، وتقديم ملخصات معلومات المرضى.'
        : "Accessible via WhatsApp and Telegram for internal use. Connects directly to the clinic's database and calendar. Can manage rescheduling, add tasks, and provide summaries of patient information. Handles internal reminders like medication restocks and equipment orders.",
    },
    {
      icon: Database,
      title: language === 'ar' ? 'إدارة CRM والبيانات' : 'CRM & Data Management',
      description: language === 'ar'
        ? 'قاعدة بيانات موحدة لجميع تفاعلات المرضى. جاهزة للتكامل مع CRM الحالي للعيادة أو استخدام CRM المدمج لدينا. تحديثات فورية عبر جميع الأنظمة.'
        : "Unified database for all patient interactions (calls, messages, bookings). Integration-ready with the clinic's existing CRM or can use Ufuq Automation's built-in CRM. Real-time updates across all systems.",
    },
    {
      icon: BarChart3,
      title: language === 'ar' ? 'لوحة تحليلات ذكية' : 'Smart Analytics Dashboard',
      description: language === 'ar'
        ? 'تقارير أداء يومية وأسبوعية وشهرية. تتبع مشاركة المرضى، معدلات المواعيد، تحليلات المكالمات، ونشاط الذكاء الاصطناعي.'
        : 'Provides daily, weekly, and monthly performance reports. Tracks patient engagement, appointment rates, call analytics, and AI activity. Offers insights into response time, conversion rates, and patient satisfaction.',
    },
  ];

  const benefits = [
    language === 'ar' ? 'تقليل عبء العمل في مكتب الاستقبال بنسبة 25-40%' : '25–40% reduction in front-desk workload',
    language === 'ar' ? 'انخفاض حالات عدم الحضور بنسبة 15-30%' : '15–30% drop in patient no-shows',
    language === 'ar' ? 'تحويل أسرع للعملاء المحتملين' : 'Faster lead conversion from online forms',
    language === 'ar' ? 'عائد استثمار ثابت 3-5× خلال 90 يوماً' : 'Consistent 3–5× ROI within 90 days',
    language === 'ar' ? 'متوافق مع معايير HIPAA' : 'HIPAA & Compliance Ready',
    language === 'ar' ? 'دعم على مدار الساعة طوال أيام الأسبوع' : '24/7 system monitoring',
  ];

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={language === 'ar' ? 'السوق الأمريكي' : 'US Market'}
        description={language === 'ar' 
          ? 'حلول الأتمتة المخصصة للسوق الأمريكي من أفق أوتوميشن'
          : 'Tailored automation solutions for the US market by Ufuq Automation'
        }
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {language === 'ar' ? 'السوق الأمريكي' : 'US Market'}
          </Badge>
          <h1 className={`font-display text-4xl md:text-6xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' 
              ? 'نظام أفق كلينك - أتمتة العيادات الطبية بالذكاء الاصطناعي'
              : 'Ufuq Clinic — AI Automation System for Medical Clinics'
            }
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {language === 'ar'
              ? 'نظام متقدم مدعوم بالذكاء الاصطناعي مصمم خصيصاً للعيادات الطبية وعيادات الأسنان. يتعامل مع كل مرحلة من مراحل التواصل مع العيادة - من توليد العملاء المحتملين والمكالمات الواردة إلى تذكير المرضى ومساعدة الأطباء - كل ذلك في نظام متكامل واحد.'
              : 'An advanced AI-powered automation system built exclusively for medical and dental clinics. It handles every stage of clinic communication — from lead generation and inbound calls to patient reminders and doctor assistance — all in one connected ecosystem.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                {language === 'ar' ? 'استكشف خدماتنا' : 'Explore Our Services'}
              </Button>
            </Link>
          </div>
        </div>

        {/* Core Capabilities Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'القدرات الأساسية' : 'Core Capabilities'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className={language === 'ar' ? 'font-arabic' : ''}>
                      {feature.title}
                    </CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle className={`text-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'النتائج النموذجية' : 'Typical Results'}
                </CardTitle>
              </div>
              <CardDescription>
                {language === 'ar'
                  ? 'العيادات التي تستخدم نظام أفق كلينك تحقق عادةً'
                  : 'Clinics using Ufuq Clinic typically achieve'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className={language === 'ar' ? 'font-arabic' : ''}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Plans Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className={`text-3xl font-bold text-center mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'خطط الأسعار' : 'Pricing Plans'}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {language === 'ar' ? 'اختر الخطة المناسبة لعيادتك' : 'Choose the plan that fits your clinic'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">{language === 'ar' ? 'أساسي' : 'Basic'}</Badge>
                <CardTitle className={`text-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>$249<span className="text-sm font-normal text-muted-foreground">/mo</span></CardTitle>
                <CardDescription>{language === 'ar' ? 'رسوم الإعداد: $499' : 'Setup Fee: $499'}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'أتمتة الاستقبال' : 'Reception automation'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'المكالمات الواردة' : 'Inbound calls'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'إدارة CRM' : 'CRM management'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'التذكيرات التلقائية' : 'Automated reminders'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">{language === 'ar' ? 'احترافي' : 'Pro'}</Badge>
                <CardTitle className={`text-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>$499<span className="text-sm font-normal text-muted-foreground">/mo</span></CardTitle>
                <CardDescription>{language === 'ar' ? 'رسوم الإعداد: $699' : 'Setup Fee: $699'}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'كل ميزات الخطة الأساسية' : 'All Basic features'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'المكالمات الصادرة' : 'Outbound follow-ups'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'تكامل متعدد القنوات' : 'Multi-channel integration'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'تقارير التحليلات' : 'AI analytics reports'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">{language === 'ar' ? 'مؤسسي' : 'Enterprise'}</Badge>
                <CardTitle className={`text-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>$899<span className="text-sm font-normal text-muted-foreground">/mo</span></CardTitle>
                <CardDescription>{language === 'ar' ? 'رسوم الإعداد: $999' : 'Setup Fee: $999'}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'كل ميزات الخطة الاحترافية' : 'All Pro features'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'مساعد الطبيب' : 'Doctor assistant'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'تكامل CRM مخصص' : 'Custom CRM integration'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{language === 'ar' ? 'دعم مخصص' : 'Dedicated support'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            {language === 'ar' 
              ? 'خيار الدفع السنوي: خصم 10-15% + إعفاء أو تخفيض رسوم الإعداد'
              : 'Annual Prepay Option: 10–15% discount + setup fee waived or reduced'
            }
          </p>
        </div>

        {/* Target Market Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-6 w-6 text-primary" />
                <CardTitle className={`text-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'السوق المستهدف' : 'Target Market'}
                </CardTitle>
              </div>
              <CardDescription>
                {language === 'ar'
                  ? 'التركيز على المرحلة الأولى: العيادات الطبية وعيادات الأسنان في الولايات المتحدة'
                  : 'Phase 1 Focus: Medical & Dental Clinics in the United States'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">{language === 'ar' ? 'المنطقة' : 'Region'}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'الولايات المتحدة (التركيز الأولي: تكساس، فلوريدا، وكاليفورنيا)'
                        : 'USA (Initial focus: Texas, Florida, and California)'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">{language === 'ar' ? 'العملاء المستهدفون' : 'Target Clients'}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar'
                        ? 'العيادات التي تضم ≥2 ممارسين، حجم مكالمات واردة مرتفع، أو مشاركة نشطة للمرضى عبر الإنترنت'
                        : 'Clinics with ≥2 practitioners, high inbound call volume, or active online patient engagement'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">{language === 'ar' ? 'التخصصات' : 'Specialties'}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar'
                        ? 'الطب العام، طب الأسنان، العيادات التخصصية، والشبكات الطبية'
                        : 'General Practice, Dentistry, Specialty Clinics, and Medical Networks'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className={`font-display text-3xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' 
                  ? 'هل أنت مستعد للبدء؟'
                  : 'Ready to Get Started?'
                }
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'ar'
                  ? 'تواصل معنا اليوم لمعرفة كيف يمكننا مساعدة عملك على النمو'
                  : 'Contact us today to learn how we can help your business grow'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/13159618871" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                    <Globe className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
