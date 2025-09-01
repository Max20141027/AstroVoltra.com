import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
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
      details: ["hello@g-tech.ai", "careers@g-tech.ai"]
    },
    {
      icon: "phone",
      title: "Phone",
      details: ["+1 (250) 555-0123"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's explore how G-Tech can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 smooth-transition">
                    <span className="material-icons text-white text-2xl">{info.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 smooth-transition">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-lg leading-relaxed" data-testid={`text-contact-${info.title.toLowerCase().replace(' ', '-')}`}>
                        {detail}
                        {detailIndex < info.details.length - 1 && <br />}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="material-card material-elevation-1 glass-card border-0 overflow-hidden">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="h-12 text-lg border-2 focus:border-blue-500 rounded-xl"
                    data-testid="input-name"
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
                    className="h-12 text-lg border-2 focus:border-blue-500 rounded-xl"
                    data-testid="input-email"
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
                    className="h-12 text-lg border-2 focus:border-blue-500 rounded-xl"
                    data-testid="input-company"
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
                    className="resize-none text-lg border-2 focus:border-blue-500 rounded-xl"
                    data-testid="textarea-message"
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
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
