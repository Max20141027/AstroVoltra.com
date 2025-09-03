import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/ChatGPT Image Sep 2, 2025, 08_23_47 PM_1756869910445.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="material-elevation-2 glass-ultra sticky top-0 z-50 border-b border-white/20 ultra-smooth hover:shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="cursor-pointer group relative magnetic-element">
              {/* Enhanced logo glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-50 ultra-smooth -z-10"></div>
              <div className="glass-ultra rounded-xl p-2 group-hover:scale-110 ultra-smooth depth-card">
                <img 
                  src={logoImage} 
                  alt="Astrovoltra"
                  className="h-14 w-auto rotate-90 transition-transform duration-300"
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`cursor-pointer ultra-smooth font-semibold text-lg relative px-4 py-3 rounded-xl group magnetic-element ${
                  isActive(item.path) 
                    ? "text-primary bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg" 
                    : "text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md"
                }`} data-testid={`link-nav-${item.name.toLowerCase()}`}>
                  {item.name}
                  {/* Hover underline effect */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <span className="material-icons">menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <span 
                        className={`block px-3 py-2 cursor-pointer smooth-transition ${
                          isActive(item.path) 
                            ? "text-primary font-medium" 
                            : "text-gray-700 hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`link-mobile-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
