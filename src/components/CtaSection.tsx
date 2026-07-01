import { ArrowRight } from 'lucide-react';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner">
          
          {/* Subtle Tech Lines Background */}
          <div className="cta-bg-lines">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left Lines */}
              <path d="M -10 80 L 120 80 L 160 140 L 160 260 L 120 320 L -10 320" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <circle cx="120" cy="80" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              
              {/* Right Lines */}
              <path d="M 1010 80 L 880 80 L 840 140 L 840 260 L 880 320 L 1010 320" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <circle cx="880" cy="80" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              
              {/* Bottom Center Lines */}
              <path d="M 400 410 L 400 340 L 460 300 L 490 300 L 490 280" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <circle cx="490" cy="280" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              
              <path d="M 600 410 L 600 340 L 540 300 L 510 300 L 510 280" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <circle cx="510" cy="280" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="cta-content">
            <h2 className="cta-title">
              Have Questions? Call Us +91 90877 758511
            </h2>
            <p className="cta-desc">
              Connect with our experts for quick support and customized technology solutions.
            </p>
            
            <div className="cta-actions">
              <a href="tel:+9190877758511" className="cta-btn primary">
                Call Now <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
