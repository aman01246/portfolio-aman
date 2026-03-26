// Projects Section - Showcase past projects and achievements
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Projects = ({ bioData }) => {
  // Get dark mode state from context
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="projects"
      className={`py-5 ${isDarkMode ? 'bg-secondary' : 'bg-light'}`}
      style={isDarkMode ? { backgroundColor: '#1a1a2e' } : { backgroundColor: '#f8f9fa' }}
    >
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center mb-5 fw-bold">
          <span className="text-primary">My</span> Projects
        </h2>

        {/* Projects Grid */}
        <div className="row g-4">
          {bioData.project && bioData.project.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              {/* Project Card with enhanced styling */}
              <div
                className={`card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column position-relative ${
                  isDarkMode ? 'bg-dark text-light' : ''
                }`}
                style={{
                  minHeight: '550px',
                  backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Decorative background element */}
                <div
                  className="position-absolute top-0 end-0 opacity-25"
                  style={{
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(135deg, var(--accent-secondary) 0%, transparent 70%)`,
                    borderRadius: '0 16px 0 50%',
                    transform: 'translate(15px, -15px)'
                  }}
                ></div>

                {/* Project Header with enhanced design */}
                <div className="card-header bg-primary text-white border-0 py-4 position-relative">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <i className="bi bi-rocket-fill" style={{ fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h5 className="card-title mb-0 fw-bold text-primary">{project.title}</h5>
                      <small className="text-black opacity-75">{project.type} Project</small>
                    </div>
                  </div>
                </div>

                {/* Project Body with enhanced layout */}
                <div className="card-body d-flex flex-column flex-grow-1 position-relative">
                  {/* Project Type Badge with better design */}
                  <div className="mb-3">
                    <span className="badge bg-info text-dark fw-semibold px-3 py-2" style={{ borderRadius: '20px', fontSize: '0.85rem' }}>
                      <i className="bi bi-bookmark-check-fill me-1"></i>
                      {project.type}
                    </span>
                  </div>

                  {/* Project Description with better typography */}
                  <p className={`card-text mb-4 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`} style={{ lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  {/* Technology Stack with enhanced badges */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4">
                      <h6 className={`mb-3 ${isDarkMode ? 'text-light' : 'text-dark'} fw-semibold`}>
                        <i className="bi bi-gear-fill text-primary me-2"></i>
                        Technology Stack
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`badge ${isDarkMode ? 'bg-light text-dark' : 'bg-light text-dark'} border fw-medium`}
                            style={{
                              padding: '0.4rem 0.8rem',
                              borderRadius: '16px',
                              fontSize: '0.8rem',
                              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Highlights with enhanced styling */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-auto pt-4 border-top border-opacity-25">
                      <h6 className={`mb-3 ${isDarkMode ? 'text-light' : 'text-dark'} fw-semibold`}>
                        <i className="bi bi-star-fill text-warning me-2"></i>
                        Key Highlights
                      </h6>
                      <ul className="list-unstyled">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start">
                            <span
                              className="badge bg-success me-3 mt-1 d-flex align-items-center justify-content-center"
                              style={{
                                // minWidth: '24px',
                                // height: '24px',
                                // borderRadius: '50%',
                                // fontSize: '0.75rem'
                              }}
                            >
                              ✓
                            </span>
                            <span className={`small ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`} style={{ lineHeight: '1.5' }}>
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Project Footer - Always at bottom */}
                <div className="card-footer bg-transparent border-top-0 pt-0 mt-auto">
                  <button className="btn btn-sm btn-outline-primary w-100">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Summary */}
        <div className="row mt-5">
          <div className="col-12">
            <div className={`alert alert-success ${isDarkMode ? 'alert-dark' : ''}`}>
              <strong>✨ Achievement:</strong> Successfully completed {bioData.project?.length || 0} projects demonstrating strong problem-solving, development, and design skills with attention to user experience.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
