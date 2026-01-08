import React from 'react';
import Lottie from 'lottie-react';
import cryptoAnimation from '../../public/images/hero-animations-cards/Crypto-remote-control.json';
import podcastAnimation from '../../public/images/hero-animations-cards/Busness-podcast.json';
import ntfAnimation from '../../public/images/hero-animations-cards/Ntf-market-analytics.json';

function CardsSection() {
  const cardsData = [
    {
      id: 1,
      animation: cryptoAnimation,
      title: 'Crypto remote control',
      subtitle: 'An amaizing platform for to control your remote cyrpto services',
      buttonText: 'Learn More',
    },
    {
      id: 2,
      animation: podcastAnimation,
      title: 'Busness podcast',
      subtitle: 'Broadcasr your cyrpto services worldwide with single machine',
      buttonText: 'Learn More',
    },
    {
      id: 3,
      animation: ntfAnimation,
      title: 'NTF market analysis',
      subtitle: 'Make the market analysis worldwide easer and effective',
      buttonText: 'Learn More',
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-6 flex-grow">
      <div className="max-w-5xl mx-auto px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center h-full">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center hover:shadow-md transition-shadow duration-300 w-full"
            >
              {/* Animation */}
              <div className="w-full mb-4 flex justify-center">
                <div className="w-full h-48 bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <Lottie
                    animationData={card.animation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-grow text-center">
                {card.subtitle}
              </p>

              {/* Button */}
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
