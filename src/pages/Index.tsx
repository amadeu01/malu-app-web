import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Search, Camera, Star, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import maluIcon from "@/assets/malu-icon.png";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={maluIcon} alt="malu icon" className="w-10 h-10 rounded-xl shadow-lg" />
            <h1 className="text-2xl font-bold text-malu-text">malu</h1>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Link to="/privacy">
              <Button variant="ghost" className="text-malu-text">{t('nav.privacy')}</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img src={maluIcon} alt="malu app icon" className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-xl" />
            <h1 className="text-5xl md:text-6xl font-bold text-malu-text mb-4">
              malu
            </h1>
            <p className="text-2xl md:text-3xl text-malu-text font-light mb-2">
              beautiful moments
            </p>
            <p className="text-lg text-malu-gray max-w-2xl mx-auto mb-8">
              {t('hero.tagline')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href={t('hero.appleStoreLink')}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="download" size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                {t('hero.downloadButton')}
              </Button>
            </a>
          </div>

          <p className="text-sm text-malu-gray">
            {t('hero.availability')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-malu-text mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-center text-malu-gray mb-12 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-malu-text" />
                </div>
                <CardTitle className="text-malu-text">{t('features.capture.title')}</CardTitle>
                <CardDescription className="text-malu-gray">
                  {t('features.capture.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-malu-text" />
                </div>
                <CardTitle className="text-malu-text">{t('features.search.title')}</CardTitle>
                <CardDescription className="text-malu-gray">
                  {t('features.search.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-malu-text" />
                </div>
                <CardTitle className="text-malu-text">{t('features.private.title')}</CardTitle>
                <CardDescription className="text-malu-gray">
                  {t('features.private.description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-malu-text mb-4">
            {t('preview.title')}
          </h2>
          <p className="text-lg text-malu-gray mb-12">
            {t('preview.subtitle')}
          </p>
          
          <div className="bg-gradient-soft rounded-2xl p-8 shadow-card">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-left max-w-md">
                <h3 className="text-2xl font-semibold text-malu-text mb-4">
                  {t('preview.quote')}
                </h3>
                <p className="text-malu-gray mb-4">
                  {t('preview.description1')}
                </p>
                <p className="text-malu-gray">
                  {t('preview.description2')}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-64 h-96 bg-malu-pink-light rounded-3xl shadow-soft flex items-center justify-center">
                  <Camera className="w-16 h-16 text-malu-text opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-malu-text mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-malu-gray mb-8">
            {t('cta.subtitle')}
          </p>
          <a 
            href="https://apps.apple.com/app/malu-beautiful-moments/id" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="download" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              {t('cta.button')}
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-malu-pink/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={maluIcon} alt="malu icon" className="w-8 h-8 rounded-lg shadow-md" />
            <span className="text-malu-text">malu: beautiful moments</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-malu-gray hover:text-malu-text transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <a href="mailto:hello@malu.app" className="text-malu-gray hover:text-malu-text transition-colors">
              {t('footer.contact')}
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-malu-gray">
          {t('footer.copyright')}
        </div>
      </footer>
    </div>
  );
};

export default Index;