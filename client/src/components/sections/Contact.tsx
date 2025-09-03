import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to backend (now using Resend)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting Astrovoltra! We'll respond to your inquiry within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Fallback: Open default email client
      const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.open(`mailto:astrovoltra.team@outlook.com?subject=Contact Form Inquiry&body=${emailBody}`, '_blank');
      
      toast({
        title: "Email service unavailable",
        description: "We've opened your email client to send the message directly to astrovoltra.team@outlook.com",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: "location_on",
      title: "Headquarters",
      details: ["Victoria, Vancouver Island", "British Columbia, Canada"]
    },
    {
      icon: "email",
      title: "Email",
      details: ["astrovoltra.team@outlook.com"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-indigo-50/40"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl float-gentle"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl" style={{animationDelay: '3s'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 slide-up-fade">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's explore how Astrovoltra can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-6 group interactive-card slide-up-fade" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 smooth-transition glow-animation">
                    <span className="material-icons text-white text-2xl">{info.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 smooth-transition">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-gray-600 text-lg leading-relaxed" data-testid={`text-contact-${info.title.toLowerCase().replace(' ', '-')}`}>
                        {info.title === "Email" ? (
                          <a 
                            href={`mailto:${detail}`}
                            className="text-blue-600 hover:text-blue-800 underline cursor-pointer smooth-transition"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                        {detailIndex < info.details.length - 1 && <br />}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="material-card material-elevation-1 glass-premium border-0 overflow-hidden relative z-10 interactive-card slide-up-fade" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-10 relative z-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center shimmer-effect">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-30">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold text-gray-700">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-12 text-lg border-2 focus:border-blue-500 rounded-xl relative z-50"
                    data-testid="input-name"
                    style={{pointerEvents: 'auto'}}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-semibold text-gray-700">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="h-12 text-lg border-2 focus:border-blue-500 rounded-xl relative z-50"
                    data-testid="input-email"
                    style={{pointerEvents: 'auto'}}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-lg font-semibold text-gray-700">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="h-12 text-lg border-2 focus:border-blue-500 rounded-xl relative z-50"
                    data-testid="input-company"
                    style={{pointerEvents: 'auto'}}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-semibold text-gray-700">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    className="resize-none text-lg border-2 focus:border-blue-500 rounded-xl relative z-50"
                    data-testid="textarea-message"
                    style={{pointerEvents: 'auto'}}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-4 text-lg font-semibold rounded-xl hover:shadow-xl smooth-transition" 
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <span className="ml-2">✨</span>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl -z-10"></div>
    </section>
  );
}
