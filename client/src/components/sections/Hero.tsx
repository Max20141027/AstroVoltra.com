import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/ChatGPT Image Sep 1, 2025, 07_58_56 AM_1756743341073.png";
import learnbotImage from "@assets/Learnbot_1756829300667.png";

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-24 lg:py-40 relative overflow-hidden perspective-container">
      {/* Staggered background images */}
      <div className="absolute inset-0 z-0">
        {/* Main tech background - appears first */}
        <div className="absolute inset-0 staggered-bg-1">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200" 
            alt="AI technology background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* LearnBot interface - appears second */}
        <div className="absolute top-10 right-10 w-96 h-64 staggered-bg-2 z-20">
          <div className="w-full h-full bg-gray-900/80 rounded-xl border border-blue-400/50 shadow-2xl">
            <img 
              src={learnbotImage}
              alt="LearnBot interface"
              className="w-full h-full object-cover rounded-xl opacity-80"
            />
          </div>
        </div>
        
        {/* Code interface overlay - appears third */}
        <div className="absolute bottom-10 left-10 w-80 h-48 staggered-bg-3 z-20">
          <div className="w-full h-full bg-gray-900/90 rounded-xl backdrop-blur-sm border border-green-400/50 shadow-2xl">
            <div className="p-4 text-green-400 font-mono text-sm">
              <div className="mb-2 text-blue-300">&gt; AI Learning System</div>
              <div className="mb-1 text-yellow-300">const learnbot = new AIAssistant();</div>
              <div className="mb-1">learnbot.initialize();</div>
              <div className="text-green-300">// Ready to learn...</div>
            </div>
          </div>
        </div>
        
        {/* SchoolMind (QMS AI) interface - appears fourth */}
        <div className="absolute top-1/2 left-10 w-80 h-56 staggered-bg-4 z-20">
          <div className="w-full h-full bg-blue-900/90 rounded-xl backdrop-blur-sm border border-blue-400/50 shadow-2xl">
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <div className="text-blue-300 font-semibold">SchoolMind - QMS AI</div>
              </div>
              <div className="text-white text-sm mb-2">📊 Student Performance Analytics</div>
              <div className="text-blue-200 text-xs mb-1">✓ Grade Management System</div>
              <div className="text-blue-200 text-xs mb-1">✓ Behavioral Tracking</div>
              <div className="text-blue-200 text-xs mb-1">✓ Parent Communication Portal</div>
              <div className="text-green-400 text-xs mt-2">Status: Active • 1,247 students monitored</div>
            </div>
          </div>
        </div>
        
        {/* Reduced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-indigo-900/50"></div>
      </div>
      
      {/* Ultra-advanced particle system */}
      <div className="particle-system">
        <div className="particle-ultra" style={{top: '10%', left: '10%'}}></div>
        <div className="particle-ultra" style={{top: '20%', left: '80%'}}></div>
        <div className="particle-ultra" style={{top: '60%', left: '15%'}}></div>
        <div className="particle-ultra" style={{top: '80%', left: '70%'}}></div>
        <div className="particle-ultra" style={{top: '40%', left: '60%'}}></div>
        <div className="particle-ultra" style={{top: '25%', left: '40%'}}></div>
      </div>
      {/* Ultra-advanced background effects with mesh gradient */}
      <div className="absolute inset-0 mesh-background opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl float-gentle"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl float-rotate" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl float-gentle" style={{animationDelay: '2s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center mb-10 fade-in-up">
            <div className="floating-animation relative group magnetic-element depth-card">
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
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight relative z-20">
            <div className="typewriter-container mb-4">
              <span className="typewriter-text">Building the Future of</span>
            </div>
            <div className="intelligent-container">
              <span className="glass-ultra px-6 py-3 rounded-2xl intelligent-animation relative z-30">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent font-extrabold">
                  Intelligent Software
                </span>
              </span>
            </div>
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
                className="btn-ultra ripple-button hover-lift px-8 py-4 text-lg font-semibold"
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
                className="glass-ultra border-2 border-white text-white hover:bg-white hover:bg-opacity-15 ripple-button magnetic-element px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm ultra-smooth hover-lift"
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
