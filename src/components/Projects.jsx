const projects = [
  {
    title: "Campus Placement & Internship Platform",
    description:
      "A full-stack platform connecting students with placement and internship opportunities.",
    tech: "React • Node.js • Express • MongoDB"
  },
  {
    title: "AI-Driven Fire Intelligence",
    description:
      "An intelligent system for detecting, classifying and assessing industrial fire risks.",
    tech: "Python • Machine Learning • Flask • GIS"
  },
  {
    title: "Smart Study Kit Generator",
    description:
      "An AI-powered application that generates personalized study materials from uploaded documents.",
    tech: "Python • Streamlit • AI • PDF Processing"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech">{project.tech}</div>

            <button className="project-btn">
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;