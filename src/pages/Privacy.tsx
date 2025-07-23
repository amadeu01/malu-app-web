import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-between items-start">
            <div>
              <Link to="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('nav.backHome')}
                </Button>
              </Link>
              <h1 className="text-4xl font-bold text-malu-text mb-2">{t('privacy.title')}</h1>
              <p className="text-malu-gray">{t('privacy.lastUpdated')}</p>
            </div>
            <LanguageToggle />
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-malu-text">{t('privacy.mainTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-malu-text">
              <section>
                <h2 className="text-xl font-semibold mb-3">{t('privacy.collect.title')}</h2>
                <p className="text-malu-gray mb-3">
                  {t('privacy.collect.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>{t('privacy.collect.item1')}</li>
                  <li>{t('privacy.collect.item2')}</li>
                  <li>{t('privacy.collect.item3')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">{t('privacy.protect.title')}</h2>
                <p className="text-malu-gray mb-3">
                  {t('privacy.protect.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>{t('privacy.protect.item1')}</li>
                  <li>{t('privacy.protect.item2')}</li>
                  <li>{t('privacy.protect.item3')}</li>
                  <li>{t('privacy.protect.item4')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">{t('privacy.dontDo.title')}</h2>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>{t('privacy.dontDo.item1')}</li>
                  <li>{t('privacy.dontDo.item2')}</li>
                  <li>{t('privacy.dontDo.item3')}</li>
                  <li>{t('privacy.dontDo.item4')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">{t('privacy.rights.title')}</h2>
                <p className="text-malu-gray mb-3">
                  {t('privacy.rights.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>{t('privacy.rights.item1')}</li>
                  <li>{t('privacy.rights.item2')}</li>
                  <li>{t('privacy.rights.item3')}</li>
                  <li>{t('privacy.rights.item4')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">{t('privacy.contact.title')}</h2>
                <p className="text-malu-gray">
                  {t('privacy.contact.text')} <a href="mailto:privacy@malu.app" className="text-malu-pink hover:underline">privacy@malu.app</a>.
                </p>
              </section>

              <section className="border-t pt-6">
                <p className="text-sm text-malu-gray">
                  {t('privacy.updates')}
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;