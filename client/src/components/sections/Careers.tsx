import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export default function Careers() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleResumeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send application to backend (now using Resend)
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData)
      });
      
      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: "Thank you for your interest in G-Tech! We'll review your application and contact you within 48 hours.",
        });
        setResumeData({ name: "", email: "", phone: "", position: "", experience: "", coverLetter: "" });
      } else {
        throw new Error('Failed to submit application');
      }
      
    } catch (error) {
      console.error('Application sending failed:', error);
      
      // Fallback: Open default email client
      const emailBody = `Name: ${resumeData.name}%0D%0AEmail: ${resumeData.email}%0D%0APosition: ${resumeData.position}%0D%0AExperience: ${resumeData.experience}%0D%0A%0D%0ACover Letter:%0D%0A${resumeData.coverLetter}`;
      window.open(`mailto:gtech.service@outlook.com?subject=Job Application - ${resumeData.position}&body=${emailBody}`, '_blank');
      
      toast({
        title: "Email service unavailable",
        description: "We've opened your email client to send your application directly to gtech.service@outlook.com",
      });
      setResumeData({ name: "", email: "", phone: "", position: "", experience: "", coverLetter: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setResumeData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const roles = [
    {
      id: "software-engineers",
      title: "Software Engineers",
      icon: "code",
      description: "Build scalable AI platforms with cutting-edge technology stacks",
      type: "Remote Friendly",
      typeColor: "bg-blue-100 text-blue-800"
    },
    {
      id: "ai-researchers",
      title: "AI Researchers",
      icon: "psychology",
      description: "Research and develop next-generation machine learning algorithms",
      type: "Full-time",
      typeColor: "bg-green-100 text-green-800"
    },
    {
      id: "ux-designers",
      title: "UX Designers",
      icon: "palette",
      description: "Design intuitive interfaces for complex AI-powered applications",
      type: "Contract",
      typeColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Join Our Team</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're always looking for talented individuals who share our passion for innovative AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {roles.map((role) => (
            <Card key={role.id} className="material-card material-elevation-1 text-center glass-card border-0 overflow-hidden group" data-testid={`card-role-${role.id}`}>
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 smooth-transition"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition shadow-lg">
                    <span className="material-icons text-white text-3xl">{role.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 smooth-transition">{role.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{role.description}</p>
                  <Badge className={`${role.typeColor} text-sm font-semibold px-4 py-2`} data-testid={`badge-${role.id}-type`}>
                    {role.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-3xl p-10 glass-card border-0 max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't see a perfect fit? We're always interested in hearing from talented individuals.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="px-10 py-4 text-lg font-semibold rounded-xl hover:shadow-xl smooth-transition bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  data-testid="button-submit-resume"
                >
                  <span className="mr-2">📄</span>
                  Submit Your Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center mb-2">Join G-Tech</DialogTitle>
                  <p className="text-center text-gray-600">Tell us about yourself and let's start a conversation</p>
                </DialogHeader>
                <form onSubmit={handleResumeSubmit} className="space-y-6 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="resume-name" className="text-lg font-semibold">Name *</Label>
                      <Input
                        id="resume-name"
                        name="name"
                        required
                        value={resumeData.name}
                        onChange={handleResumeChange}
                        placeholder="Your full name"
                        className="h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resume-email" className="text-lg font-semibold">Email *</Label>
                      <Input
                        id="resume-email"
                        name="email"
                        type="email"
                        required
                        value={resumeData.email}
                        onChange={handleResumeChange}
                        placeholder="your.email@example.com"
                        className="h-12 text-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="resume-phone" className="text-lg font-semibold">Phone</Label>
                      <Input
                        id="resume-phone"
                        name="phone"
                        type="tel"
                        value={resumeData.phone}
                        onChange={handleResumeChange}
                        placeholder="Your phone number"
                        className="h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resume-position" className="text-lg font-semibold">Interested Position</Label>
                      <select
                        id="resume-position"
                        name="position"
                        value={resumeData.position}
                        onChange={handleResumeChange}
                        className="h-12 text-lg w-full px-3 py-2 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select a position</option>
                        <option value="software-engineer">Software Engineer</option>
                        <option value="ai-researcher">AI Researcher</option>
                        <option value="ux-designer">UX Designer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resume-experience" className="text-lg font-semibold">Years of Experience</Label>
                    <select
                      id="resume-experience"
                      name="experience"
                      value={resumeData.experience}
                      onChange={handleResumeChange}
                      className="h-12 text-lg w-full px-3 py-2 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resume-cover" className="text-lg font-semibold">Cover Letter *</Label>
                    <Textarea
                      id="resume-cover"
                      name="coverLetter"
                      required
                      rows={6}
                      value={resumeData.coverLetter}
                      onChange={handleResumeChange}
                      placeholder="Tell us why you're interested in G-Tech and what makes you a great fit..."
                      className="text-lg resize-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resume-file" className="text-lg font-semibold">Resume/CV</Label>
                    <Input
                      id="resume-file"
                      name="file"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="h-12 text-lg cursor-pointer"
                    />
                    <p className="text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX (max 5MB)</p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-4 text-lg font-semibold rounded-xl" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    {!isSubmitting && <span className="ml-2">🚀</span>}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
