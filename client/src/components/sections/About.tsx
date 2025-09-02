import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import victoriaImage from "@assets/Victoria_1756850120791.jpg";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl float-gentle"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl" style={{animationDelay: '2s'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="slide-up-fade">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">About G-Tech</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 glow-animation"></div>
            </div>
            
            <div className="space-y-6 slide-up-fade" style={{animationDelay: '0.2s'}}>
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
            
            <div className="grid grid-cols-2 gap-8 py-8 slide-up-fade" style={{animationDelay: '0.4s'}}>
              <div className="text-center group cursor-pointer interactive-card">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition shadow-lg glow-animation">
                  <div className="text-4xl font-bold text-white text-glow" data-testid="text-platforms-count">3</div>
                </div>
                <div className="text-gray-600 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">Industry Platforms</div>
              </div>
              <div className="text-center group cursor-pointer interactive-card">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition shadow-lg glow-animation" style={{animationDelay: '1s'}}>
                  <div className="text-4xl font-bold text-white text-glow" data-testid="text-experience-years">5+</div>
                </div>
                <div className="text-gray-600 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">Years Experience</div>
              </div>
            </div>
            
            <div className="slide-up-fade" style={{animationDelay: '0.6s'}}>
              <Link href="/careers">
                <Button 
                  className="px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-xl smooth-transition btn-magic shimmer-effect"
                  data-testid="button-join-team"
                >
                  <span className="mr-2">🚀</span>
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative slide-up-fade" style={{animationDelay: '0.3s'}}>
            <div className="relative overflow-hidden rounded-3xl material-elevation-4 group interactive-card">
              {/* Image glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <img 
                src={victoriaImage} 
                alt="Beautiful Victoria, British Columbia - G-Tech headquarters location" 
                className="w-full h-auto group-hover:scale-105 smooth-transition"
                data-testid="img-office"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 glass-premium rounded-2xl p-6 border border-white/30 float-gentle">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse border-glow"></div>
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
