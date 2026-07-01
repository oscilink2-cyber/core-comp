import { Cpu, Layout, Activity, ShieldCheck } from 'lucide-react';
import './AboutCompany.css';

const AboutCompany = () => {
  return (
    <section className="about-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="about-header animate-fade-in">
          <div className="section-badge">
            [ WHO WE ARE ]
          </div>
          <h2 className="about-title">
            Architecting the Future of <br/> Connected Infrastructure
          </h2>
        </div>

        {/* Text Content */}
        <div className="about-text-content animate-fade-in delay-100">
          <p className="about-description highlight">
            Silicon Harvest is a technology-driven company specializing in IoT products, 
            controller-based hardware, and intelligent software systems.
          </p>
          <p className="about-description">
            With a strong focus on smart public transport solutions, we deliver end-to-end 
            systems by integrating embedded hardware, sensors, connectivity, applications, 
            and real-time dashboards. Our GPS-based bus stop announcement system, deployed 
            in Tamil Nadu Government buses, showcases our commitment to innovation and 
            customer-centric digital transformation.
          </p>
          <div className="about-cta">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>

        {/* Bottom Features Cards */}
        <div className="about-features-row animate-fade-in delay-300">
          <div className="feature-card">
            <Cpu className="feature-card-icon" />
            <h3>IoT & Embedded</h3>
            <p>Hardware Solutions</p>
          </div>
          <div className="feature-card">
            <Layout className="feature-card-icon" />
            <h3>Smart Systems</h3>
            <p>Public Transport</p>
          </div>
          <div className="feature-card">
            <ShieldCheck className="feature-card-icon" />
            <h3>Custom Software</h3>
            <p>Enterprise Applications</p>
          </div>
          <div className="feature-card">
            <Activity className="feature-card-icon" />
            <h3>Real-Time Data</h3>
            <p>Monitoring & Analytics</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCompany;
