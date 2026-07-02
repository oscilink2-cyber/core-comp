import { Settings, Bus, Droplet, Landmark } from 'lucide-react';
import './IdentitySection.css';

const IdentitySection = () => {
  return (
    <section className="identity-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="identity-header animate-fade-in">
          <div className="bracket-badge">
            [ OUR IDENTITY ]
          </div>
          <h2 className="identity-title">
            A Symbol of Innovation, Intelligence, and Trust
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="identity-bento-grid animate-fade-in delay-100">
          
          {/* Associations Card (Top Left) */}
          <div className="bento-card col-span-2">
            <h3 className="bento-title">Associations</h3>
            <p className="bento-desc">Proud members of industry-leading organizations driving innovation and excellence.</p>
            <div className="bento-logos-wrap horizontal">
              <div className="sponsor-logo yes-logo">
                <span className="yes-main">YES</span>
                <span className="yes-sub">Young Entrepreneur School</span>
              </div>
              <div className="sponsor-logo bni-logo">
                <span className="bni-text">BNI<span className="bni-reg">&reg;</span></span>
              </div>
              <div className="sponsor-logo rotary-logo">
                <Settings className="rotary-icon" size={48} />
              </div>
              <div className="sponsor-logo mad-logo">
                <div className="mad-box">MADITSSIA</div>
              </div>
            </div>
          </div>

          {/* Subsidiaries Card (Top Right) */}
          <div className="bento-card col-span-1">
            <h3 className="bento-title">Our Subsidiaries</h3>
            <p className="bento-desc">Specialized ventures delivering targeted technological solutions.</p>
            <div className="bento-logos-wrap vertical">
              <div className="sponsor-logo sofia-logo">
                <div className="sofia-main">Sofia Infotech</div>
                <div className="sofia-sub">Tech Enabled Wisdom</div>
              </div>
              <div className="infobus-container">
                <div className="sponsor-logo infobus-logo">
                  <span className="ib-red">Inf</span>
                  <Bus className="ib-icon" size={28} />
                  <span className="ib-red">Bus</span>
                </div>
                <span className="ib-sub">Advertising Private Limited</span>
              </div>
            </div>
          </div>

          {/* Clients Card (Bottom Full Width) */}
          <div className="bento-card col-span-3" style={{ overflow: 'hidden' }}>
            <h3 className="bento-title">Clients</h3>
            <p className="bento-desc">Trusted by industry leaders and government institutions to deliver mission-critical solutions.</p>
            <div className="marquee-container">
              <div className="marquee-content">
                
                {/* First Set */}
                <div className="sponsor-logo tm-logo">
                  <div className="tm-box">
                    <span className="tm-text">தங்கமயில்</span>
                    <span className="tm-sub">Jewellery</span>
                  </div>
                </div>

                <div className="sponsor-logo kshrc-logo">
                  <Droplet color="#0284c7" size={40} className="kshrc-icon" />
                  <span className="kshrc-main">KSHRC</span>
                  <span className="kshrc-sub">KOKILA SIDDHA HOSPITAL<br/>AND RESEARCH CENTRE</span>
                </div>

                <div className="sponsor-logo ledgeo-logo">
                  <div className="ledgeo-main">Led<span style={{fontWeight: 400}}>Geo</span></div>
                  <div className="ledgeo-sub">SWITCH ON TO GREEN PLANET</div>
                </div>

                <div className="sponsor-logo tn-logo">
                  <div className="tn-circle">
                    <Landmark size={36} color="#059669" />
                  </div>
                </div>

                <div className="sponsor-logo triplea-logo">
                  <span className="ta-main">Triple<span className="ta-a">A</span></span>
                  <span className="ta-sub">Signage</span>
                </div>

                {/* Second Set (Duplicated for seamless loop) */}
                <div className="sponsor-logo tm-logo">
                  <div className="tm-box">
                    <span className="tm-text">தங்கமயில்</span>
                    <span className="tm-sub">Jewellery</span>
                  </div>
                </div>

                <div className="sponsor-logo kshrc-logo">
                  <Droplet color="#0284c7" size={40} className="kshrc-icon" />
                  <span className="kshrc-main">KSHRC</span>
                  <span className="kshrc-sub">KOKILA SIDDHA HOSPITAL<br/>AND RESEARCH CENTRE</span>
                </div>

                <div className="sponsor-logo ledgeo-logo">
                  <div className="ledgeo-main">Led<span style={{fontWeight: 400}}>Geo</span></div>
                  <div className="ledgeo-sub">SWITCH ON TO GREEN PLANET</div>
                </div>

                <div className="sponsor-logo tn-logo">
                  <div className="tn-circle">
                    <Landmark size={36} color="#059669" />
                  </div>
                </div>

                <div className="sponsor-logo triplea-logo">
                  <span className="ta-main">Triple<span className="ta-a">A</span></span>
                  <span className="ta-sub">Signage</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IdentitySection;
