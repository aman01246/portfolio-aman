// Footer Component - Contact and social links
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import SocialMedia from './Social';

const Footer = ({ bioData }) => {
  // Get dark mode state from context
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <footer
      id="contact"
      className={`py-5 ${isDarkMode ? 'bg-dark text-light border-top border-secondary' : 'bg-light border-top'}`}
      style={isDarkMode ? { backgroundColor: '#0d1117', borderTopColor: '#404060' } : {}}
    >
      <div className="container">
        {/* Contact Section */}
        <h2 className="text-center mb-5 fw-bold">
          <span className="text-primary">Get In</span> Touch
        </h2>

        <div className="row mb-5">
          {/* Email Card with enhanced styling */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div
              className={`card h-100 border-0 text-center position-relative ${isDarkMode ? 'bg-dark text-light' : ''}`}
              style={{
                backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Decorative background */}
              <div
                className="position-absolute top-0 end-0 opacity-10"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, transparent 70%)',
                  borderRadius: '0 16px 0 50%',
                  transform: 'translate(20px, -20px)'
                }}
              ></div>

              <div className="card-body position-relative d-flex flex-column">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }}
                >
                  <i className="bi bi-envelope-fill" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5 className="card-title fw-bold mb-3">Email Me</h5>
                <p className={`card-text mb-4 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>{bioData.email}</p>
                <div className="mt-auto">
                  <a
                    href={`mailto:${bioData.email}`}
                    className="btn btn-primary btn-lg px-4 py-2 fw-semibold"
                    style={{ borderRadius: '25px' }}
                  >
                    <i className="bi bi-send me-2"></i>
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card with enhanced styling */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div
              className={`card h-100 border-0 text-center position-relative ${isDarkMode ? 'bg-dark text-light' : ''}`}
              style={{
                backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Decorative background */}
              <div
                className="position-absolute top-0 end-0 opacity-10"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, var(--accent-secondary) 0%, transparent 70%)',
                  borderRadius: '0 16px 0 50%',
                  transform: 'translate(20px, -20px)'
                }}
              ></div>

              <div className="card-body position-relative d-flex flex-column">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }}
                >
                  <i className="bi bi-telephone-fill" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5 className="card-title fw-bold mb-3">Call Me</h5>
                <p className={`card-text mb-4 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>{bioData.mobile}</p>
                <div className="mt-auto">
                  <a
                    href={`tel:${bioData.mobile}`}
                    className="btn btn-success btn-lg px-4 py-2 fw-semibold"
                    style={{ borderRadius: '25px' }}
                  >
                    <i className="bi bi-telephone me-2"></i>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card with enhanced styling */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div
              className={`card h-100 border-0 text-center position-relative ${isDarkMode ? 'bg-dark text-light' : ''}`}
              style={{
                backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Decorative background */}
              <div
                className="position-absolute top-0 end-0 opacity-10"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, var(--accent-tertiary) 0%, transparent 70%)',
                  borderRadius: '0 16px 0 50%',
                  transform: 'translate(20px, -20px)'
                }}
              ></div>

              <div className="card-body position-relative d-flex flex-column">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }}
                >
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5 className="card-title fw-bold mb-3">Location</h5>
                <p className={`card-text mb-4 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>{bioData.address}</p>
                <div className="mt-auto">
                  <button
                    className="btn btn-info btn-lg px-4 py-2 fw-semibold"
                    style={{ borderRadius: '25px' }}
                    disabled
                  >
                    <i className="bi bi-geo-alt me-2"></i>
                    View Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <SocialMedia/>

        {/* Divider */}
        <hr className={isDarkMode ? 'border-secondary' : ''} style={isDarkMode ? { borderColor: '#404060' } : {}} />

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className={`${isDarkMode ? 'text-light' : 'text-muted'} mb-0`}>
            © {new Date().getFullYear()} {bioData.name}. Built with ❤️ using React & Bootstrap.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
