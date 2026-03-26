// Skills Section - Display all professional skills with improved data structure
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Skills = ({ bioData }) => {
  // Get dark mode state from context
  const { isDarkMode } = useContext(DarkModeContext);

  // Helper function to get proficiency badge color
  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Advanced':
        return 'badge bg-success';
      case 'Intermediate':
        return 'badge bg-info text-dark';
      case 'Beginner':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
    }
  };

  return (
    <section
      id="skills"
      className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}
      style={isDarkMode ? { backgroundColor: '#0d1117' } : { backgroundColor: '#f8f9fa' }}
    >
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center mb-5 fw-bold">
          <span className="text-primary">My</span> Skills
        </h2>

        {/* Skills Grid - Display each skill category */}
        <div className="row g-4">
          {bioData.skills && bioData.skills.map((skillGroup, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              {/* Skill Category Card with enhanced styling */}
              <div
                className={`card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column position-relative ${
                  isDarkMode ? 'bg-dark text-light' : ''
                }`}
                style={{
                  minHeight: '450px',
                  backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Decorative background element */}
                <div
                  className="position-absolute top-0 end-0 opacity-25"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: `linear-gradient(135deg, ${skillGroup.icon ? 'var(--accent-primary)' : 'var(--accent-secondary)'} 0%, transparent 70%)`,
                    borderRadius: '0 16px 0 50%',
                    transform: 'translate(20px, -20px)'
                  }}
                ></div>

                {/* Card Header with enhanced gradient */}
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
                      <span style={{ fontSize: '1.8rem' }}>
                        {skillGroup.icon}
                      </span>
                    </div>
                    <div>
                      <h5 className="card-title mb-0 text-primary fw-bold">{skillGroup.category}</h5>
                      <small className="opacity-75 text-black">Professional Skills</small>
                    </div>
                  </div>
                </div>

                {/* Card Body with enhanced layout */}
                <div className="card-body d-flex flex-column flex-grow-1 position-relative">
                  {/* Description with better typography */}
                  <p className={`card-text mb-4 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`} style={{ lineHeight: '1.6' }}>
                    {skillGroup.description}
                  </p>

                  {/* Skills Items List with enhanced styling */}
                  <div className="mb-4 flex-grow-1">
                    <h6 className={`mb-3 ${isDarkMode ? 'text-light' : 'text-dark'} fw-semibold`}>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Key Skills
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {skillGroup.items && skillGroup.items.map((item, i) => (
                        <span
                          key={i}
                          className={`badge ${isDarkMode ? 'bg-light text-dark' : 'bg-light text-dark'} border`}
                          style={{
                            padding: '0.5rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Proficiency Level with enhanced design */}
                  <div className="mt-auto pt-4 border-top border-opacity-25">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <small className={`${isDarkMode ? 'text-light opacity-75' : 'text-muted'} d-block`}>Proficiency Level</small>
                        <div className="progress mt-2" style={{ height: '6px', width: '120px' }}>
                          <div
                            className={`progress-bar ${getProficiencyColor(skillGroup.proficiency).includes('success') ? 'bg-success' :
                              getProficiencyColor(skillGroup.proficiency).includes('info') ? 'bg-info' :
                              getProficiencyColor(skillGroup.proficiency).includes('warning') ? 'bg-warning' : 'bg-secondary'}`}
                            style={{
                              width: skillGroup.proficiency === 'Advanced' ? '90%' :
                                     skillGroup.proficiency === 'Intermediate' ? '70%' : '40%'
                            }}
                          ></div>
                        </div>
                      </div>
                      <span className={`${getProficiencyColor(skillGroup.proficiency)} fw-semibold px-3 py-1`} style={{ borderRadius: '20px' }}>
                        {skillGroup.proficiency}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary Statistics */}
        <div className="row mt-5">
          <div className="col-12">
            <div className={`card border-0 ${isDarkMode ? 'bg-dark text-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title text-primary mb-4">
                    <span className="bi bi-bar-chart-line-fill me-2"></span>
                  Skills Overview
                </h5>
                <div className="row g-3">
                  {/* Total Skills Count */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-primary">
                        {bioData.skills ? bioData.skills.reduce((acc, skill) => acc + (skill.items?.length || 0), 0) : 0}
                      </div>
                      <p className="text-muted mb-0">Total Skills</p>
                    </div>
                  </div>

                  {/* Skill Categories */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-primary">
                        {bioData.skills?.length || 0}
                      </div>
                      <p className="text-muted mb-0">Categories</p>
                    </div>
                  </div>

                  {/* Proficiency Areas */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-info">
                        {bioData.skills ? bioData.skills.filter(s => s.proficiency === 'Intermediate').length : 0}
                      </div>
                      <p className="text-muted mb-0">Intermediate</p>
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-success">
                        3+
                      </div>
                      <p className="text-muted mb-0">Years Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths Section */}
        {bioData.strengths && (
          <div className="row mt-4">
            <div className="col-12">
              <div className={`alert alert-success ${isDarkMode ? 'alert-dark' : ''}`}>
                <h6 className="text-primary mb-3"> <span className="bi bi-lightning-fill me-2"></span>Core Strengths</h6>
                <div className="row">
                  {bioData.strengths.map((strength, index) => (
                    <div key={index} className="col-md-6 mb-2">
                      <div className="d-flex align-items-start">
                        <span className="badge bg-success me-2 mt-1">✓</span>
                        <span>{strength}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
