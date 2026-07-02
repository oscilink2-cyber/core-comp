import IotAnimation from './IotAnimation';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-container">

          {/* Left Content */}
          <div className="hero-content">


            <h1 className="hero-title animate-fade-in delay-100">
              Enterprise IoT<br />
              Data Infrastructure
            </h1>

            <p className="hero-subtitle animate-fade-in delay-200">
              We connect the physical world to your digital ecosystem. Seamlessly ingest,
              process, and analyze millions of data points from sensors, machines, and
              edge devices in real-time.
            </p>

            <div className="hero-actions animate-fade-in delay-300">
              <button className="btn btn-primary">
                Book a demo
              </button>
              <button className="btn btn-secondary">
                Explore platform
              </button>
            </div>
          </div>

          {/* Right Image Graphic */}
          <div className="hero-graphic animate-fade-in delay-300">
            <IotAnimation />
          </div>

        </div>
      </section>

      {/* Client Logo Strip */}
      <div className="logo-strip animate-fade-in delay-300">
        <div className="logo-strip-container">

          <div className="logo-item">
            <div className="metric-box">
              <span className="metric-number">15+</span>
              <span className="metric-label">Products</span>
            </div>
          </div>

          <div className="logo-item">
            <div className="metric-box">
              <span className="metric-number">22+</span>
              <span className="metric-label">Years of Experience</span>
            </div>
          </div>

          <div className="logo-item">
            <div className="metric-box">
              <span className="metric-number">50+</span>
              <span className="metric-label">Happy Clients</span>
            </div>
          </div>

          <div className="logo-item">
            <div className="metric-box">
              <span className="metric-number">1000+</span>
              <span className="metric-label">Devices installed</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
