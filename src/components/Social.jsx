import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const SocialMedia = ({ socialLinks }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="social"
      className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}
      style={isDarkMode ? { backgroundColor: '#0d1117' } : { backgroundColor: '#f8f9fa' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4">
            <span className="text-primary">Connect</span> With Me
          </h2>
          <p className={`mb-5 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div
              className={`card border-0 shadow-sm position-relative ${isDarkMode ? 'bg-dark text-light' : ''}`}
              style={{
                backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px'
              }}
            >
              {/* Decorative background elements */}
              <div
                className="position-absolute top-0 start-0 opacity-10"
                style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, transparent 70%)',
                  borderRadius: '20px 0 50% 0',
                  transform: 'translate(-20px, -20px)'
                }}
              ></div>
              <div
                className="position-absolute bottom-0 end-0 opacity-10"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, var(--accent-secondary) 0%, transparent 70%)',
                  borderRadius: '0 20px 0 50%',
                  transform: 'translate(20px, 20px)'
                }}
              ></div>

              <div className="card-body position-relative p-5">
                <div className="row g-4 justify-content-center">
                  {/* GitHub */}
                  <div className="col-6 col-md-3 text-center">
                    <a
                      href="https://github.com/aman01246"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-block"
                      style={socialLinkStyle(isDarkMode)}
                    >
                      <div className="social-icon-container">
                        <i className="bi bi-github social-icon"></i>
                      </div>
                      <span className="social-label mt-3 d-block fw-semibold">GitHub</span>
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="col-6 col-md-3 text-center">
                    <a
                      href="https://www.linkedin.com/in/aman01246"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-block"
                      style={socialLinkStyle(isDarkMode)}
                    >
                      <div className="social-icon-container linkedin">
                        <i className="bi bi-linkedin social-icon"></i>
                      </div>
                      <span className="social-label mt-3 d-block fw-semibold">LinkedIn</span>
                    </a>
                  </div>

                  {/* YouTube */}
                  <div className="col-6 col-md-3 text-center">
                    <a
                      href="https://youtube.com/@AMAN-dl4ep"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-block"
                      style={socialLinkStyle(isDarkMode)}
                    >
                      <div className="social-icon-container youtube">
                        <i className="bi bi-youtube social-icon"></i>
                      </div>
                      <span className="social-label mt-3 d-block fw-semibold">YouTube</span>
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="col-6 col-md-3 text-center">
                    <a
                    //   href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-block"
                      style={socialLinkStyle(isDarkMode)}
                    >
                      <div className="social-icon-container instagram">
                        <i className="bi bi-instagram social-icon"></i>
                      </div>
                      <span className="social-label mt-3 d-block fw-semibold">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Enhanced Social Link Style */
const socialLinkStyle = (isDarkMode) => ({
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'translateY(0)',
  display: 'block'
});

/* Social Icon Container Styles */
const socialIconStyles = `
  .social-link:hover {
    transform: translateY(-8px) scale(1.05);
  }

  .social-icon-container {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  }

  .social-icon-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .social-link:hover .social-icon-container::before {
    opacity: 1;
  }

  .social-icon-container.linkedin {
    background: linear-gradient(135deg, #0a66c2, #004182);
  }

  .social-icon-container.youtube {
    background: linear-gradient(135deg, #ff0000, #cc0000);
  }

  .social-icon-container.instagram {
    background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
  }

  .social-icon {
    font-size: 2rem;
    color: white;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
  }

  .social-link:hover .social-icon {
    transform: scale(1.1);
  }

  .social-label {
    font-size: 0.9rem;
    color: var(--bs-body-color);
    transition: color 0.3s ease;
  }

  .social-link:hover .social-label {
    color: var(--accent-primary) !important;
  }

  /* Dark mode adjustments */
  .bg-dark .social-icon-container {
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  }

  .bg-dark .social-link:hover .social-label {
    color: var(--accent-primary) !important;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = socialIconStyles;
  document.head.appendChild(styleSheet);
}

export default SocialMedia;
