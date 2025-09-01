import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        
        <div className="text-center">
          <div className="bg-white rounded-3xl p-10 glass-card border-0 max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't see a perfect fit? We're always interested in hearing from talented individuals.
            </p>
            <Button 
              className="px-10 py-4 text-lg font-semibold rounded-xl hover:shadow-xl smooth-transition bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              data-testid="button-submit-resume"
            >
              <span className="mr-2">📄</span>
              Submit Your Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
