import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">About G-Tech</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded in the heart of <span className="font-semibold text-blue-600">Victoria, Vancouver Island</span>, G-Tech is a pioneering software engineering 
                company dedicated to developing intelligent solutions that make a meaningful impact on society.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our mission is to harness the power of artificial intelligence to solve complex problems 
                in healthcare, education, and beyond. We believe in innovation that serves humanity, 
                building technology that enhances human capabilities rather than replacing them.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition shadow-lg">
                  <div className="text-4xl font-bold text-white" data-testid="text-platforms-count">3</div>
                </div>
                <div className="text-gray-600 font-semibold text-lg">Industry Platforms</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition shadow-lg">
                  <div className="text-4xl font-bold text-white" data-testid="text-experience-years">5+</div>
                </div>
                <div className="text-gray-600 font-semibold text-lg">Years Experience</div>
              </div>
            </div>
            
            <Link href="/careers">
              <Button 
                className="px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-xl smooth-transition"
                data-testid="button-join-team"
              >
                <span className="mr-2">🚀</span>
                Join Our Team
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl material-elevation-4 group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern tech office with collaborative workspace" 
                className="w-full h-auto group-hover:scale-105 smooth-transition"
                data-testid="img-office"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 material-elevation-4 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-bold text-gray-900" data-testid="text-location">Victoria, BC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
}
