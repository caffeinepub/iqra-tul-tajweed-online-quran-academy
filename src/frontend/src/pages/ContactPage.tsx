import { Mail, Phone, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { siteContent } from '../content/siteContent';
import { useState, FormEvent } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteContent.contact.email}?subject=${encodeURIComponent(
      formData.subject || 'Inquiry from Website'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for any inquiries or to start your learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. We're here to help you begin your Quran learning journey.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp Contacts */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <SiWhatsapp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp / Phone</h3>
                    <p className="text-sm text-muted-foreground">Contact our team directly</p>
                  </div>
                </div>
                <div className="ml-16 space-y-3">
                  {siteContent.contact.whatsappContacts.map((contact, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <p className="font-medium text-foreground">{contact.name}</p>
                      <a
                        href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.number}
                      </a>
                      {contact.isPlaceholder && (
                        <p className="text-xs text-muted-foreground italic mt-1">
                          (Placeholder contact)
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  This will open your email client with a pre-filled message
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
