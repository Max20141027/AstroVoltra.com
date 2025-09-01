import { Link } from "wouter";
import logoImage from "@assets/ChatGPT Image Sep 1, 2025, 07_58_56 AM_1756743341073.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-5 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-indigo-300 rounded-full opacity-5 blur-xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="G-Tech"
                className="h-16 w-auto rotate-90"
                style={{ transformOrigin: 'center' }}
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building the future of intelligent software with cutting-edge AI solutions 
              that transform industries and improve lives.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:gtech.service@outlook.com" className="text-gray-400 hover:text-blue-400 smooth-transition" data-testid="link-email">
                <span className="material-icons text-xl">email</span>
              </a>
              <a href="/contact" className="text-gray-400 hover:text-blue-400 smooth-transition" data-testid="link-contact-footer">
                <span className="material-icons text-xl">phone</span>
              </a>
              <a href="/pricing" className="text-gray-400 hover:text-blue-400 smooth-transition" data-testid="link-pricing-footer">
                <span className="material-icons text-xl">price_check</span>
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-medisense">Medi-sense</span></Link></li>
              <li><Link href="/products"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-qmsai">QMS AI</span></Link></li>
              <li><Link href="/products"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-learnbot">LearnBot</span></Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-about">About Us</span></Link></li>
              <li><Link href="/careers"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-careers">Careers</span></Link></li>
              <li><Link href="/contact"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-contact">Contact</span></Link></li>
              <li><Link href="/privacy"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-privacy">Privacy Policy</span></Link></li>
              <li><Link href="/terms"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-terms">Terms of Service</span></Link></li>
              <li><Link href="/pricing"><span className="text-gray-300 hover:text-white smooth-transition cursor-pointer" data-testid="link-footer-pricing">Pricing</span></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 G-Tech. All rights reserved. | Built with ❤️ in Victoria, BC
          </p>
        </div>
      </div>
    </footer>
  );
}
