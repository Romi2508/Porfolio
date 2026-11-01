function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="small-heading">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Romi</span>
        </h1>

        <h2>Full-Stack Developer</h2>

        <p className="hero-text">
          I build modern, responsive and user-friendly web applications
          using modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;