// Hero/Header Section - First impression component
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Hero = ({ bioData }) => {
  // Get dark mode state from context
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="home"
      className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}
      style={isDarkMode ? 
        { backgroundColor: '#0d1117', backgroundImage: 'linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)' } 
        : { backgroundColor: '#f8f9fa', backgroundImage: 'linear-gradient(135deg, rgba(13, 110, 253, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)' }
      }
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left side - Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-primary">{bioData.name}</span>
            </h1>
            <h2 className="h4 mb-3 ">{bioData.job_title}</h2>
            <p className="lead mb-4">{bioData.about_me}</p>

            {/* Contact Information Buttons */}
            <div className="d-flex gap-3 flex-wrap">
              <a href={`mailto:${bioData.email}`} className="btn btn-primary btn-lg">
               <span className='bi bi-envelope me-2'> Email Me </span>
              </a>
              <a href={`tel:${bioData.mobile}`} className="btn btn-outline-primary btn-lg">
                <samp className='bi bi-telephone me-2'> Call Me </samp> 
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="col-lg-6 text-center">
            <div className="position-relative d-inline-block">
              <div
                className={`${isDarkMode ? 'bg-secondary' : 'bg-light'} p-2 rounded-circle`}
                style={{
                  width: '400px',
                  height: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '120px',
                  
                }}
              >     
              <img src={bioData.image} alt="" 
                className="rounded-circle shadow" 
                style={{ 
                    width: '350px',
                    height: '350px', 
                    objectFit: 'cover',
                }}
              />        
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
