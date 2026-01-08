import React, { useState } from 'react';
import { IoMdGlobe, IoMdNotifications } from 'react-icons/io';
import { navLinks } from '../../constants';

function NavBar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = ['English', 'Swahili'];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo & Brand Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Masaki Restaurant Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-semibold text-gray-900">
              MiCyrpto
            </span>
          </div>

          {/* Right Section - Navigation Items */}
          <div className="flex items-center space-x-6">
            {/* Support Link */}
            <a
              href="/support"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Support
            </a>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 focus:outline-none"
              >
                <IoMdGlobe className="h-5 w-5" />
                <span>{selectedLanguage}</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                        selectedLanguage === language
                          ? 'text-gray-900 font-medium bg-gray-50'
                          : 'text-gray-700'
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* List Your Requests Button */}
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1">
              List your requests
            </button>

            {/* Notification Icon */}
            <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <IoMdNotifications className="h-6 w-6" />
              {/* Notification Badge - Optional */}
              <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full">
              <img
                src="/images/profile1.png"
                alt="User Profile"
                className="h-9 w-9 rounded-full object-cover border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;