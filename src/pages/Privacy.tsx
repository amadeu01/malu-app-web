import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-malu-text mb-2">Privacy Policy</h1>
            <p className="text-malu-gray">Last updated: July 2025</p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-malu-text">Your Privacy Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-malu-text">
              <section>
                <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-malu-gray mb-3">
                  malu is designed to be your personal, private space for beautiful moments. We collect minimal information to provide you with the best experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>The moments, photos, and memories you choose to save in the app</li>
                  <li>Basic account information (email) if you choose to create an account for syncing</li>
                  <li>App usage analytics to improve performance (anonymized)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">How We Protect Your Data</h2>
                <p className="text-malu-gray mb-3">
                  Your moments are precious to you, and they're precious to us too:
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>All your personal moments are encrypted and stored securely</li>
                  <li>We never share your personal content with third parties</li>
                  <li>You control your data - export or delete it anytime</li>
                  <li>Local storage option available for complete privacy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">What We Don't Do</h2>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>We don't sell your data to advertisers</li>
                  <li>We don't scan your content for marketing purposes</li>
                  <li>We don't share your moments with social media platforms</li>
                  <li>We don't track you across other websites or apps</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                <p className="text-malu-gray mb-3">
                  You have complete control over your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-malu-gray">
                  <li>Request a copy of your data at any time</li>
                  <li>Delete your account and all associated data</li>
                  <li>Opt out of analytics collection</li>
                  <li>Contact us with any privacy concerns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <p className="text-malu-gray">
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please contact us at <a href="mailto:privacy@malu.app" className="text-malu-pink hover:underline">privacy@malu.app</a>.
                </p>
              </section>

              <section className="border-t pt-6">
                <p className="text-sm text-malu-gray">
                  This privacy policy may be updated from time to time. We will notify you of any significant changes 
                  through the app or via email if you have provided one.
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