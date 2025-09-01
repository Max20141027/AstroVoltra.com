import { Link } from "wouter";
import logoImage from "@assets/ChatGPT Image Sep 1, 2025, 07_58_56 AM_1756743341073.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <a href="#" className="text-gray-400 hover:text-white smooth-transition" data-testid="link-linkedin">
                <span className="material-icons">linkedin</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white smooth-transition" data-testid="link-twitter">
                <span className="material-icons">twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white smooth-transition" data-testid="link-github">
                <span className="material-icons">code</span>
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
              <li><a href="#" className="text-gray-300 hover:text-white smooth-transition" data-testid="link-footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white smooth-transition" data-testid="link-footer-terms">Terms of Service</a></li>
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
