// Context to manage dark mode state across the entire app
import { createContext, useState } from 'react';

// Create the dark mode context
export const DarkModeContext = createContext();

// Provider component that wraps the entire app
export const DarkModeProvider = ({ children }) => {
  // State to track if dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
