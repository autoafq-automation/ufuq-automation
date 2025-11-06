import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Tv, Play, Clock, Calendar, Users, Sparkles, Zap, User } from 'lucide-react';

export default function MediaStudio() {
  const { t, language, isRTL } = useLanguage();

  const programs = [
    {
      id: 'ai-weekly',
      titleAr: 'نشرة الذكاء الاصطناعي الأسبوعية',
      titleEn: 'Weekly AI Newsletter',
      descriptionAr: 'نشرة أسبوعية شاملة تغطي أحدث التطورات والابتكارات في مجال الذكاء الاصطناعي، مع تحليلات معمقة وتطبيقات عملية.',
      descriptionEn: 'A comprehensive weekly newsletter covering the latest developments and innovations in artificial intelligence, with in-depth analysis and practical applications.',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
      category: language === 'ar' ? 'نشرة إخبارية' : 'Newsletter',
      frequency: language === 'ar' ? 'أسبوعياً' : 'Weekly',
      status: language === 'ar' ? 'نشط' : 'Active',
      presenter: 'آدم رشيد',
      presenterEn: 'Adam Rashid',
    },
    {
      id: 'ufuq-automation',
      titleAr: 'برنامج أفق للأتمتة',
      titleEn: 'Ufuq Automation Program',
      descriptionAr: 'برنامج متخصص يستعرض أحدث حلول الأتمتة الذكية وكيفية تطبيقها في مختلف المجالات لتحسين الكفاءة والإنتاجية.',
      descriptionEn: 'A specialized program showcasing the latest intelligent automation solutions and how to apply them across various fields to improve efficiency and productivity.',
      icon: Tv,
      color: 'from-purple-500 to-pink-500',
      category: language === 'ar' ? 'برنامج تلفزيوني' : 'TV Program',
      frequency: language === 'ar' ? 'أسبوعياً' : 'Weekly',
      status: language === 'ar' ? 'نشط' : 'Active',
      presenter: 'ليان الحاج',
      presenterEn: 'Layan Al-Hajj',
    },
    {
      id: 'ai-minute',
      titleAr: 'الذكاء الاصطناعي في دقيقة',
      titleEn: 'AI in a Minute',
      descriptionAr: 'محتوى سريع ومركز يقدم معلومات قيمة عن الذكاء الاصطناعي في دقيقة واحدة فقط، مثالي للمتابعين المشغولين.',
      descriptionEn: 'Quick and focused content delivering valuable AI information in just one minute, perfect for busy followers.',
      icon: Play,
      color: 'from-orange-500 to-red-500',
      category: language === 'ar' ? 'محتوى قصير' : 'Short Content',
      frequency: language === 'ar' ? 'يومياً' : 'Daily',
      status: language === 'ar' ? 'نشط' : 'Active',
      presenter: 'ريان حسون',
      presenterEn: 'Ryan Hassoun',
    },
    {
      id: 'business-intelligence',
      titleAr: 'ذكاء الأعمال',
      titleEn: 'Business Intelligence',
      descriptionAr: 'برنامج يركز على استخدام البيانات والتحليلات الذكية لاتخاذ قرارات أعمال استراتيجية وتحقيق النمو المستدام.',
      descriptionEn: 'A program focused on using data and intelligent analytics to make strategic business decisions and achieve sustainable growth.',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      category: language === 'ar' ? 'برنامج تحليلي' : 'Analytics Program',
      frequency: language === 'ar' ? 'أسبوعياً' : 'Weekly',
      status: language === 'ar' ? 'نشط' : 'Active',
      presenter: 'راشد العمري',
      presenterEn: 'Rashed Al-Omari',
    },
    {
      id: 'automated-tomorrow',
      titleAr: 'الغد الآلي',
      titleEn: 'Automated Tomorrow',
      descriptionAr: 'برنامج يستشرف مستقبل الأتمتة والتقنيات الذكية، ويستكشف كيف ستغير التكنولوجيا حياتنا وأعمالنا في المستقبل القريب.',
      descriptionEn: 'A program that explores the future of automation and intelligent technologies, discovering how technology will transform our lives and businesses in the near future.',
      icon: Zap,
      color: 'from-yellow-500 to-amber-500',
      category: language === 'ar' ? 'برنامج مستقبلي' : 'Future Program',
      frequency: language === 'ar' ? 'أسبوعياً' : 'Weekly',
      status: language === 'ar' ? 'نشط' : 'Active',
      presenter: 'ريما الأزرق',
      presenterEn: 'Rima Al-Azraq',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={language === 'ar' ? 'استوديو الميديا' : 'Media Studio'}
        description={language === 'ar' 
          ? 'اكتشف برامجنا الإعلامية المتخصصة في الذكاء الاصطناعي والأتمتة على منصات التواصل الاجتماعي'
          : 'Discover our specialized media programs on AI and automation across social media platforms'
        }
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Tv className="h-3 w-3 mr-1" />
            {language === 'ar' ? 'استوديو الميديا' : 'Media Studio'}
          </Badge>
          <h1 className={`font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'استوديو الميديا' : 'Media Studio'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'محتوى إعلامي متميز يقدم أحدث المعلومات والتحليلات في مجال الذكاء الاصطناعي والأتمتة عبر منصات التواصل الاجتماعي'
              : 'Premium media content delivering the latest information and analysis in AI and automation across social media platforms'
            }
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ar' ? 'برامج نشطة' : 'Active Programs'}
              </div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ar' ? 'متابع' : 'Followers'}
              </div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ar' ? 'حلقة منشورة' : 'Episodes Published'}
              </div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ar' ? 'منصات' : 'Platforms'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Programs Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'برامجنا الحالية' : 'Our Current Programs'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card 
                  key={program.id} 
                  className="hover-elevate transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {program.status}
                      </Badge>
                    </div>
                    <CardTitle className={`text-2xl mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {language === 'ar' ? program.titleAr : program.titleEn}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{program.frequency}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {program.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-muted-foreground mb-6 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                      {language === 'ar' ? program.descriptionAr : program.descriptionEn}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {language === 'ar' ? 'المقدم: ' : 'Presenter: '}
                          <span className="text-foreground font-medium">
                            {language === 'ar' ? program.presenter : program.presenterEn}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {language === 'ar' ? 'المواعيد: ' : 'Schedule: '}
                          <span className="text-foreground font-medium">
                            {language === 'ar' ? 'قريباً' : 'Coming Soon'}
                          </span>
                        </span>
                      </div>
                    </div>

                    <Button 
                      className="w-full group-hover:shadow-lg transition-all"
                      variant="outline"
                    >
                      {language === 'ar' ? 'تابع البرنامج' : 'Follow Program'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className={`text-2xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'تابعنا على منصات التواصل الاجتماعي' : 'Follow Us on Social Media'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'ar' 
                  ? 'لا تفوت أحدث الحلقات والمحتوى الحصري. تابعنا على جميع المنصات للبقاء على اطلاع دائم.'
                  : "Don't miss the latest episodes and exclusive content. Follow us on all platforms to stay updated."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <Play className="h-4 w-4" />
                  {language === 'ar' ? 'شاهد الآن' : 'Watch Now'}
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Users className="h-4 w-4" />
                  {language === 'ar' ? 'انضم للمجتمع' : 'Join Community'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
