import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { Star, Building2, User } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { BusinessReview } from '@shared/schema';

export default function BusinessReviews() {
  const { t, language } = useLanguage();

  const { data: reviews, isLoading } = useQuery<BusinessReview[]>({
    queryKey: ['/api/reviews'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-20 bg-muted rounded" />
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

  const renderStars = (rating: string) => {
    const numRating = parseInt(rating);
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < numRating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={t('reviews.title')}
        description={t('reviews.subtitle')}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-reviews">
            {t('nav.reviews')}
          </Badge>
          <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('reviews.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews?.map((review) => (
            <Card key={review.id} className="hover-elevate transition-all duration-300" data-testid={`card-review-${review.id}`}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  {review.companyLogo ? (
                    <img 
                      src={review.companyLogo} 
                      alt={language === 'ar' ? review.companyNameAr : review.companyName}
                      className="h-10 object-contain"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">
                        {language === 'ar' ? review.companyNameAr : review.companyName}
                      </span>
                    </div>
                  )}
                  {renderStars(review.rating)}
                </div>

                <blockquote className="text-muted-foreground italic border-l-2 border-primary pl-4">
                  "{language === 'ar' ? review.testimonialAr : review.testimonial}"
                </blockquote>

                <div className="flex items-center gap-3 pt-2">
                  {review.clientPhoto ? (
                    <img 
                      src={review.clientPhoto} 
                      alt={language === 'ar' ? review.clientNameAr : review.clientName}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm">
                      {language === 'ar' ? review.clientNameAr : review.clientName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {language === 'ar' ? review.positionAr : review.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(!reviews || reviews.length === 0) && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {language === 'ar' ? 'لا توجد تقييمات حالياً' : 'No reviews available at the moment'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
