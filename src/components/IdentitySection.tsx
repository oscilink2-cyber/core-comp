import './IdentitySection.css';

const IdentitySection = () => {
  return (
    <section className="identity-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="identity-header animate-fade-in">
          <div className="section-badge" style={{ textTransform: 'none', fontWeight: 700, letterSpacing: 'normal', color: '#000' }}>
            Our Identity
          </div>
          <h2 className="identity-title">
            A Symbol of Innovation, Intelligence, and Trust
          </h2>
        </div>

        {/* Top Grid: Associations & Subsidiaries */}
        <div className="identity-grid animate-fade-in delay-100">
          
          {/* Associations */}
          <div className="identity-group">
            <h3 className="group-title">Associations</h3>
            <div className="logo-row">
              <div className="logo-placeholder">YES</div>
              <div className="logo-placeholder">BNI</div>
              <div className="logo-placeholder">Rotary</div>
              <div className="logo-placeholder">MADITSSIA</div>
            </div>
          </div>

          {/* Subsidiaries */}
          <div className="identity-group">
            <h3 className="group-title">Our Subsidiaries</h3>
            <div className="logo-row justify-center">
              <div className="logo-placeholder wide">Sofia Infotech</div>
              <div className="logo-placeholder wide">InfoBus</div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Clients */}
        <div className="identity-group clients-group animate-fade-in delay-200">
          <h3 className="group-title">Clients</h3>
          <div className="logo-row justify-center flex-wrap">
            <div className="logo-placeholder wide">Thangamayil</div>
            <div className="logo-placeholder tall">KSHRC</div>
            <div className="logo-placeholder wide">LedGeo</div>
            <div className="logo-placeholder tall">TN Govt</div>
            <div className="logo-placeholder wide">TripleA</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IdentitySection;
