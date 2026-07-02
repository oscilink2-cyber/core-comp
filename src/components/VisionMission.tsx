import { Eye, Target } from 'lucide-react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vm-premium-section">
      <div className="container">
        <div className="vm-premium-grid">
          
          {/* Vision Card */}
          <div className="vm-premium-card vision-card animate-fade-in">
            <div className="vm-card-bg-glow"></div>
            <div className="vm-icon-container">
              <div className="vm-icon-inner bg-blue">
                <Eye className="vm-lucide-icon text-blue" />
              </div>
            </div>
            <h3 className="vm-card-title">Our Vision</h3>
            <p className="vm-card-text">
              Building intelligent systems that connect technology with real-world impact.
            </p>
          </div>

          {/* Mission Card */}
          <div className="vm-premium-card mission-card animate-fade-in delay-100">
            <div className="vm-card-bg-glow-alt"></div>
            <div className="vm-icon-container">
              <div className="vm-icon-inner bg-purple">
                <Target className="vm-lucide-icon text-purple" />
              </div>
            </div>
            <h3 className="vm-card-title">Our Mission</h3>
            <p className="vm-card-text">
              Delivering smart IoT, embedded, and software solutions that drive efficiency, automation, and sustainable digital transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
