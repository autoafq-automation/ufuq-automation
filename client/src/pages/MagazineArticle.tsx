import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Link, useParams } from 'wouter';
import { Clock, Calendar, ArrowLeft, User } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { MagazineArticle } from '@shared/schema';

export default function MagazineArticlePage() {
  const { t, language, isRTL } = useLanguage();
  const params = useParams<{ slug: string }>();

  const { data: article, isLoading } = useQuery<MagazineArticle>({
    queryKey: ['/api/magazine', params.slug],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
            <div className="h-12 bg-muted rounded w-3/4" />
            <div className="h-64 bg-muted rounded" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'المقال غير موجود' : 'Article not found'}
            </h1>
            <Link href="/magazine" data-testid="link-back-to-magazine">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                {t('magazine.back')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      {article && (
        <SEO 
          title={language === 'ar' ? article.titleAr : article.title}
          description={language === 'ar' ? article.excerptAr : article.excerpt}
          ogType="article"
        />
      )}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/magazine" data-testid="link-back-to-magazine">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              {t('magazine.back')}
            </Button>
          </Link>

          <article className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} {t('magazine.readTime')}</span>
                </div>
              </div>

              <h1 className={`font-display text-4xl md:text-5xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? article.titleAr : article.title}
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{language === 'ar' ? article.authorAr : article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                </div>
              </div>
            </div>

            {article.imageUrl && (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={language === 'ar' ? article.titleAr : article.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-lg leading-relaxed whitespace-pre-wrap">
                {language === 'ar' ? article.contentAr : article.content}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
