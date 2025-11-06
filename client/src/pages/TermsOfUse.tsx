import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export default function TermsOfUse() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}
        description={language === 'ar' ? 'شروط الاستخدام لأفق أوتوميشن' : 'Terms of Use for Ufuq Automation'}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {language === 'ar' ? 'قانوني' : 'Legal'}
            </Badge>
            <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}
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
                    <h2 className="text-2xl font-bold mb-4">قبول الشروط</h2>
                    <p>
                      باستخدامك لموقع أفق أوتوميشن وخدماتنا، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">الخدمات المقدمة</h2>
                    <p>
                      توفر أفق أوتوميشن حلول الأتمتة بالذكاء الاصطناعي للشركات. نحتفظ بالحق في تعديل أو إيقاف أي جزء من خدماتنا في أي وقت دون إشعار مسبق.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">حساب المستخدم</h2>
                    <p>عند إنشاء حساب معنا، فإنك توافق على:</p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>تقديم معلومات دقيقة وكاملة</li>
                      <li>الحفاظ على أمان بيانات اعتماد حسابك</li>
                      <li>إخطارنا فورًا بأي استخدام غير مصرح به</li>
                      <li>تحمل المسؤولية عن جميع الأنشطة في حسابك</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">الاستخدام المقبول</h2>
                    <p>أنت توافق على عدم:</p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>استخدام خدماتنا لأي غرض غير قانوني</li>
                      <li>محاولة الوصول غير المصرح به إلى أنظمتنا</li>
                      <li>التدخل في عمل خدماتنا</li>
                      <li>نسخ أو توزيع محتوانا دون إذن</li>
                      <li>استخدام خدماتنا لإرسال رسائل غير مرغوب فيها</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">الملكية الفكرية</h2>
                    <p>
                      جميع المحتويات والمواد والخدمات المتاحة على موقعنا هي ملكية أفق أوتوميشن ومحمية بموجب قوانين حقوق النشر والملكية الفكرية.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">إخلاء المسؤولية</h2>
                    <p>
                      يتم توفير خدماتنا "كما هي" دون أي ضمانات من أي نوع. لا نضمن أن خدماتنا ستكون خالية من الأخطاء أو متاحة دون انقطاع.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">تحديد المسؤولية</h2>
                    <p>
                      لن تكون أفق أوتوميشن مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">التعديلات</h2>
                    <p>
                      نحتفظ بالحق في تعديل شروط الاستخدام هذه في أي وقت. سيتم نشر التغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث".
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">القانون الحاكم</h2>
                    <p>
                      تخضع شروط الاستخدام هذه وتفسر وفقًا لقوانين الدولة التي تعمل فيها أفق أوتوميشن.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
                    <p>
                      إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى الاتصال بنا عبر صفحة الاتصال.
                    </p>
                  </section>
                </div>
              ) : (
                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                    <p>
                      By using Ufuq Automation's website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
                    <p>
                      Ufuq Automation provides AI automation solutions for businesses. We reserve the right to modify or discontinue any part of our services at any time without prior notice.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">User Account</h2>
                    <p>When creating an account with us, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Notify us immediately of any unauthorized use</li>
                      <li>Be responsible for all activities under your account</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use our services for any unlawful purpose</li>
                      <li>Attempt unauthorized access to our systems</li>
                      <li>Interfere with the operation of our services</li>
                      <li>Copy or distribute our content without permission</li>
                      <li>Use our services to send spam or unsolicited messages</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                    <p>
                      All content, materials, and services available on our website are the property of Ufuq Automation and are protected by copyright and intellectual property laws.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                    <p>
                      Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be error-free or available without interruption.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                    <p>
                      Ufuq Automation shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Modifications</h2>
                    <p>
                      We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                    <p>
                      These Terms of Use are governed by and construed in accordance with the laws of the jurisdiction in which Ufuq Automation operates.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p>
                      If you have any questions about these Terms of Use, please contact us through our contact page.
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
