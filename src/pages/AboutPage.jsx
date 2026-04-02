import React from 'react';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <PageHeader title="ABOUT US" breadcrumb="About us" />
      
      <section className="container section-padding about-section">
        
        {/* Stats Row */}
        <div className="about-stats-grid">
          <div>
            <div className="about-stat-number">10k+</div>
            <div className="about-stat-label">Satisfied Clients</div>
          </div>
          <div>
            <div className="about-stat-number">15+</div>
            <div className="about-stat-label">Years Experience</div>
          </div>
          <div>
            <div className="about-stat-number">25k+</div>
            <div className="about-stat-label">Products Sold</div>
          </div>
          <div>
            <div className="about-stat-number">5+</div>
            <div className="about-stat-label">Awards Winning</div>
          </div>
        </div>

        {/* Info Block */}
        <div className="about-info-grid">
          <div>
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80" alt="Workspace" className="about-info-img" />
          </div>
          <div>
            <h2 className="about-info-title">
              HOW WAS MINISTORE FOUNDED?
            </h2>
            <p className="about-info-desc">
              Synergistically truncheon convergence through highly efficient bandwidth. Seamlessly target integrated interfaces vis-a-vis superior potentialities. Proactively enable cross-platform best practices rather than enabled experiences.
            </p>
            <p className="about-info-desc about-info-desc-mb">
              Dynamically formulate value-added interfaces with effective deliverables. Phosfluorescently repurpose fully researched core competencies after resource-leveling internal or "organic" sources.
            </p>
            <button className="btn-dark">READ MORE</button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="about-testimonial">
          <div className="about-quote-icon">"</div>
          <p className="about-quote-text">
            Tempus imperdiet pellentesque nullam tortor sit et imperdiet proin proin congue sit sed est facilise mi tristique nisl non tempus.
          </p>
          <div className="about-rating">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
        
      </section>

      <Newsletter />
    </>
  );
};

export default AboutPage;
