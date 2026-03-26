// Main App Component - Orchestrates all sections of the portfolio
import { useContext, useEffect, useState } from 'react';
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import SocialMedia from './components/Social';

// Main content component (separated to use context hook)
const AppContent = () => {
  // Get dark mode state from context
  const { isDarkMode } = useContext(DarkModeContext);

  // State to store bio data loaded from JSON
  const [bioData, setBioData] = useState(null);

  // Load bio.json data on component mount
  useEffect(() => {
    const loadBioData = async () => {
      try {
        // Fetch the bio.json file from public folder
        const response = await fetch('/resume/bio.json');
        const data = await response.json();
        setBioData(data);
      } catch (error) {
        console.error('Error loading bio data:', error);
      }
    };

    loadBioData();
  }, []);

  // Show loading message while data is being fetched
  if (!bioData) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <Hero bioData={bioData} />

      {/* About Section */}
      <About bioData={bioData} />

      {/* Skills Section */}
      <Skills bioData={bioData} />

      {/* Projects Section */}
      <Projects bioData={bioData} />

      {/* Education Section */}
      <Education bioData={bioData} />

       {/* Social Media Links */}
      

      {/* Footer with Contact Information */}
      <Footer bioData={bioData} />

      
      {/* Back to top button (optional) */}
      <style>{`
        /* Smooth scrolling behavior */

        html {
          scroll-behavior: smooth;
        }

        /* Transition for dark mode */
        body {
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#0a0b0bff' : '#ffefefff'};
        }

        ::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
};

// App wrapper with DarkModeProvider
const App = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

export default App;
