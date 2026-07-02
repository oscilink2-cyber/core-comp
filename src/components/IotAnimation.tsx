import { Activity, Wifi, Thermometer, Router, Cloud, Database, Monitor } from 'lucide-react';
import './IotAnimation.css';

const IotAnimation = () => {
  return (
    <div className="iot-scale-wrapper">
      <div className="iot-animation-wrapper">
        <div className="iot-bg-elements">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
      
      <svg className="iot-svg-layer" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet">
        {/* Connection Paths */}
        <g className="connection-paths">
          <path d="M50 100 C 120 100, 120 250, 200 250" className="link-path" />
          <path d="M50 250 L 200 250" className="link-path" />
          <path d="M50 400 C 120 400, 120 250, 200 250" className="link-path" />
          
          <path d="M200 250 C 300 250, 300 150, 400 150" className="link-path" />
          <path d="M200 250 C 300 250, 300 350, 400 350" className="link-path" />
          
          <path d="M400 150 C 480 150, 480 250, 550 250" className="link-path" />
          <path d="M400 350 C 480 350, 480 250, 550 250" className="link-path" />
        </g>
        
        {/* Animated Data Particles */}
        <g className="data-particles">
          {/* Sensors to Edge */}
          <circle r="4" className="particle p-1">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M50 100 C 120 100, 120 250, 200 250" />
          </circle>
          <circle r="4" className="particle p-2">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M50 250 L 200 250" />
          </circle>
          <circle r="4" className="particle p-3">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M50 400 C 120 400, 120 250, 200 250" />
          </circle>
          
          {/* Edge to Cloud */}
          <circle r="5" className="particle p-core p-4">
            <animateMotion dur="2s" repeatCount="indefinite" path="M200 250 C 300 250, 300 150, 400 150" />
          </circle>
          <circle r="5" className="particle p-core p-5">
            <animateMotion dur="2.3s" repeatCount="indefinite" path="M200 250 C 300 250, 300 350, 400 350" />
          </circle>
          
          {/* Cloud to Client */}
          <circle r="4" className="particle p-6">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M400 150 C 480 150, 480 250, 550 250" />
          </circle>
          <circle r="4" className="particle p-7">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M400 350 C 480 350, 480 250, 550 250" />
          </circle>
        </g>
      </svg>
      
      {/* HTML Nodes overlay */}
      <div className="iot-html-layer">
        
        {/* Layer 1: Sensors */}
        <div className="node-group sensors">
          <div className="iot-node sensor-node" style={{ top: '100px', left: '50px' }}>
            <div className="pulse-ring"></div>
            <Thermometer className="icon" size={20} />
            <span className="node-label">Environment</span>
          </div>
          <div className="iot-node sensor-node" style={{ top: '250px', left: '50px' }}>
            <div className="pulse-ring delay-1"></div>
            <Activity className="icon" size={20} />
            <span className="node-label">Telemetry</span>
          </div>
          <div className="iot-node sensor-node" style={{ top: '400px', left: '50px' }}>
            <div className="pulse-ring delay-2"></div>
            <Wifi className="icon" size={20} />
            <span className="node-label">Smart Devices</span>
          </div>
        </div>

        {/* Layer 2: Edge */}
        <div className="iot-node edge-node" style={{ top: '250px', left: '200px' }}>
          <div className="node-halo"></div>
          <Router className="icon edge-icon" size={28} />
          <span className="node-label">Edge Gateway</span>
          <div className="data-badge processing">Processing...</div>
        </div>

        {/* Layer 3: Cloud Infrastructure */}
        <div className="node-group cloud">
          <div className="iot-node cloud-node" style={{ top: '150px', left: '400px' }}>
            <Cloud className="icon cloud-icon" size={24} />
            <span className="node-label">Cloud AI Core</span>
          </div>
          <div className="iot-node cloud-node" style={{ top: '350px', left: '400px' }}>
            <Database className="icon cloud-icon" size={24} />
            <span className="node-label">Time-Series DB</span>
          </div>
        </div>

        {/* Layer 4: Client / Analytics */}
        <div className="iot-node client-node" style={{ top: '250px', left: '550px' }}>
          <div className="node-halo client-halo"></div>
          <Monitor className="icon client-icon" size={28} />
          <span className="node-label">Analytics Dash</span>
          <div className="data-badge live">Live Sync</div>
        </div>
        
      </div>
        
      </div>
    </div>
  );
};

export default IotAnimation;
