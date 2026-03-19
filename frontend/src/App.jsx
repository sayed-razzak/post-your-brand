import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://post-your-brand-backend.onrender.com/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Thanks! We will contact you soon.");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    alert("Server error.");
  }
};

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <span className="logo-text">Post Your Brand</span>
    </div>
        <a
          className="nav-btn"
          href="https://wa.me/916297211249?text=Hi%20I%20want%20to%20grow%20my%20business"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div>
          <p className="tag">AI Content • Social Media • SEO</p>
          <h1>Grow Your Brand with Smart Marketing 🚀</h1>
          <p>
            We create AI-powered content, manage your social media, and boost your online presence.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">Get Started</a>
            <a href="#services" className="secondary-btn">View Services</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <h3>AI Content Creation</h3>
            <p>Posts, captions, reels ideas for your brand</p>
          </div>
          <div className="card">
            <h3>Social Media Management</h3>
            <p>We handle your page and grow your audience</p>
          </div>
          <div className="card">
            <h3>SEO Optimization</h3>
            <p>Improve your Google ranking and visibility</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>What Our Clients Say</h2>
        <div className="grid">
          <div className="card">
            <p>"Amazing content! Our page started growing fast."</p>
            <h4>- Business Owner</h4>
          </div>
          <div className="card">
            <p>"Very professional and creative team."</p>
            <h4>- Startup Founder</h4>
          </div>
          <div className="card">
            <p>"Best marketing service I used till now."</p>
            <h4>- Brand Owner</h4>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Connect with us via form, WhatsApp, or Instagram</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <br /><br />

          <textarea
            name="message"
            placeholder="Tell us about your business"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <br /><br />

          <button type="submit">Send Message</button>
        </form>

        <br />

        {/* SOCIAL LINKS */}
        <a
          href="https://wa.me/916297211249"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Chat on WhatsApp
        </a>

        <br /><br />

        <a
          href="https://instagram.com/postyourbrand__"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          Visit Instagram
        </a>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/916297211249"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Post Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;