import { Check, Calculator, Headphones } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingPage = () => {
  const packages = [
    {
      name: "Basic / MVP App",
      price: "$5,000 - $15,000",
      description: "Perfect for startups and small businesses looking to test their ideas",
      features: [
        "Simple prototype or small app",
        "Basic UI design and user experience",
        "Limited functionality",
        "No complex backend systems",
        "Mobile responsive design",
        "Basic testing and quality assurance",
        "Documentation and handover"
      ],
      popular: false,
      maintenance: "$500 - $1,500/month"
    },
    {
      name: "Professional App",
      price: "$15,000 - $40,000",
      description: "Comprehensive solution for established businesses ready to scale",
      features: [
        "Fully functional application",
        "Database integration and management",
        "User accounts and authentication",
        "Payment processing integration",
        "Admin panel and dashboard",
        "Advanced UI/UX design",
        "API development and integration",
        "Comprehensive testing suite",
        "Deployment and production setup"
      ],
      popular: true,
      maintenance: "$1,500 - $3,000/month"
    },
    {
      name: "Enterprise App",
      price: "$40,000 - $100,000+",
      description: "Complex, scalable solutions for large organizations with advanced needs",
      features: [
        "Complex, scalable application architecture",
        "Multiple system integrations",
        "Advanced analytics and reporting",
        "High-security implementations",
        "Custom AI/ML features",
        "Multi-platform deployment",
        "Advanced admin controls",
        "24/7 monitoring and alerts",
        "Dedicated project management",
        "Training and ongoing support"
      ],
      popular: false,
      maintenance: "$3,000 - $5,000+/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional software development services from Victoria, Vancouver Island. 
            Clear pricing with no hidden fees - because your success is our mission.
          </p>
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 max-w-md mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-800">Hourly Rate</span>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">$40 - $60/hr</div>
            <div className="text-sm text-gray-600">Professional development services</div>
          </div>
        </div>
      </section>

      {/* Package Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Fixed-Price Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your needs. All packages include professional development, 
              testing, deployment, and comprehensive documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.popular ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'shadow-lg'} 
                bg-white/90 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300`}
                data-testid={`card-package-${index}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-gray-100">
                  <div className="w-full">
                    <Link href="/contact">
                      <Button 
                        className={`w-full mb-3 ${pkg.popular 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                          : 'bg-gray-800 hover:bg-gray-700'
                        } text-white`}
                        data-testid={`button-contact-${index}`}
                      >
                        Get Started
                      </Button>
                    </Link>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Maintenance & Support</div>
                      <div className="font-semibold text-gray-800">{pkg.maintenance}</div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Membership Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Luxury background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              EXCLUSIVE PARTNERSHIP
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Enterprise Membership
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Reserved for Fortune 500 companies and elite organizations seeking 
              unparalleled software development excellence and exclusive partnership benefits.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-xl border border-amber-500/30 shadow-2xl">
              <CardHeader className="text-center pb-8 border-b border-amber-500/20">
                <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-3 rounded-xl font-bold text-lg mb-4 shadow-lg">
                  PREMIUM TIER
                </div>
                <CardTitle className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                    $500,000
                  </span>
                </CardTitle>
                <div className="text-2xl text-amber-400 font-semibold mb-2">per year</div>
                <CardDescription className="text-xl text-gray-400 max-w-2xl mx-auto">
                  The ultimate partnership for organizations that demand nothing less than perfection, 
                  priority access, and exclusive recognition.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center">
                      <span className="material-icons mr-3 text-3xl">diamond</span>
                      Premium Benefits
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-black font-bold" />
                        </div>
                        <div>
                          <span className="text-white font-semibold text-lg">Up to 15 Fully Built Apps Per Year</span>
                          <p className="text-gray-400 mt-1">Any size or complexity, within reason. From simple tools to enterprise-grade platforms.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-black font-bold" />
                        </div>
                        <div>
                          <span className="text-white font-semibold text-lg">Unlimited Debugging</span>
                          <p className="text-gray-400 mt-1">Round-the-clock issue resolution. No limits, no additional charges.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-black font-bold" />
                        </div>
                        <div>
                          <span className="text-white font-semibold text-lg">24/7 Dedicated Support</span>
                          <p className="text-gray-400 mt-1">Phone, email, or chat. Your dedicated team is always available.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center">
                      <span className="material-icons mr-3 text-3xl">stars</span>
                      Exclusive Privileges
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-black font-bold" />
                        </div>
                        <div>
                          <span className="text-white font-semibold text-lg">Guaranteed Priority Service</span>
                          <p className="text-gray-400 mt-1">Enterprise clients always come first. Your projects jump to the front of the queue.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-black font-bold" />
                        </div>
                        <div>
                          <span className="text-white font-semibold text-lg">Exclusive Recognition</span>
                          <p className="text-gray-400 mt-1">Featured on our 'Notable Apps' showcase as a premium partner with special recognition.</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-xl border border-amber-500/30">
                      <div className="flex items-center mb-3">
                        <span className="material-icons text-amber-400 mr-2">workspace_premium</span>
                        <span className="text-amber-400 font-semibold">Elite Partnership Status</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Join an exclusive circle of industry leaders who trust G-Tech with their most critical software initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-12 pt-8 border-t border-amber-500/20">
                <div className="w-full text-center">
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-12 py-4 text-xl rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 mb-4"
                      data-testid="button-enterprise-membership"
                    >
                      <span className="material-icons mr-3">diamond</span>
                      Apply for Membership
                    </Button>
                  </Link>
                  <p className="text-gray-400 text-sm mt-4">
                    Membership is by application only. Limited to select organizations that align with our standards of excellence.
                  </p>
                  <div className="mt-6 text-amber-400 font-semibold">
                    Contact: gtech.service@outlook.com
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Every project is unique. We provide detailed estimates based on your specific requirements.
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Calculator className="h-6 w-6 text-white" />
                <span className="text-lg font-semibold text-white">Our Pricing Formula</span>
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                Total Price = Estimated Hours × $50/hr
              </div>
              <div className="text-blue-100">
                *Average rate used for estimation purposes
              </div>
            </div>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
                data-testid="button-custom-quote"
              >
                Request Custom Quote
              </Button>
            </Link>
            <div className="mt-4 text-blue-100">
              Contact us at <span className="font-semibold">gtech.service@outlook.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Support Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ongoing Support & Maintenance
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Keep your application running smoothly with our comprehensive maintenance packages. 
            All retainers include bug fixes, security updates, and performance monitoring.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Small Apps</CardTitle>
                <div className="text-2xl font-bold text-green-600">$500 - $1,500</div>
                <div className="text-sm text-gray-600">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Basic monitoring & updates</li>
                  <li>• Bug fixes and patches</li>
                  <li>• Monthly performance reports</li>
                  <li>• Email support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 ring-2 ring-blue-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Medium Apps</CardTitle>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$1,500 - $3,000</div>
                <div className="text-sm text-gray-600">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Priority monitoring & updates</li>
                  <li>• Advanced bug fixes</li>
                  <li>• Weekly performance reports</li>
                  <li>• Phone & email support</li>
                  <li>• Feature enhancements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Large Apps</CardTitle>
                <div className="text-2xl font-bold text-purple-600">$3,000 - $5,000+</div>
                <div className="text-sm text-gray-600">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• 24/7 monitoring & support</li>
                  <li>• Critical issue response</li>
                  <li>• Daily performance reports</li>
                  <li>• Dedicated support manager</li>
                  <li>• Regular feature updates</li>
                  <li>• Scalability optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg"
                data-testid="button-start-project"
              >
                Start Your Project
              </Button>
            </Link>
            <div className="text-gray-300">
              or email us at <span className="text-blue-400 font-semibold">gtech.service@outlook.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;