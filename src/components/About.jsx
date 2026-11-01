function About() {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div>
          <h3>I'm a Full-Stack Developer</h3>

          <p>
            I am a Computer Science student passionate about building
            useful and scalable web applications. I enjoy learning new
            technologies and turning ideas into real-world projects.
          </p>

          <p>
            My current focus is full-stack web development with JavaScript,
            React, Node.js, Express and MongoDB.
          </p>

          <p>
            I am continuously improving my problem-solving, development
            and software engineering skills.
          </p>
        </div>

        <div className="about-card">
          <div>
            <strong>Education</strong>
            <span>B.Tech in Computer Science</span>
          </div>

          <div>
            <strong>Focus</strong>
            <span>Full-Stack Development</span>
          </div>

          <div>
            <strong>Goal</strong>
            <span>Build impactful software</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;