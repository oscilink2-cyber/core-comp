import { 
  Settings2, MonitorPlay, 
  Cpu, ShieldCheck, Activity, Cloud
} from 'lucide-react';
import './Features.css';

const features = [
  {
    title: 'End-to-End Solutions',
    description: 'We provide complete solutions covering hardware, software, connectivity, and dashboards for seamless system integration.',
    illustration: (
      <div className="illust-end-to-end">
        <div className="illust-node node-hw"><Cpu size={18} /></div>
        <div className="illust-conn conn-1"></div>
        <div className="illust-node node-cloud"><Cloud size={24} /></div>
        <div className="illust-conn conn-2"></div>
        <div className="illust-node node-sw"><MonitorPlay size={18} /></div>
      </div>
    )
  },
  {
    title: 'Smart & Automated Systems',
    description: 'Our solutions enable automation through GPS, IoT, and intelligent controllers to improve accuracy and operational efficiency.',
    illustration: (
      <div className="illust-smart">
        <div className="smart-dashboard">
          <div className="smart-header">
             <div className="smart-dot red"></div>
             <div className="smart-dot yellow"></div>
             <div className="smart-dot green"></div>
          </div>
          <div className="smart-body">
             <div className="smart-bar-group">
                <div className="smart-bar h-1"></div>
                <div className="smart-bar h-2"></div>
                <div className="smart-bar h-3"></div>
             </div>
             <Settings2 className="smart-icon" size={20} />
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Track devices, data, and operations in real time using centralized dashboards with remote access and control.',
    illustration: (
      <div className="illust-monitor">
        <div className="monitor-screen">
           <Activity className="monitor-activity" size={28} />
        </div>
        <div className="monitor-pulse">
           <div className="pulse-dot"></div>
           <span>Live Status</span>
        </div>
      </div>
    )
  },
  {
    title: 'Scalable & Secure Design',
    description: 'Built with enterprise-grade security and scalability to support future growth and evolving business needs.',
    illustration: (
      <div className="illust-secure">
         <div className="server-stack">
            <div className="server-unit"></div>
            <div className="server-unit"></div>
            <div className="server-unit active"></div>
         </div>
         <div className="shield-badge">
            <ShieldCheck size={24} />
         </div>
      </div>
    )
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        
        <div className="feat-header animate-fade-in">
          <span className="feat-badge">[ EFFICIENT ENERGY ]</span>
          <h2 className="feat-title">
            Smarter Energy. Better Performance
          </h2>
        </div>

        <div className="feat-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feat-card animate-fade-in delay-${(index + 1) * 100}`}>
              
              {/* Graphic Area */}
              <div className="feat-graphic-area">
                {feature.illustration}
              </div>

              {/* Text Area */}
              <div className="feat-text-area">
                <h3 className="feat-card-title">{feature.title}</h3>
                <p className="feat-card-desc">{feature.description}</p>
              </div>

              {/* Bottom Padding Area */}
              <div className="feat-bottom-padding"></div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
