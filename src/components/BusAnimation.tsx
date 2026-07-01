import { Cpu, Radio, Activity, Database } from 'lucide-react';
import './BusAnimation.css';

const BusAnimation = () => {
  return (
    <div className="system-animation-wrapper">
      
      {/* Top Header / Status Bar */}
      <div className="sys-header">
        <div className="sys-status">
          <div className="sys-status-dot"></div>
          <span>LIVE TRACKING ACTIVE</span>
        </div>
        <div className="sys-id">TN-SYS-994</div>
      </div>

      <div className="sys-grid">
        
        {/* Left: Radar / Map Tracking */}
        <div className="sys-radar-panel">
          <div className="radar-container">
            <div className="radar-circle circle-1"></div>
            <div className="radar-circle circle-2"></div>
            <div className="radar-circle circle-3"></div>
            
            <div className="radar-sweep"></div>
            
            {/* Blinking Targets */}
            <div className="radar-target target-1">
              <div className="target-ping"></div>
            </div>
            <div className="radar-target target-2">
              <div className="target-ping"></div>
            </div>
            <div className="radar-target target-3">
              <div className="target-ping"></div>
            </div>
          </div>
          <div className="radar-label">
            <Radio size={14} /> GPS FLEET NETWORK
          </div>
        </div>

        {/* Right: Hardware & Processing logs */}
        <div className="sys-hardware-panel">
          
          {/* Central CPU */}
          <div className="cpu-core-container">
            <div className="cpu-pulse-ring"></div>
            <div className="cpu-core">
              <Cpu size={24} className="cpu-icon" />
            </div>
            <div className="cpu-lines left-lines">
               <div className="c-line l-1"></div>
               <div className="c-line l-2"></div>
            </div>
            <div className="cpu-lines right-lines">
               <div className="c-line r-1"></div>
               <div className="c-line r-2"></div>
            </div>
          </div>

          {/* Animated Metrics */}
          <div className="sys-metrics">
            <div className="metric-row">
              <div className="metric-label"><Activity size={12} /> INGESTION</div>
              <div className="metric-bar-bg">
                <div className="metric-bar bar-orange"></div>
              </div>
            </div>
            <div className="metric-row">
              <div className="metric-label"><Database size={12} /> PROCESSING</div>
              <div className="metric-bar-bg">
                <div className="metric-bar bar-blue"></div>
              </div>
            </div>
          </div>

          {/* Scrolling Terminal Logs */}
          <div className="sys-terminal">
            <div className="term-line animate-log-1">
              <span className="t-time">10:42:01</span> <span className="t-info">[RECV]</span> Route 45B - Lat: 13.08, Lon: 80.27
            </div>
            <div className="term-line animate-log-2">
              <span className="t-time">10:42:02</span> <span className="t-warn">[PROC]</span> Analyzing ETA for Stop #104...
            </div>
            <div className="term-line animate-log-3">
              <span className="t-time">10:42:03</span> <span className="t-succ">[PUSH]</span> Dispatching audio prompt to Edge...
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BusAnimation;
