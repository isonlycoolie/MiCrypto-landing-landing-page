import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="hero-section">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-6 flex flex-col items-center">
        {/* Hero Heading */}
        <h1 className="hero-title text-center mb-2">
          Now you can{' '}
          <span className="text-blue-600">do every</span>{' '}
          thing
        </h1>

        {/* Hero Description */}
        <p className="hero-description text-center mb-6 max-w-3xl">
          Find, explore and learn in an awesome place find,
          <br />
          explore and learn in an awesome an great.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search what ever you want"
              className="w-full px-6 py-3 pr-14 text-base text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-2 p-3 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Search"
            >
              <IoSearchOutline className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
