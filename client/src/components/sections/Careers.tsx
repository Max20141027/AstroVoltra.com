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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for innovative AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roles.map((role) => (
            <Card key={role.id} className="material-card material-elevation-1 text-center bg-white" data-testid={`card-role-${role.id}`}>
              <CardContent className="p-6">
                <span className="material-icons text-blue-600 text-4xl mb-4">{role.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <Badge className={`${role.typeColor} text-xs`} data-testid={`badge-${role.id}-type`}>
                  {role.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don't see a perfect fit? We're always interested in hearing from talented individuals.
          </p>
          <Button 
            className="bg-accent text-accent-foreground hover:shadow-lg smooth-transition"
            data-testid="button-submit-resume"
          >
            Submit Your Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
