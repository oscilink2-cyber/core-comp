import './AboutCompany.css';

const AboutCompany = () => {
  return (
    <section className="about-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="about-header animate-fade-in">
          <div className="section-badge" style={{ textTransform: 'none', fontWeight: 700, letterSpacing: 'normal', color: '#000' }}>
            Who We Are
          </div>
          <h2 className="about-title" style={{ fontSize: '3rem' }}>
            Connecting Hardware, Software, and Intelligence
          </h2>
        </div>

        {/* Text Content */}
        <div className="about-text-content animate-fade-in delay-100" style={{ maxWidth: '1000px' }}>
          <p className="about-description">
            Silicon Harvest is a technology-driven company specializing in IoT products, controller-based hardware solutions, and intelligent software systems, with a strong focus on smart public transport technologies. We design end-to-end solutions that integrate embedded hardware, sensors, GPS, connectivity, and real-time dashboards to support smart and automated operations.
          </p>
          <p className="about-description">
            Along with product development, we provide enterprise and corporate software solutions including staff management systems, operational monitoring platforms, and customized applications. Our solutions help organizations streamline workforce management, reporting, and administrative processes while improving efficiency and visibility.
          </p>
          <p className="about-description">
            Our flagship GPS-based bus stop announcement system is successfully deployed in Tamil Nadu Government buses, demonstrating our capability to deliver reliable, large-scale IoT solutions. With strong in-house expertise and a customer-centric approach, Silicon Harvest delivers scalable, secure, and innovative systems that drive sustainable digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
