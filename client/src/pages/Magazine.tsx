import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { MagazineArticle } from '@shared/schema';

export default function Magazine() {
  const { t, language, isRTL } = useLanguage();

  const { data: articles, isLoading } = useQuery<MagazineArticle[]>({
    queryKey: ['/api/magazine'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8 space-y-4">
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={t('magazine.title')}
        description={t('magazine.subtitle')}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-magazine">
            {t('nav.magazine')}
          </Badge>
          <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('magazine.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('magazine.subtitle')}
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {articles?.map((article) => (
            <Card key={article.id} className="hover-elevate transition-all duration-300" data-testid={`card-magazine-${article.id}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {article.imageUrl && (
                    <div className="md:w-64 h-48 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={article.imageUrl} 
                        alt={language === 'ar' ? article.titleAr : article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime} {t('magazine.readTime')}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                      </div>
                    </div>

                    <h2 className={`font-display text-2xl md:text-3xl font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {language === 'ar' ? article.titleAr : article.title}
                    </h2>

                    <p className="text-muted-foreground line-clamp-3">
                      {language === 'ar' ? article.excerptAr : article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">
                        {t('blog.author')} {language === 'ar' ? article.authorAr : article.author}
                      </span>
                      <Link href={`/magazine/${article.slug}`} data-testid={`link-magazine-${article.slug}`}>
                        <Button variant="ghost" className="gap-1">
                          {t('magazine.readMore')}
                          <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(!articles || articles.length === 0) && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {language === 'ar' ? 'لا توجد مقالات حالياً' : 'No articles available at the moment'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
