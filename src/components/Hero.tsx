import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7915252/pexels-photo-7915252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute w-24 h-24 rounded-full bg-purple-600/30 animate-blob top-1/3 left-1/4"></div>
        <div className="absolute w-32 h-32 rounded-full bg-blue-600/20 animate-blob animation-delay-2000 top-1/2 right-1/3"></div>
        <div className="absolute w-20 h-20 rounded-full bg-pink-600/20 animate-blob animation-delay-4000 bottom-1/3 right-1/4"></div>
      </div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-300 mb-6">
            {t('hero.tagline')}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#pricing" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg flex items-center justify-center"
            >
              {t('hero.cta.trial')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#how-it-works" 
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg"
            >
              {t('hero.cta.howItWorks')}
            </a>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-gray-800 max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-800 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-medium text-gray-300">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-300">
                  {t('hero.users')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;