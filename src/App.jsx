function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio built using React.",
    },
    {
      title: "E-Commerce App",
      desc: "Online shopping website with cart features.",
    },
    {
      title: "Student Management System",
      desc: "CRUD application for managing students.",
    },
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#111827",
          position: "sticky",
          top: 0,
        }}
      >
        <h2 style={{ color: "#22d3ee" }}>CodeNova</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#about" style={link}>About</a>
          <a href="#skills" style={link}>Skills</a>
          <a href="#projects" style={link}>Projects</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <img
          src="https://via.placeholder.com/180"
          alt="profile"
          style={{
            borderRadius: "50%",
            width: "180px",
            height: "180px",
            border: "4px solid #22d3ee",
          }}
        />

        <h1
          style={{
            fontSize: "65px",
            marginTop: "20px",
            color: "#22d3ee",
          }}
        >
          CodeNova
        </h1>

        <h2 style={{ color: "#c084fc" }}>
          Full Stack Developer
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            color: "#cbd5e1",
            lineHeight: "30px",
          }}
        >
          Building premium digital experiences using React,
          JavaScript, Node.js and modern web technologies.
        </p>

        <button
          style={{
            padding: "14px 30px",
            background: "#8b5cf6",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          View Projects
        </button>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "50px" }}>
        <h1 style={heading}>About Me</h1>

        <div style={box}>
          <p style={{ lineHeight: "30px" }}>
            I am a passionate Full Stack Developer who loves
            creating beautiful and responsive web applications.
            I enjoy learning new technologies and solving
            real-world problems through software development.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "50px" }}>
        <h1 style={heading}>Skills</h1>

        <div style={grid}>
          {skills.map((skill, index) => (
            <div key={index} style={card}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "50px" }}>
        <h1 style={heading}>Projects</h1>

        <div style={grid}>
          {projects.map((project, index) => (
            <div key={index} style={projectCard}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "50px" }}>
        <h1 style={heading}>Contact Me</h1>

        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={input}
          />

          <br />
          <br />

          <input
            type="email"
            placeholder="Your Email"
            style={input}
          />

          <br />
          <br />

          <textarea
            rows="5"
            placeholder="Your Message"
            style={input}
          />

          <br />
          <br />

          <button
            style={{
              padding: "12px 25px",
              background: "#22d3ee",
              color: "black",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#111827",
          textAlign: "center",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        © 2026 CodeNova | All Rights Reserved
      </footer>
    </div>
  );
}

const heading = {
  color: "#22d3ee",
  textAlign: "center",
  marginBottom: "30px",
};

const box = {
  background: "#1e293b",
  padding: "30px",
  borderRadius: "15px",
  maxWidth: "900px",
  margin: "auto",
};

const grid = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  width: "150px",
  textAlign: "center",
};

const projectCard = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  width: "280px",
};

const input = {
  width: "300px",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
};

const link = {
  color: "white",
  textDecoration: "none",
};

export default App;