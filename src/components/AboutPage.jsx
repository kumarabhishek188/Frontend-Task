import UserCard from "./UserCard";
import "./AboutPage.css";

const AboutPage = () => {
  const teamMembers = [
    { name: "Alice Johnson", email: "alice@company.com" },
    { name: "Bob Smith", email: "bob@company.com" },
    { name: "Carol Davis", email: "carol@company.com" },
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-image-container">
          <img src="/about.png" alt="About Simpler Technologies" className="about-hero-image" />
        </div>
        <h1>About Our Platform</h1>
        <p>
          {/* Building connections and fostering community through innovative
          technology */}
          At Simpler Technologies, we foster a dynamic and inclusive work
          environment that encourages innovation, collaboration, and
          professional growth. Our workplace policies are designed to support
          productivity while ensuring a healthy work-life balance for our
          employees.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our cloud-based ERP system empowers businesses with real-time
            tracking, AI-driven analytics, and seamless automation to enhance
            operational efficiency and customer experience. With powerful
            modules for inventory control, CRM, pricing strategies, and
            compliance, SimplerTechnologies helps brands scale effortlessly
            while staying ahead of market trends.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2005, our platform started as a simple idea: to create a
            space where people can connect authentically. What began as a small
            project has grown into a thriving community of thousands of users
            from around the world.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Connection</h3>
              <p>
                We believe in bringing people together and fostering meaningful
                relationships.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Innovation</h3>
              <p>
                We continuously evolve and improve to provide the best user
                experience.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Privacy</h3>
              <p>
                Your data and privacy are our top priorities in everything we
                do.
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <p>The passionate individuals behind our platform</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <UserCard key={index} name={member.name} email={member.email} />
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Happy Users</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat-item">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
