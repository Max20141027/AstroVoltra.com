import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-semibold">tech</span>
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
              <li><Link href="/products" data-testid="link-footer-medisense"><a className="text-gray-300 hover:text-white smooth-transition">Medi-sense</a></Link></li>
              <li><Link href="/products" data-testid="link-footer-qmsai"><a className="text-gray-300 hover:text-white smooth-transition">QMS AI</a></Link></li>
              <li><Link href="/products" data-testid="link-footer-learnbot"><a className="text-gray-300 hover:text-white smooth-transition">LearnBot</a></Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" data-testid="link-footer-about"><a className="text-gray-300 hover:text-white smooth-transition">About Us</a></Link></li>
              <li><Link href="/careers" data-testid="link-footer-careers"><a className="text-gray-300 hover:text-white smooth-transition">Careers</a></Link></li>
              <li><Link href="/contact" data-testid="link-footer-contact"><a className="text-gray-300 hover:text-white smooth-transition">Contact</a></Link></li>
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
