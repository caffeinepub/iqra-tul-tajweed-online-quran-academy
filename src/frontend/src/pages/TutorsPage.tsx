import { GraduationCap, Languages, BookOpen } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function TutorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Tutors
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn from qualified and experienced Quran teachers
            </p>
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {siteContent.tutors.map((tutor, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {tutor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">
                        {tutor.isPlaceholder && '(Placeholder Profile)'}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">About</h4>
                      <p className="text-sm text-muted-foreground">
                        {tutor.bio}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Experience & Qualifications
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {tutor.experience}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                        <Languages className="h-4 w-4 text-primary" />
                        Languages & Teaching Focus
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {tutor.languages}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-muted/50 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> The tutor profiles shown above are placeholders. 
                Please update the tutor information in the centralized content file 
                (frontend/src/content/siteContent.ts) with actual tutor details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
