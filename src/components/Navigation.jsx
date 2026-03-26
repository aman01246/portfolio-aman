// Navigation component with dark mode toggle button
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import './Navigation.css';

const Navigation = () => {
  // Get dark mode state and toggle function from context
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        {/* Portfolio Title/Brand */}
        <a className="navbar-brand fw-bold fs-4" href="#home">
          <span className="text-primary">Aman</span> Kumar
        </a>

        {/* Navbar Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          {/* Resume PDF Link */}
          <button className="btn btn-outline-primary ms-1 me-1" >
            <a className="nav-link" href="resume/resume.pdf">Resume</a>
          </button>
          {/* Dark Mode Toggle Button */}
          <button
            className="btn btn-outline-primary ms-2"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {/* {isDarkMode ? '☀️ Light' : '🌙 Dark'} */}
            
            {isDarkMode ? <span className="bi bi-sun-fill"></span> : <span className="bi bi-moon-fill"></span>}

          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
