import { Eye, Target } from 'lucide-react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vm-section">
      <div className="container">
        <div className="vm-grid">
          
          <div className="vm-card animate-fade-in">
            <div className="vm-icon-wrapper">
              <Eye className="vm-icon" />
            </div>
            <h3 className="vm-title">Vision</h3>
            <p className="vm-description">
              Building intelligent systems that connect technology with real-world impact.
            </p>
          </div>

          <div className="vm-card animate-fade-in delay-100">
            <div className="vm-icon-wrapper">
              <Target className="vm-icon" />
            </div>
            <h3 className="vm-title">Mission</h3>
            <p className="vm-description">
              Delivering smart IoT, embedded, and software solutions that drive efficiency, automation, and sustainable digital transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
