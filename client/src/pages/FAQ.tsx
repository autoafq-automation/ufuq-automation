import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function FAQ() {
  const { t, language } = useLanguage();

  const faqsEn = [
    {
      category: "General",
      questions: [
        {
          question: "What is Ufuq AI Automation?",
          answer: "Ufuq AI Automation is a leading agency specializing in artificial intelligence and automation solutions for businesses. We help companies streamline operations, reduce costs, and scale efficiently through custom AI agents, chatbots, workflow automation, and data analytics."
        },
        {
          question: "What services does Ufuq AI Automation offer?",
          answer: "We offer a comprehensive range of AI automation services including: Custom AI Agent Development, Intelligent Chatbots, Sales Automation, Email Marketing Automation, Document Processing, Voice AI Solutions, Data Analytics, Predictive Analytics, and Process Automation."
        },
        {
          question: "Who can benefit from Ufuq AI Automation services?",
          answer: "Our services benefit businesses of all sizes - from startups to enterprises. Whether you're in e-commerce, finance, healthcare, manufacturing, retail, or professional services, we have solutions tailored to your industry needs."
        },
        {
          question: "How is Ufuq AI Automation different from other providers?",
          answer: "We stand out through our customized approach, proven methodology, end-to-end service, and focus on ROI. Unlike generic solutions, we build AI systems specifically trained on your data and processes. We also provide ongoing support and continuous optimization."
        }
      ]
    },
    {
      category: "Pricing & ROI",
      questions: [
        {
          question: "How much do Ufuq AI Automation services cost?",
          answer: "Our pricing depends on several factors including project scope, complexity, timeline, team size, and specific requirements. Each project is unique, so we provide customized quotes after understanding your needs. We offer flexible payment structures including milestone-based payments, monthly subscriptions, and per-use pricing. Contact us for a free consultation and detailed proposal tailored to your budget."
        },
        {
          question: "What kind of ROI can I expect?",
          answer: "Our clients typically see 300-500% ROI in the first year. Common results include 40-70% reduction in operational costs, 20-40% increase in sales productivity, 60-90% faster response times, and 70-95% reduction in manual data entry."
        },
        {
          question: "How long until I see results?",
          answer: "The timeline for seeing results varies based on project scope and complexity. Many clients see immediate improvements in efficiency and accuracy during implementation. Full ROI typically materializes within several months to a year, depending on the scale of automation. We provide clear timelines and milestones during the proposal phase."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment structures including milestone-based payments, monthly subscriptions for ongoing services, and per-use pricing for certain solutions. Contact us to discuss options that work for your budget."
        }
      ]
    },
    {
      category: "Implementation",
      questions: [
        {
          question: "How long does implementation take?",
          answer: "Timeline depends on project scope. Small projects take 4-8 weeks, medium projects 2-4 months, and large enterprise projects 4-12 months. We provide detailed timelines during the discovery phase and keep you updated throughout."
        },
        {
          question: "Will AI automation disrupt our current operations?",
          answer: "No. We design implementations to minimize disruption. We integrate with your existing systems, conduct thorough testing before go-live, and provide comprehensive training. Many clients run pilot programs first to validate the approach."
        },
        {
          question: "What's included in a Ufuq AI Automation project?",
          answer: "Every project includes: Discovery & requirements analysis, Custom AI development, Integration with existing systems, Testing & quality assurance, Documentation & training, 90 days of post-launch support, and optional ongoing monitoring & optimization."
        },
        {
          question: "Do I need technical expertise to work with Ufuq?",
          answer: "No technical expertise required! We handle all the technical complexity. You provide business knowledge and requirements, and we translate that into working AI solutions. We also train your team on how to use and manage the systems."
        }
      ]
    },
    {
      category: "Technology",
      questions: [
        {
          question: "What AI technologies does Ufuq use?",
          answer: "We leverage cutting-edge technologies including Large Language Models (LLMs), Natural Language Processing (NLP), Computer Vision, Machine Learning, Deep Learning, and Reinforcement Learning. We select the best technology for each specific use case."
        },
        {
          question: "Can Ufuq AI integrate with our existing systems?",
          answer: "Yes! We integrate with all major platforms including CRM systems (Salesforce, HubSpot), ERP systems, email platforms, databases, e-commerce platforms, and custom applications. We build robust APIs and connectors for seamless integration."
        },
        {
          question: "Is our data secure with Ufuq AI Automation?",
          answer: "Absolutely. We implement end-to-end encryption, maintain SOC 2 compliance, follow GDPR regulations, ensure HIPAA compliance for healthcare, use role-based access controls, and maintain complete audit trails. Your data security is our top priority."
        },
        {
          question: "Will the AI continue to improve over time?",
          answer: "Yes! Our AI systems use machine learning to continuously improve from every interaction. We also provide ongoing optimization services, regular model retraining, and feature enhancements to ensure your AI gets smarter and more effective over time."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          question: "What kind of support does Ufuq provide?",
          answer: "We provide comprehensive support including 90 days of post-launch support with every project, 24/7 monitoring for critical systems, dedicated support team, regular performance reviews, and optional ongoing optimization packages."
        },
        {
          question: "What happens if something goes wrong?",
          answer: "We have robust monitoring and alerting systems that detect issues immediately. Our support team responds quickly to resolve problems. We also maintain fallback mechanisms and have contingency plans to ensure business continuity."
        },
        {
          question: "Can we make changes after implementation?",
          answer: "Yes! We understand that business needs evolve. We offer ongoing optimization services where we can add features, adjust workflows, retrain models, and scale systems as your needs change."
        },
        {
          question: "How do we get started with Ufuq AI Automation?",
          answer: "Getting started is easy! Contact us for a free consultation where we'll discuss your needs and challenges. We'll then provide a detailed proposal with timeline and pricing. Many clients start with a pilot project to validate the approach before full implementation."
        }
      ]
    }
  ];

  const faqsAr = [
    {
      category: "عام",
      questions: [
        {
          question: "ما هي أفق للأتمتة بالذكاء الاصطناعي؟",
          answer: "أفق للأتمتة هي وكالة رائدة متخصصة في حلول الذكاء الاصطناعي والأتمتة للشركات. نساعد الشركات على تبسيط العمليات وتقليل التكاليف والتوسع بكفاءة من خلال وكلاء الذكاء الاصطناعي المخصصين وروبوتات الدردشة وأتمتة سير العمل وتحليل البيانات."
        },
        {
          question: "ما هي الخدمات التي تقدمها أفق للأتمتة؟",
          answer: "نقدم مجموعة شاملة من خدمات أتمتة الذكاء الاصطناعي بما في ذلك: تطوير وكلاء الذكاء الاصطناعي المخصصين، روبوتات الدردشة الذكية، أتمتة المبيعات، أتمتة التسويق عبر البريد الإلكتروني، معالجة المستندات، حلول الذكاء الاصطناعي الصوتي، تحليل البيانات، التحليلات التنبؤية، وأتمتة العمليات."
        },
        {
          question: "من يمكنه الاستفادة من خدمات أفق للأتمتة؟",
          answer: "تستفيد خدماتنا الشركات بجميع أحجامها - من الشركات الناشئة إلى المؤسسات الكبيرة. سواء كنت في التجارة الإلكترونية أو التمويل أو الرعاية الصحية أو التصنيع أو التجزئة أو الخدمات المهنية، لدينا حلول مصممة خصيصاً لاحتياجات صناعتك."
        },
        {
          question: "كيف تختلف أفق للأتمتة عن مقدمي الخدمات الآخرين؟",
          answer: "نتميز من خلال نهجنا المخصص ومنهجيتنا المثبتة والخدمة الشاملة والتركيز على العائد على الاستثمار. على عكس الحلول العامة، نبني أنظمة ذكاء اصطناعي مدربة خصيصاً على بياناتك وعملياتك. كما نقدم دعماً مستمراً وتحسيناً مستمراً."
        }
      ]
    },
    {
      category: "التسعير والعائد على الاستثمار",
      questions: [
        {
          question: "كم تكلف خدمات أفق للأتمتة؟",
          answer: "تعتمد أسعارنا على عدة عوامل بما في ذلك نطاق المشروع والتعقيد والجدول الزمني وحجم الفريق والمتطلبات المحددة. كل مشروع فريد من نوعه، لذلك نقدم عروض أسعار مخصصة بعد فهم احتياجاتك. نقدم هياكل دفع مرنة بما في ذلك الدفعات القائمة على المعالم والاشتراكات الشهرية والتسعير حسب الاستخدام. اتصل بنا للحصول على استشارة مجانية واقتراح مفصل يناسب ميزانيتك."
        },
        {
          question: "ما نوع العائد على الاستثمار الذي يمكنني توقعه؟",
          answer: "عادةً ما يرى عملاؤنا عائداً على الاستثمار بنسبة 300-500٪ في السنة الأولى. تشمل النتائج الشائعة انخفاضاً بنسبة 40-70٪ في التكاليف التشغيلية، وزيادة بنسبة 20-40٪ في إنتاجية المبيعات، وأوقات استجابة أسرع بنسبة 60-90٪، وانخفاض بنسبة 70-95٪ في إدخال البيانات يدوياً."
        },
        {
          question: "كم من الوقت حتى أرى النتائج؟",
          answer: "يختلف الجدول الزمني لرؤية النتائج بناءً على نطاق المشروع وتعقيده. يرى العديد من العملاء تحسينات فورية في الكفاءة والدقة أثناء التنفيذ. عادةً ما يتحقق العائد الكامل على الاستثمار في غضون عدة أشهر إلى سنة، اعتماداً على نطاق الأتمتة. نقدم جداول زمنية ومعالم واضحة خلال مرحلة الاقتراح."
        },
        {
          question: "هل تقدمون خطط دفع؟",
          answer: "نعم، نقدم هياكل دفع مرنة بما في ذلك الدفعات القائمة على المعالم، والاشتراكات الشهرية للخدمات المستمرة، والتسعير حسب الاستخدام لحلول معينة. اتصل بنا لمناقشة الخيارات التي تناسب ميزانيتك."
        }
      ]
    },
    {
      category: "التنفيذ",
      questions: [
        {
          question: "كم من الوقت يستغرق التنفيذ؟",
          answer: "يعتمد الجدول الزمني على نطاق المشروع. تستغرق المشاريع الصغيرة 4-8 أسابيع، والمشاريع المتوسطة 2-4 أشهر، والمشاريع الكبيرة للمؤسسات 4-12 شهراً. نقدم جداول زمنية مفصلة خلال مرحلة الاكتشاف ونبقيك على اطلاع طوال الوقت."
        },
        {
          question: "هل ستعطل أتمتة الذكاء الاصطناعي عملياتنا الحالية؟",
          answer: "لا. نصمم التطبيقات لتقليل التعطيل. نتكامل مع أنظمتك الحالية، ونجري اختبارات شاملة قبل الإطلاق، ونقدم تدريباً شاملاً. يقوم العديد من العملاء بتشغيل برامج تجريبية أولاً للتحقق من النهج."
        },
        {
          question: "ما الذي يتضمنه مشروع أفق للأتمتة؟",
          answer: "يتضمن كل مشروع: تحليل الاكتشاف والمتطلبات، تطوير الذكاء الاصطناعي المخصص، التكامل مع الأنظمة الحالية، الاختبار وضمان الجودة، التوثيق والتدريب، 90 يوماً من الدعم بعد الإطلاق، والمراقبة والتحسين المستمر الاختياري."
        },
        {
          question: "هل أحتاج إلى خبرة تقنية للعمل مع أفق؟",
          answer: "لا حاجة لخبرة تقنية! نحن نتعامل مع كل التعقيدات التقنية. أنت تقدم المعرفة التجارية والمتطلبات، ونحن نترجم ذلك إلى حلول ذكاء اصطناعي عملية. كما ندرب فريقك على كيفية استخدام وإدارة الأنظمة."
        }
      ]
    },
    {
      category: "التكنولوجيا",
      questions: [
        {
          question: "ما هي تقنيات الذكاء الاصطناعي التي تستخدمها أفق؟",
          answer: "نستفيد من التقنيات المتطورة بما في ذلك نماذج اللغة الكبيرة (LLMs)، معالجة اللغة الطبيعية (NLP)، رؤية الكمبيوتر، التعلم الآلي، التعلم العميق، والتعلم المعزز. نختار أفضل تقنية لكل حالة استخدام محددة."
        },
        {
          question: "هل يمكن لأفق التكامل مع أنظمتنا الحالية؟",
          answer: "نعم! نتكامل مع جميع المنصات الرئيسية بما في ذلك أنظمة CRM (Salesforce، HubSpot)، أنظمة ERP، منصات البريد الإلكتروني، قواعد البيانات، منصات التجارة الإلكترونية، والتطبيقات المخصصة. نبني واجهات برمجة تطبيقات وموصلات قوية للتكامل السلس."
        },
        {
          question: "هل بياناتنا آمنة مع أفق للأتمتة؟",
          answer: "بالتأكيد. نطبق التشفير الشامل، ونحافظ على امتثال SOC 2، ونتبع لوائح GDPR، ونضمن امتثال HIPAA للرعاية الصحية، ونستخدم ضوابط الوصول القائمة على الأدوار، ونحتفظ بسجلات تدقيق كاملة. أمان بياناتك هو أولويتنا القصوى."
        },
        {
          question: "هل سيستمر الذكاء الاصطناعي في التحسن بمرور الوقت؟",
          answer: "نعم! تستخدم أنظمة الذكاء الاصطناعي لدينا التعلم الآلي للتحسين المستمر من كل تفاعل. نقدم أيضاً خدمات التحسين المستمر، وإعادة تدريب النماذج بانتظام، وتحسينات الميزات لضمان أن يصبح ذكاءك الاصطناعي أكثر ذكاءً وفعالية بمرور الوقت."
        }
      ]
    },
    {
      category: "الدعم",
      questions: [
        {
          question: "ما نوع الدعم الذي تقدمه أفق؟",
          answer: "نقدم دعماً شاملاً بما في ذلك 90 يوماً من الدعم بعد الإطلاق مع كل مشروع، ومراقبة على مدار الساعة طوال أيام الأسبوع للأنظمة الحرجة، وفريق دعم مخصص، ومراجعات أداء منتظمة، وحزم تحسين مستمرة اختيارية."
        },
        {
          question: "ماذا يحدث إذا حدث خطأ ما؟",
          answer: "لدينا أنظمة مراقبة وتنبيه قوية تكتشف المشكلات على الفور. يستجيب فريق الدعم لدينا بسرعة لحل المشكلات. نحتفظ أيضاً بآليات احتياطية ولدينا خطط طوارئ لضمان استمرارية العمل."
        },
        {
          question: "هل يمكننا إجراء تغييرات بعد التنفيذ؟",
          answer: "نعم! نحن ندرك أن احتياجات العمل تتطور. نقدم خدمات التحسين المستمر حيث يمكننا إضافة ميزات وضبط سير العمل وإعادة تدريب النماذج وتوسيع نطاق الأنظمة مع تغير احتياجاتك."
        },
        {
          question: "كيف نبدأ مع أفق للأتمتة؟",
          answer: "البدء سهل! اتصل بنا للحصول على استشارة مجانية حيث سنناقش احتياجاتك وتحدياتك. سنقدم بعد ذلك اقتراحاً مفصلاً مع الجدول الزمني والتسعير. يبدأ العديد من العملاء بمشروع تجريبي للتحقق من النهج قبل التنفيذ الكامل."
        }
      ]
    }
  ];

  const faqs = language === 'ar' ? faqsAr : faqsEn;

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        description={language === 'ar' ? 'إجابات على الأسئلة الشائعة حول خدمات أفق للأتمتة بالذكاء الاصطناعي' : 'Answers to common questions about Ufuq AI Automation services'}
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
            </Badge>
            <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ar' 
                ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدمات أفق للأتمتة بالذكاء الاصطناعي'
                : 'Answers to the most common questions about Ufuq AI Automation services'
              }
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className={`text-2xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${sectionIndex}-${faqIndex}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className={`text-left hover:no-underline ${language === 'ar' ? 'font-arabic' : ''}`}>
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className={`text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-16 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className={`text-2xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'لم تجد إجابة لسؤالك؟' : "Didn't find your answer?"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'ar' 
                  ? 'فريقنا هنا للمساعدة. تواصل معنا وسنجيب على جميع أسئلتك.'
                  : "Our team is here to help. Contact us and we'll answer all your questions."
                }
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    <MessageCircle className="h-5 w-5" />
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="mailto:info@ufuq-ai.com">
                    <Mail className="h-5 w-5" />
                    {language === 'ar' ? 'أرسل بريداً إلكترونياً' : 'Send Email'}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
