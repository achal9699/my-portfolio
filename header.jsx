export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-between items-center z-50">
        <h1 className="font-bold text-xl">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
        <h2 className="text-4xl font-bold">Hi, I'm Achal Wasule</h2>
        <p className="mt-2 text-lg">Electronics Engineer & Web Developer</p>
        <div className="mt-4 space-x-4">
          <a href="/resume.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded">Download Resume</a>
          <a href="#contact" className="px-4 py-2 border border-blue-600 rounded">Contact Me</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I am an Electronics & Telecommunication Engineer with experience in web development,
          IoT, and automation projects. I enjoy building applications and solving problems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript","React","Node.js","SQL","HTML","CSS","Python"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Vibration Anomaly Detection", desc: "STM32 + NanoEdge AI", link: "#" },
            { title: "Smart Home Automation", desc: "Arduino + IoT", link: "#" },
            { title: "Portfolio Website", desc: "React + Tailwind", link: "#" }
          ].map((p) => (
            <div key={p.title} className="border rounded p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} className="text-blue-600 underline">View</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form action="https://formspree.io/f/<your-form-id>" method="POST" className="flex flex-col max-w-md gap-2">
          <input name="name" placeholder="Your Name" className="border p-2 rounded" required />
          <input name="email" type="email" placeholder="Your Email" className="border p-2 rounded" required />
          <textarea name="message" placeholder="Message" className="border p-2 rounded"></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center bg-black text-white">
        © {new Date().getFullYear()} My Portfolio | Built with React
      </footer>
    </div>
  );
}
