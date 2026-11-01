function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "REST APIs",
    "C++",
    "Responsive Design"
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-title">
        <p>MY TECHNOLOGIES</p>
        <h2>Skills & Tools</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;