import React from 'react';
import Lottie from 'lottie-react';
import cryptoAnimation from '../images/hero-animations-cards/Crypto-remote-control.json';
import podcastAnimation from '../images/hero-animations-cards/Business-podcast.json';
import ntfAnimation from '../images/hero-animations-cards/Ntf-market-analytics.json';

function CardsSection() {
  const cardsData = [
    {
      id: 1,
      animation: cryptoAnimation,
      title: 'Crypto remote control',
      subtitle: 'An amazing platform to control your remote crypto services',
      buttonText: 'Learn More',
    },
    {
      id: 2,
      animation: podcastAnimation,
      title: 'Business podcast',
      subtitle: 'Broadcast your crypto services worldwide with single machine',
      buttonText: 'Learn More',
    },
    {
      id: 3,
      animation: ntfAnimation,
      title: 'NFT market analysis',
      subtitle: 'Make the market analysis worldwide easier and effective',
      buttonText: 'Learn More',
    },
  ];

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-6 grow transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center h-full">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center hover:shadow-md dark:hover:shadow-gray-700/20 transition-all duration-300 w-full"
            >
              {/* Animation */}
              <div className="w-full mb-4 flex justify-center">
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-lg p-6 flex items-center justify-center">
                  <Lottie
                    animationData={card.animation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 grow text-center">
                {card.subtitle}
              </p>

              {/* Button */}
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-1">
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
