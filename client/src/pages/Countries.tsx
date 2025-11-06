import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { SEO } from '@/components/SEO';
import { useState, useMemo } from 'react';
import { Search, Globe } from 'lucide-react';
import { countries } from '@/data/countries';

export default function Countries() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(countries.map(c => language === 'ar' ? c.regionAr : c.region)));
    return uniqueRegions.sort();
  }, [language]);

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const name = language === 'ar' ? country.nameAr : country.name;
      const region = language === 'ar' ? country.regionAr : country.region;
      
      const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === 'all' || region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion, language]);

  const groupedByRegion = useMemo(() => {
    const groups = new Map<string, typeof countries>();
    
    filteredCountries.forEach(country => {
      const region = language === 'ar' ? country.regionAr : country.region;
      if (!groups.has(region)) {
        groups.set(region, []);
      }
      groups.get(region)!.push(country);
    });
    
    return Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filteredCountries, language]);

  return (
    <div className="min-h-screen py-16">
      <SEO 
        title={t('countries.title')}
        description={t('countries.subtitle')}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-countries">
            {t('nav.countries')}
          </Badge>
          <h1 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('countries.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('countries.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground ${language === 'ar' ? 'right-3' : 'left-3'}`} />
            <Input
              type="search"
              placeholder={t('countries.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`${language === 'ar' ? 'pr-10' : 'pl-10'}`}
              data-testid="input-search-countries"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <Badge
              variant={selectedRegion === 'all' ? 'default' : 'outline'}
              className="cursor-pointer hover-elevate"
              onClick={() => setSelectedRegion('all')}
              data-testid="badge-region-all"
            >
              {t('countries.all')}
            </Badge>
            {regions.map((region) => (
              <Badge
                key={region}
                variant={selectedRegion === region ? 'default' : 'outline'}
                className="cursor-pointer hover-elevate"
                onClick={() => setSelectedRegion(region)}
                data-testid={`badge-region-${region}`}
              >
                {region}
              </Badge>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {groupedByRegion.map(([region, regionCountries]) => (
            <div key={region} className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className={`font-display text-2xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {region}
                </h2>
                <Badge variant="secondary">
                  {regionCountries.length} {t('countries.count')}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {regionCountries.map((country) => (
                  <Card key={country.code} className="hover-elevate transition-all duration-300" data-testid={`card-country-${country.code}`}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">
                          {language === 'ar' ? country.nameAr : country.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {country.code}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {language === 'ar' ? 'لم يتم العثور على دول' : 'No countries found'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
