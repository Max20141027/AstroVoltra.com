import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/ChatGPT Image Sep 1, 2025, 07_58_56 AM_1756743341073.png";

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-24 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center mb-10 fade-in-up">
            <div className="floating-animation">
              <img 
                src={logoImage} 
                alt="G-Tech"
                className="h-32 lg:h-40 w-auto rotate-90"
                style={{ transformOrigin: 'center' }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight fade-in-up stagger-1">
            Building the Future of<br />
            <span className="relative inline-block mt-3">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white border-opacity-30">
                Intelligent Software
              </span>
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed fade-in-up stagger-2">
            G-Tech specializes in cutting-edge AI solutions that transform industries. 
            From medical diagnostics to educational platforms, we're pioneering the next generation of intelligent software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up stagger-3">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:shadow-xl smooth-transition px-8 py-4 text-lg font-semibold rounded-xl"
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
                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-15 hover:shadow-xl smooth-transition px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
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
