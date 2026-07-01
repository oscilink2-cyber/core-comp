import { ArrowRight } from 'lucide-react';
import './Cta.css';

const Cta = () => {
  return (
    <section id="contact" className="section cta-section">
      <div className="container">
        <div className="cta-container glass-panel">
          <div className="cta-content">
            <h2>Ready to transform your business?</h2>
            <p className="cta-description">
              Join hundreds of companies that trust us to build their digital presence and drive unprecedented growth.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary btn-lg">
              Get in touch <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
