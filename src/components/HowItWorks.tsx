import React from 'react';
import { gameExamples } from '../data/gameExamples';
import { Play, Camera, ScanText, Volume as VolumeTwo } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            How SnapVoice Works
          </h2>
          <p className="text-xl text-gray-400">
            A simple process that transforms your gaming experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <Play />, title: 'Start Gaming', description: 'Launch your game and SnapVoice runs quietly in the background' },
            { icon: <Camera />, title: 'Take a Screenshot', description: 'Press your custom hotkey to capture any text on screen' },
            { icon: <ScanText />, title: 'Text Recognition', description: 'Our advanced OCR identifies text from any game interface' },
            { icon: <VolumeTwo />, title: 'Voice Narration', description: 'Listen as the text is read aloud in natural voices' }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <span className="text-purple-500">
                    {step.icon}
                  </span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent">
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Works With All Your Favorite Games
          </h3>
          <p className="text-lg text-gray-400 mb-8">
            SnapVoice is compatible with virtually any PC game that displays text on screen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gameExamples.map((game) => (
            <div 
              key={game.id} 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                <p className="text-gray-300">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;