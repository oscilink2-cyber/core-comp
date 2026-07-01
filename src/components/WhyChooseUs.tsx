import './WhyChooseUs.css';

const reasons = [
  "Proven deployment in Tamil Nadu Government buses",
  "Scalable solution for multi-city bus fleets",
  "Cloud-based centralized control from a single office",
  "Designed for Indian public transport conditions",
  "Reliable performance with minimal maintenance"
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose-grid">
          
          <div className="why-choose-left">
            <h2 className="why-choose-title">
              Why Choose<br />Silicon Harvest
            </h2>
          </div>
          
          <div className="why-choose-right">
            <ul className="why-choose-list">
              {reasons.map((reason, idx) => (
                <li key={idx} className="why-choose-item">
                  <span className="why-choose-icon">*</span>
                  <p className="why-choose-text">{reason}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
