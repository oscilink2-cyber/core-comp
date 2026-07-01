import { Cpu, Code, BusFront } from 'lucide-react';
import './Capabilities.css';

const Capabilities = () => {
  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="cap-editorial-layout">
          
          {/* Left Column: Sticky Header */}
          <div className="cap-sticky-header animate-fade-in">
            <span className="cap-badge">[ TECHNOLOGY CAPABILITIES ]</span>
            <h2 className="cap-title">
              Smart Solutions for Intelligent Systems
            </h2>
            <p className="cap-desc">
              Silicon Harvest delivers advanced IoT, embedded hardware, and intelligent software solutions designed to support smart public transport and enterprise operations. Our systems are built to improve automation, visibility, and decision-making through real-time data and centralized control.
            </p>
            <p className="cap-desc">
              We combine deep technical expertise with practical deployment experience to ensure reliable, scalable, and future-ready solutions tailored to organizational needs.
            </p>
          </div>

          {/* Right Column: Capabilities List */}
          <div className="cap-list">
            
            {/* Item 1 */}
            <div className="cap-list-item animate-fade-in delay-100">
              <div className="cap-item-top">
                <div className="cap-item-icon-box">
                  <Cpu size={24} />
                </div>
                <div className="cap-item-number-tag">01</div>
              </div>
              <div className="cap-item-content">
                <h3 className="cap-item-title">IoT & Embedded Systems</h3>
                <p className="cap-item-text">
                  Custom PCB design, microcontroller firmware, and robust edge computing hardware built to survive industrial environments and ensure high reliability.
                </p>
                <div className="cap-item-metric">
                  <span className="metric-label">System Reliability</span>
                  <div className="metric-bar-bg">
                    <div className="metric-bar-fill" style={{ width: '95%' }}></div>
                  </div>
                  <span className="metric-value">95%</span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="cap-list-item animate-fade-in delay-200">
              <div className="cap-item-top">
                <div className="cap-item-icon-box">
                  <Code size={24} />
                </div>
                <div className="cap-item-number-tag">02</div>
              </div>
              <div className="cap-item-content">
                <h3 className="cap-item-title">Enterprise Software</h3>
                <p className="cap-item-text">
                  Scalable cloud architectures, real-time data processing pipelines, and highly secure API gateways for centralized fleet and asset control.
                </p>
                <div className="cap-item-metric">
                  <span className="metric-label">Integration Coverage</span>
                  <div className="metric-bar-bg">
                    <div className="metric-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                  <span className="metric-value">85%</span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="cap-list-item animate-fade-in delay-300">
              <div className="cap-item-top">
                <div className="cap-item-icon-box">
                  <BusFront size={24} />
                </div>
                <div className="cap-item-number-tag">03</div>
              </div>
              <div className="cap-item-content">
                <h3 className="cap-item-title">Public Transport Automation</h3>
                <p className="cap-item-text">
                  GPS-driven stop announcements, passenger counting, and fleet telemetry integrated seamlessly into daily transit operations.
                </p>
                <div className="cap-item-metric">
                  <span className="metric-label">Automation Efficiency</span>
                  <div className="metric-bar-bg">
                    <div className="metric-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                  <span className="metric-value">90%</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Capabilities;
