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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Industry-recognized AI platforms that are transforming how we work, learn, and heal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card key={product.id} className="material-card material-elevation-1 text-center glass-card border-0 overflow-hidden group" data-testid={`card-product-${product.id}`}>
              <CardContent className="p-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 smooth-transition"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 smooth-transition shadow-lg">
                    <span className="material-icons text-white text-3xl">{product.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 smooth-transition">{product.name}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  <div className="space-y-3 text-gray-500 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center group-hover:text-blue-600 smooth-transition">
                        <span className="material-icons text-green-500 mr-3 text-lg">check_circle</span>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group-hover:shadow-xl smooth-transition py-3 text-lg font-semibold rounded-xl" data-testid={`button-learn-more-${product.id}`}>
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 smooth-transition">→</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
