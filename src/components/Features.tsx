import React from 'react';
import { features } from '../data/featuresData';
import * as LucideIcons from 'lucide-react';

const Features: React.FC = () => {
  // Dynamic icon component lookup
  const IconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="h-6 w-6 text-purple-500" /> : null;
  };

  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Powerful Features for Immersive Gaming
          </h2>
          <p className="text-xl text-gray-400">
            SnapVoice enhances your gaming experience with these powerful capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group"
            >
              <div className="p-3 bg-gray-800 rounded-lg w-fit mb-4 group-hover:bg-purple-500/10 transition-colors duration-300">
                {IconComponent(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;