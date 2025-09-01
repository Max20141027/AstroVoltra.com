import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Products() {
  const products = [
    {
      id: "medisense",
      name: "Medi-sense",
      icon: "healing",
      description: "AI-powered medical diagnostics platform that assists healthcare professionals in making faster, more accurate diagnoses with advanced machine learning algorithms.",
      features: ["Real-time analysis", "HIPAA compliant", "Cloud-based"]
    },
    {
      id: "qmsai",
      name: "QMS AI",
      icon: "school",
      description: "School-specific AI platform that enhances educational management systems with intelligent analytics, automated workflows, and personalized insights.",
      features: ["Student analytics", "Automated reporting", "Multi-campus support"]
    },
    {
      id: "learnbot",
      name: "LearnBot",
      icon: "smart_toy",
      description: "Interactive AI tutor that provides personalized learning experiences for students, adapting to individual learning styles and pace.",
      features: ["Adaptive learning", "24/7 availability", "Multi-subject support"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized AI platforms that are transforming how we work, learn, and heal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="material-card material-elevation-1 text-center" data-testid={`card-product-${product.id}`}>
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons text-white text-2xl">{product.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <span className="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full" data-testid={`button-learn-more-${product.id}`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
