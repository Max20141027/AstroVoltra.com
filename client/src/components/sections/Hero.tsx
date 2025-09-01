import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/ChatGPT Image Sep 1, 2025, 07_58_56 AM_1756743341073.png";

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-24 lg:py-40 relative overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center mb-10 fade-in-up">
            <div className="floating-animation relative group">
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 group-hover:border-white/40 transition-all duration-500">
                <img 
                  src={logoImage} 
                  alt="G-Tech"
                  className="h-32 lg:h-40 w-auto rotate-90 group-hover:scale-110 transition-transform duration-500"
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight fade-in-up stagger-1">
            <span className="relative inline-block">
              Building the Future of
              {/* Text shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-0 animate-pulse" style={{animationDelay: '3s', animationDuration: '2s'}}></div>
            </span>
            <br />
            <span className="relative inline-block mt-3 group">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white border-opacity-30 group-hover:bg-opacity-30 group-hover:scale-105 transition-all duration-500 shadow-2xl">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent font-extrabold">
                  Intelligent Software
                </span>
              </span>
              {/* Glow effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed fade-in-up stagger-2 relative">
            <span className="relative z-10">
              G-Tech specializes in cutting-edge AI solutions that transform industries. 
              From medical diagnostics to educational platforms, we're pioneering the next generation of intelligent software.
            </span>
            {/* Subtle text background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg -z-10"></div>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up stagger-3">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:shadow-xl smooth-transition px-8 py-4 text-lg font-semibold rounded-xl btn-professional"
                data-testid="button-explore-products"
              >
                <span className="mr-2">🚀</span>
                Explore Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-15 hover:shadow-xl smooth-transition px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm btn-professional"
                data-testid="button-contact-us"
              >
                <span className="mr-2">💬</span>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
