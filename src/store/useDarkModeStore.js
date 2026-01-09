import { create } from 'zustand';

/**
 * Enterprise-grade dark mode state management using Zustand
 * 
 * Architecture decisions:
 * - No persistence to ensure consistent light mode start
 * - Synchronous DOM updates for instant visual feedback
 * - Shallow state updates to prevent unnecessary re-renders
 * - Selector-based consumption for optimal performance
 */

// Force light mode immediately on module load
if (typeof window !== 'undefined') {
  document.documentElement.classList.remove('dark');
  localStorage.removeItem('dark-mode-storage');
}

const useDarkModeStore = create((set) => ({
  // State - always initialize to light mode
  isDarkMode: false,

  // Toggle dark mode action with synchronous DOM update
  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.isDarkMode;
      
      console.log('Store: Toggling from', state.isDarkMode, 'to', newMode);
      
      // Synchronously update DOM for instant feedback
      if (newMode) {
        document.documentElement.classList.add('dark');
        console.log('Store: Added dark class. Classes:', document.documentElement.className);
      } else {
        document.documentElement.classList.remove('dark');
        console.log('Store: Removed dark class. Classes:', document.documentElement.className);
      }
      
      return { isDarkMode: newMode };
    });
  },

  // Set specific dark mode value
  setDarkMode: (mode) => {
    set({ isDarkMode: mode });
    
    // Synchronously update DOM
    if (mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  // Reset to light mode
  resetToLightMode: () => {
    set({ isDarkMode: false });
    document.documentElement.classList.remove('dark');
  }
}));

export default useDarkModeStore;
