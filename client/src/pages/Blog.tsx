import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { BlogPost } from '@shared/schema';

export default function Blog() {
  const { t, language, isRTL } = useLanguage();

  const { data: allPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  // Filter posts by current language
  console.log('Current language:', language);
  console.log('All posts:', allPosts?.map(p => ({ title: p.title, language: p.language })));
  const posts = allPosts?.filter(post => post.language === language) || [];
  console.log('Filtered posts:', posts.length);

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-muted rounded-t-md" />
                  <CardContent className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={t('blog.title')}
        description={t('blog.subtitle')}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-blog">
            {t('nav.blog')}
          </Badge>
          <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('blog.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts?.map((post) => (
            <Card key={post.id} className="hover-elevate transition-all duration-300 overflow-hidden" data-testid={`card-blog-${post.id}`}>
              {post.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime} {t('blog.readTime')}</span>
                  </div>
                </div>

                <h2 className={`font-display text-xl font-semibold line-clamp-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} data-testid={`link-blog-${post.slug}`}>
                    <Button variant="ghost" size="sm" className="gap-1">
                      {t('blog.readMore')}
                      <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(!posts || posts.length === 0) && !isLoading && (
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
