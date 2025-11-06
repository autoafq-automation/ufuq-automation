import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
        description={language === 'ar' ? 'سياسة الخصوصية لأفق أوتوميشن' : 'Privacy Policy for Ufuq Automation'}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {language === 'ar' ? 'قانوني' : 'Legal'}
            </Badge>
            <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? 'آخر تحديث: ' + new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
                : 'Last updated: ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
              }
            </p>
          </div>

          <Card>
            <CardContent className="prose dark:prose-invert max-w-none p-8">
              {language === 'ar' ? (
                <div className="space-y-6 font-arabic text-right" dir="rtl">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
                    <p>
                      في أفق أوتوميشن، نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام خدماتنا.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">المعلومات التي نجمعها</h2>
                    <p>نقوم بجمع المعلومات التالية:</p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li><strong>معلومات الاتصال:</strong> الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة</li>
                      <li><strong>معلومات تقنية:</strong> عنوان IP، نوع المتصفح، نظام التشغيل</li>
                      <li><strong>معلومات الاستخدام:</strong> كيفية تفاعلك مع موقعنا وخدماتنا</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">كيف نستخدم معلوماتك</h2>
                    <p>نستخدم معلوماتك من أجل:</p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>تقديم وتحسين خدماتنا</li>
                      <li>الرد على استفساراتك وطلباتك</li>
                      <li>إرسال تحديثات ومعلومات حول خدماتنا</li>
                      <li>تحليل وتحسين تجربة المستخدم</li>
                      <li>الامتثال للالتزامات القانونية</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">حماية البيانات</h2>
                    <p>
                      نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو التدمير. نستخدم تشفير SSL ونتبع أفضل ممارسات الصناعة.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">مشاركة المعلومات</h2>
                    <p>
                      لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
                    </p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>بموافقتك الصريحة</li>
                      <li>لمقدمي الخدمات الموثوق بهم الذين يساعدوننا في تشغيل أعمالنا</li>
                      <li>عند الطلب بموجب القانون أو لحماية حقوقنا</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">ملفات تعريف الارتباط (Cookies)</h2>
                    <p>
                      نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">حقوقك</h2>
                    <p>لديك الحق في:</p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>الوصول إلى معلوماتك الشخصية</li>
                      <li>تصحيح المعلومات غير الدقيقة</li>
                      <li>طلب حذف معلوماتك</li>
                      <li>الاعتراض على معالجة معلوماتك</li>
                      <li>طلب نقل بياناتك</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
                    <p>
                      إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا عبر صفحة الاتصال.
                    </p>
                  </section>
                </div>
              ) : (
                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p>
                      At Ufuq Automation, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <p>We collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                      <li><strong>Technical Information:</strong> IP address, browser type, operating system</li>
                      <li><strong>Usage Information:</strong> How you interact with our website and services</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide and improve our services</li>
                      <li>Respond to your inquiries and requests</li>
                      <li>Send updates and information about our services</li>
                      <li>Analyze and improve user experience</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
                    <p>
                      We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use SSL encryption and follow industry best practices.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                    <p>
                      We do not sell, rent, or share your personal information with third parties except in the following cases:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With your explicit consent</li>
                      <li>With trusted service providers who help us operate our business</li>
                      <li>When required by law or to protect our rights</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                    <p>
                      We use cookies to enhance your experience on our website. You can control cookies through your browser settings.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Object to processing of your information</li>
                      <li>Request data portability</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy, please contact us through our contact page.
                    </p>
                  </section>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
