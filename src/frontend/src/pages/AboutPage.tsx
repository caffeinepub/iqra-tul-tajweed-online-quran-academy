import { BookOpen, Heart, Users, Award } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Dedicated to providing authentic and accessible Quran education
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>{siteContent.about.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Teaching Approach</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>{siteContent.about.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Why Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {siteContent.about.whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
