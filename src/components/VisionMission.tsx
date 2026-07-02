import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vm-section-light">
      <div className="container">
        <div className="vm-split-layout">
          
          <div className="vm-block vision-block animate-fade-in">
            <div className="vm-block-header">
               <span className="vm-label">01</span>
               <h3 className="vm-heading">Our Vision</h3>
            </div>
            <p className="vm-text">
              Building intelligent systems that connect technology with real-world impact.
            </p>
          </div>

          <div className="vm-divider"></div>

          <div className="vm-block mission-block animate-fade-in delay-100">
            <div className="vm-block-header">
               <span className="vm-label">02</span>
               <h3 className="vm-heading">Our Mission</h3>
            </div>
            <p className="vm-text">
              Delivering smart IoT, embedded, and software solutions that drive efficiency, automation, and sustainable digital transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
