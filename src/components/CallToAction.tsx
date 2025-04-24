import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -inset-[100%] bg-gradient-conic from-purple-500 via-blue-500 to-purple-500 animate-slow-spin blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 border border-purple-500/20 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Gaming Experience?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of gamers who never miss important text in their games.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg"
              onClick={(e) => e.preventDefault()}
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;