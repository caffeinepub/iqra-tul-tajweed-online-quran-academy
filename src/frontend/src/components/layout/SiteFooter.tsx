import { Heart, ExternalLink } from 'lucide-react';
import { siteContent } from '../../content/siteContent';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/generated/academy-logo.dim_512x512.png" 
              alt="Iqra-Tul-Tajweed Logo" 
              className="h-8 w-8 rounded-lg"
            />
            <span className="font-semibold text-foreground">
              Iqra-Tul-Tajweed Online Quran Academy
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Learn Quran with qualified tutors. Flexible timings, personalized attention, and authentic Islamic education.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a 
              href={siteContent.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
            >
              {siteContent.siteUrl.replace('https://', '')}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026. Built with <Heart className="inline h-4 w-4 text-rose-500 fill-rose-500" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
