import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: "medisense",
      name: "Medi-sense",
      icon: "healing",
      description: "AI-powered medical diagnostics platform that assists healthcare professionals in making faster, more accurate diagnoses with advanced machine learning algorithms.",
      features: ["Real-time analysis", "HIPAA compliant", "Cloud-based"],
      detailedDescription: "Medi-sense revolutionizes healthcare diagnostics by leveraging cutting-edge AI algorithms to analyze medical data with unprecedented accuracy. Our platform integrates seamlessly with existing hospital systems, providing real-time diagnostic assistance to healthcare professionals.",
      keyBenefits: [
        "Reduces diagnostic time by up to 60%",
        "Increases diagnostic accuracy to 98.5%",
        "Integrates with major EHR systems",
        "24/7 AI-powered support",
        "Continuous learning from new cases"
      ],
      technologies: ["Deep Learning", "Computer Vision", "Natural Language Processing", "Cloud Computing"]
    },
    {
      id: "qmsai",
      name: "QMS AI",
      icon: "school",
      description: "School-specific AI platform that enhances educational management systems with intelligent analytics, automated workflows, and personalized insights.",
      features: ["Student analytics", "Automated reporting", "Multi-campus support"],
      detailedDescription: "QMS AI transforms educational administration by providing intelligent insights into student performance, resource allocation, and operational efficiency. Our platform helps educational institutions make data-driven decisions that improve learning outcomes.",
      keyBenefits: [
        "Improves student success rates by 35%",
        "Reduces administrative workload by 50%",
        "Provides predictive analytics for at-risk students",
        "Automates routine administrative tasks",
        "Generates comprehensive performance reports"
      ],
      technologies: ["Machine Learning", "Data Analytics", "Predictive Modeling", "API Integration"]
    },
    {
      id: "learnbot",
      name: "LearnBot",
      icon: "smart_toy",
      description: "Interactive AI tutor that provides personalized learning experiences for students, adapting to individual learning styles and pace.",
      features: ["Adaptive learning", "24/7 availability", "Multi-subject support"],
      detailedDescription: "LearnBot is an intelligent tutoring system that provides personalized education support to students of all ages. Using advanced AI algorithms, it adapts to each student's learning style, pace, and preferences to maximize learning effectiveness.",
      keyBenefits: [
        "Increases learning retention by 40%",
        "Available 24/7 for instant support",
        "Supports over 50 subjects",
        "Personalizes content to learning style",
        "Tracks progress with detailed analytics"
      ],
      technologies: ["Natural Language Processing", "Adaptive Learning Algorithms", "Knowledge Graphs", "Conversational AI"]
    },
    {
      id: "your-next-app",
      name: "Your Next App!",
      icon: "rocket_launch",
      description: "Ready to build something amazing? Let's discuss your custom AI solution and bring your vision to life with our expert development team.",
      features: ["Custom development", "AI integration", "Full-stack solutions"],
      isCustomApp: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Notable Products</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Industry-recognized AI platforms that are transforming how we work, learn, and heal.
          </p>
        </div>
        
        {/* Success Stats Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 mx-auto max-w-2xl shadow-2xl">
            <div className="text-white">
              <div className="text-5xl lg:text-6xl font-bold mb-4 text-shadow">
                100+
              </div>
              <div className="text-xl lg:text-2xl font-semibold mb-2">
                Apps Created for Clients
              </div>
              <div className="text-blue-100 text-lg">
                Delivering innovative AI solutions across healthcare, education, and enterprise sectors
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                  {product.isCustomApp ? (
                    <Link href="/pricing">
                      <Button className="w-full group-hover:shadow-xl smooth-transition py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white" data-testid={`button-learn-more-${product.id}`}>
                        Learn More
                        <span className="ml-2 group-hover:translate-x-1 smooth-transition">→</span>
                      </Button>
                    </Link>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full group-hover:shadow-xl smooth-transition py-3 text-lg font-semibold rounded-xl" data-testid={`button-learn-more-${product.id}`}>
                          Learn More
                          <span className="ml-2 group-hover:translate-x-1 smooth-transition">→</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-4 text-3xl">
                            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                              <span className="material-icons text-white text-2xl">{product.icon}</span>
                            </div>
                            {product.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 pt-4">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {product.detailedDescription}
                          </p>
                          
                          {product.keyBenefits && (
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                              <ul className="space-y-2">
                                {product.keyBenefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start gap-3">
                                    <span className="material-icons text-green-500 text-lg mt-0.5">check_circle</span>
                                    <span className="text-gray-700">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {product.technologies && (
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                              <div className="flex flex-wrap gap-2">
                                {product.technologies.map((tech, index) => (
                                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="border-t pt-6">
                            <p className="text-center text-gray-600 mb-4">
                              Interested in {product.name}? Let's discuss how it can benefit your organization.
                            </p>
                            <div className="flex gap-3 justify-center">
                              <a href="/contact">
                                <Button className="px-6 py-2">Contact Sales</Button>
                              </a>
                              <a href="/contact">
                                <Button variant="outline" className="px-6 py-2">Request Demo</Button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
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
