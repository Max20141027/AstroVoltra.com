import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/ChatGPT Image Sep 1, 2025, 07_58_56 AM_1756743341073.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="material-elevation-2 bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="cursor-pointer">
              <img 
                src={logoImage} 
                alt="G-Tech"
                className="h-14 w-auto rotate-90"
                style={{ transformOrigin: 'center' }}
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`cursor-pointer smooth-transition font-semibold text-lg relative px-3 py-2 rounded-lg ${
                  isActive(item.path) 
                    ? "text-primary bg-blue-50" 
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`} data-testid={`link-nav-${item.name.toLowerCase()}`}>
                  {item.name}
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
