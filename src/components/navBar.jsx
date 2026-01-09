import React, { useState } from 'react';
import { IoMdGlobe, IoMdNotifications, IoMdMoon, IoMdSunny } from 'react-icons/io';
import { navLinks } from '../../constants';
import useDarkModeStore from '../store/useDarkModeStore';

function NavBar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  const languages = ['English', 'Swahili'];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo & Brand Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Masaki Restaurant Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              MiCyrpto
            </span>
          </div>

          {/* Right Section - Navigation Items */}
          <div className="flex items-center space-x-6">
            {/* Support Link */}
            <a
              href="/support"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Support
            </a>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none"
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
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                        selectedLanguage === language
                          ? 'text-gray-900 dark:text-white font-medium bg-gray-50 dark:bg-gray-700'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => {
                console.log('Dark mode button clicked');
                console.log('Current isDarkMode:', isDarkMode);
                toggleDarkMode();
                console.log('Toggle function called');
              }}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-label="Toggle dark mode"
              type="button"
            >
              {isDarkMode ? (
                <IoMdSunny className="h-5 w-5" />
              ) : (
                <IoMdMoon className="h-5 w-5" />
              )}
            </button>

            {/* List Your Requests Button */}
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-1">
              List your requests
            </button>

            {/* Notification Icon */}
            <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
              <IoMdNotifications className="h-6 w-6" />
              {/* Notification Badge - Optional */}
              <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full">
              <img
                src="/images/profile1.png"
                alt="User Profile"
                className="h-9 w-9 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;