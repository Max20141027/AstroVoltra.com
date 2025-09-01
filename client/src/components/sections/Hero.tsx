import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/ChatGPT Image Sep 1, 2025, 07_58_56 AM_1756743341073.png";

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <img 
              src={logoImage} 
              alt="G-Tech"
              className="h-32 w-auto rotate-90"
              style={{ transformOrigin: 'center' }}
            />
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Building the Future of<br />
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg inline-block mt-2">
              Intelligent Software
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
            G-Tech specializes in cutting-edge AI solutions that transform industries. 
            From medical diagnostics to educational platforms, we're pioneering the next generation of intelligent software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 smooth-transition"
                data-testid="button-explore-products"
              >
                Explore Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:bg-opacity-10 smooth-transition"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
