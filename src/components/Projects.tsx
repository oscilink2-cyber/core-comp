import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'GPS Based Bus Stop Announcement System',
    description: 'Real-time GPS tracking and automated voice announcements deployed for public transit systems.',
    image: '/gps_announcer.png',
    tags: ['GPS', 'Transit']
  },
  {
    id: 2,
    title: 'Smart Stop Announcement System',
    description: 'Intelligent announcement controllers designed for bus stops and stations with cloud connectivity.',
    image: '/smart_announcer.png',
    tags: ['IoT', 'Audio']
  },
  {
    id: 3,
    title: 'Fleet Dashboard Tool',
    description: 'Comprehensive cloud-based dashboard for real-time fleet monitoring and data analytics.',
    image: '/fleet_dashboard.png',
    tags: ['Cloud', 'Dashboard']
  },
  {
    id: 4,
    title: 'Automatic Parotta Maker',
    description: 'Industrial-grade automated machinery for high-volume, consistent parotta production.',
    image: '/parotta_maker.png',
    tags: ['Industrial', 'Automation']
  },
  {
    id: 5,
    title: 'LED Information Display Board',
    description: 'High-visibility LED matrix displays for real-time information broadcasting and alerts.',
    image: '/led_display.png',
    tags: ['LED', 'Display']
  },
  {
    id: 6,
    title: 'Automatic Water Level Monitor',
    description: 'Smart liquid level monitoring and control system for overhead tanks and industrial reservoirs.',
    image: '/water_monitor.png',
    tags: ['Sensors', 'Control']
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="projects-header animate-fade-in">
          <h2 className="projects-title">
            Our Products
          </h2>
          <p className="projects-subtitle">
            Explore our bespoke IoT, embedded hardware, and software solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card animate-fade-in delay-${(index % 3 + 1) * 100}`}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-title-row">
                  <h3 className="project-card-title">{project.title}</h3>
                  <ArrowUpRight className="project-card-arrow" size={24} strokeWidth={1.5} />
                </div>
                
                <p className="project-card-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer animate-fade-in delay-300">
          <button className="btn-see-all">See all products</button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
