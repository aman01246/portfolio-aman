// Education Section - Display academic qualifications with improved structure
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Education = ({ bioData }) => {
  // Get dark mode state from context
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="education"
      className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}
      style={isDarkMode ? { backgroundColor: '#0d1117' } : { backgroundColor: '#f8f9fa' }}
    >
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center mb-5 fw-bold">
          <span className="text-primary">Education</span> & Certifications
        </h2>

        {/* Education Timeline */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="timeline">
              {bioData.education && bioData.education.map((edu, index) => (
                <div key={index} className="timeline-item mb-4">
                  {/* Timeline marker */}
                  <div className="timeline-marker"></div>

                  {/* Education details card */}
                  <div className={`card border-0 ${isDarkMode ? 'bg-dark text-light' : ''}`} style={{ backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff' }}>
                    <div className="card-body">
                      {/* Degree */}
                      <h5 className="card-title text-primary mb-2">
                        🎓 {edu.degree}
                      </h5>

                      {/* Institution */}
                      <p className="card-text mb-2">
                        <strong>Institution:</strong> {edu.institution}
                      </p>

                      {/* Status and Details */}
                      <p className="card-text mb-2">
                        {edu.status && (
                          <span>
                            <strong>Status:</strong> {edu.status}
                            {edu.semester && ` - ${edu.semester}`}
                          </span>
                        )}
                      </p>

                      {/* Year */}
                      <p className="card-text">
                        <strong>Year:</strong> {edu.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Section */}
        {bioData.training && (
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
            <div className={`card border-0 ${isDarkMode ? 'bg-dark text-light' : ''}`} style={{ backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff' }}>
                <div className="card-header bg-primary text-white border-0">
                  <h5 className="card-title mb-0">
                    <span className="bi bi-briefcase-fill me-2"></span>
                     Professional Training
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text mb-3">
                    <strong>{bioData.training.program}</strong>
                  </p>
                  <p className="card-text mb-2">
                    <strong>Institution:</strong> {bioData.training.institution}
                  </p>
                  <p className="card-text mb-3">
                    <strong>Duration:</strong> {bioData.training.duration}
                  </p>
                  <p className="card-text mb-3">{bioData.training.description}</p>

                  {/* Training Achievements */}
                  {bioData.training.achievements && (
                    <div>
                      <h6 className="text-primary mt-3 mb-2">Key Achievements:</h6>
                      <ul className="list-unstyled">
                        {bioData.training.achievements.map((achievement, i) => (
                          <li key={i} className="mb-2">
                            <span className="badge bg-primary me-2">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {bioData.certifications && bioData.certifications.length > 0 && (
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <h5 className="text-primary mb-4">🏆 Certifications</h5>
              <div className="row g-3">
                {bioData.certifications.map((cert, index) => (
                  <div key={index} className="col-md-6">
                    <div className={`card border-0 ${isDarkMode ? 'bg-dark text-light' : ''}`} style={{ backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff' }}>
                      <div className="card-body">
                        <h6 className="card-title text-primary mb-2">{cert.title}</h6>
                        <p className="card-text small mb-1">
                          <strong>Issuer:</strong> {cert.issuer}
                        </p>
                        <p className="card-text small">
                          <strong>Year:</strong> {cert.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Internal Styles for Timeline */}
      <style>{`
        .timeline {
          position: relative;
          padding-left: 30px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--bs-primary);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-marker {
          position: absolute;
          left: -38px;
          top: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid white;
          background: var(--bs-primary);
        }

        .timeline-item .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-item .card:hover {
          transform: translateX(10px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Education;
