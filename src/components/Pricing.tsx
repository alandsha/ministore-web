import React from 'react';
import { pricingTiers } from '../data/pricingData';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-300 mb-4 inline-block">
            Simple, transparent pricing
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose the Perfect Plan for Your Gaming Needs
          </h2>
          <p className="text-xl text-gray-400">
            All plans include a 7-day free trial. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`rounded-xl overflow-hidden ${
                tier.popular 
                  ? 'bg-gradient-to-b from-purple-600/20 to-blue-600/20 border border-purple-500/30 transform scale-105 md:-mt-4' 
                  : 'bg-gray-900 border border-gray-800'
              }`}
            >
              {tier.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-gray-400 ml-2">/{tier.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-green-500">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#" 
                  className={`block text-center py-3 px-6 rounded-lg transition-all duration-300 font-medium w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert('This would redirect to Stripe checkout. To implement Stripe, you need to set up your account.');
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Looking for a custom plan for your team or organization?
          </p>
          <a 
            href="#" 
            className="text-purple-400 hover:text-purple-300 font-medium"
            onClick={(e) => e.preventDefault()}
          >
            Contact us for enterprise pricing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;