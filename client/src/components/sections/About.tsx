import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About G-Tech</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in the heart of Victoria, Vancouver Island, G-Tech is a pioneering software engineering 
              company dedicated to developing intelligent solutions that make a meaningful impact on society.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is to harness the power of artificial intelligence to solve complex problems 
              in healthcare, education, and beyond. We believe in innovation that serves humanity, 
              building technology that enhances human capabilities rather than replacing them.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2" data-testid="text-platforms-count">3</div>
                <div className="text-gray-600">Industry Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2" data-testid="text-experience-years">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
            <Link href="/careers">
              <Button data-testid="button-join-team">Join Our Team</Button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech office with collaborative workspace" 
              className="rounded-2xl material-elevation-4 w-full h-auto"
              data-testid="img-office"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 material-elevation-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900" data-testid="text-location">Victoria, BC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
