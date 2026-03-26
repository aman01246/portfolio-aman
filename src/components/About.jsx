// About Section - Showcasing professional summary and contact details
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const About = ({ bioData }) => {
  // Get dark mode state from context
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="about"
      className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}
      style={isDarkMode ? { backgroundColor: '#0d1117' } : { backgroundColor: '#ffffff' }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <span className="text-primary">About</span> Me
        </h2>

        <div className="row g-4">
          {/* About Me Card with enhanced styling */}
          <div className="col-md-6">
            <div
              className={`card h-100 border-0 shadow-sm position-relative ${isDarkMode ? 'bg-dark text-light' : ''}`}
              style={{
                backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Decorative element */}
              <div
                className="position-absolute top-0 end-0 opacity-25"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, transparent 70%)',
                  borderRadius: '0 16px 0 50%',
                  transform: 'translate(10px, -10px)'
                }}
              ></div>

              <div className="card-body position-relative">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      color: 'white'
                    }}
                  >
                    <i className="bi bi-person-fill" style={{ fontSize: '1.5rem' }}></i>
                  </div>
                  <h5 className="card-title mb-0 fw-bold">Professional Summary</h5>
                </div>
                <p className={`card-text ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`} style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                  {bioData.about_me}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Card with enhanced styling */}
          <div className="col-md-6">
            <div
              className={`card h-100 border-0 shadow-sm position-relative ${isDarkMode ? 'bg-dark text-light' : ''}`}
              style={{
                backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Decorative element */}
              <div
                className="position-absolute top-0 end-0 opacity-25"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, var(--accent-secondary) 0%, transparent 70%)',
                  borderRadius: '0 16px 0 50%',
                  transform: 'translate(10px, -10px)'
                }}
              ></div>

              <div className="card-body position-relative">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-tertiary))',
                      color: 'white'
                    }}
                  >
                    <i className="bi bi-telephone-fill" style={{ fontSize: '1.5rem' }}></i>
                  </div>
                  <h5 className="card-title mb-0 fw-bold">Contact Information</h5>
                </div>
                <div className="d-flex flex-column gap-3">
                  <div className={`d-flex align-items-center p-3 rounded ${isDarkMode ? 'bg-dark border' : 'bg-light border'}`} style={{ borderRadius: '12px' }}>
                    <div className="text-primary me-3">
                      <i className="bi bi-envelope-fill" style={{ fontSize: '1.2rem' }}></i>
                    </div>
                    <div>
                      <small className={`${isDarkMode ? 'text-light opacity-75' : 'text-muted'} d-block`}>Email Address</small>
                      <a href={`mailto:${bioData.email}`} className="text-decoration-none fw-semibold">
                        {bioData.email}
                      </a>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center p-3 rounded ${isDarkMode ? 'bg-dark border' : 'bg-light border'}`} style={{ borderRadius: '12px' }}>
                    <div className="text-success me-3">
                      <i className="bi bi-telephone-fill" style={{ fontSize: '1.2rem' }}></i>
                    </div>
                    <div>
                      <small className={`${isDarkMode ? 'text-light opacity-75' : 'text-muted'} d-block`}>Mobile Number</small>
                      <a href={`tel:${bioData.mobile}`} className="text-decoration-none fw-semibold">
                        {bioData.mobile}
                      </a>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center p-3 rounded ${isDarkMode ? 'bg-dark border' : 'bg-light border'}`} style={{ borderRadius: '12px' }}>
                    <div className="text-info me-3">
                      <i className="bi bi-geo-alt-fill" style={{ fontSize: '1.2rem' }}></i>
                    </div>
                    <div>
                      <small className={`${isDarkMode ? 'text-light opacity-75' : 'text-muted'} d-block`}>Location</small>
                      <span className="fw-semibold">{bioData.address}</span>
                    </div>
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

export default About;
