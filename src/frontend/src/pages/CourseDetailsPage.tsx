import { BookOpen, Users, Clock, Target } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function CourseDetailsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Course Details
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive Islamic education programs designed for all levels
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {siteContent.courses.map((course, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/5 px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-card-foreground">
                      {course.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Overview
                    </h3>
                    <p className="text-muted-foreground">
                      {course.overview}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Who It's For
                    </h3>
                    <p className="text-muted-foreground">
                      {course.whoItsFor}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      What You'll Learn
                    </h3>
                    <ul className="space-y-2">
                      {course.whatYouLearn.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
