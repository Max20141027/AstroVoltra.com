import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Careers() {
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

        {/* Application section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Astrovoltra?</h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We'd love to hear from you! Send us your resume and a cover letter explaining why you're excited about working with us.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="material-icons text-blue-600 text-3xl">email</span>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900">Send your application to:</h4>
                  <a 
                    href="mailto:astrovoltra.team@outlook.com"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800 underline"
                    data-testid="link-careers-email"
                  >
                    astrovoltra.team@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="text-gray-600 text-sm space-y-2">
                <p><strong>Subject:</strong> Job Application - [Position Name]</p>
                <p><strong>Include:</strong> Resume, Cover Letter, Portfolio (if applicable)</p>
                <p><strong>Response Time:</strong> We'll get back to you within 48 hours</p>
              </div>
            </div>

            <a 
              href="mailto:astrovoltra.team@outlook.com?subject=Job Application&body=Hi Astrovoltra team,%0A%0AI'm interested in applying for a position at your company.%0A%0APosition of interest: %0AExperience level: %0A%0APlease find my resume and cover letter attached.%0A%0ALooking forward to hearing from you!"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 smooth-transition"
              data-testid="button-apply-email"
            >
              <span className="material-icons mr-2">send</span>
              Send Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}