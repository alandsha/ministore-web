import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about SnapVoice
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`mb-4 border rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-purple-500/30 bg-gray-800/50' 
                  : 'border-gray-800 bg-gray-800/20'
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className="text-purple-400 ml-2">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div 
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;