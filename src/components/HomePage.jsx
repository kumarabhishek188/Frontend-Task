import UserCard from './UserCard';
import './HomePage.css';

const HomePage = ({ currentUser }) => {
  const featuredUsers = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Mike Johnson', email: 'mike.johnson@example.com' },
    { name: 'Sarah Wilson', email: 'sarah.wilson@example.com' },
    { name: 'Alex Brown', email: 'alex.brown@example.com' },
    { name: 'Emily Davis', email: 'emily.davis@example.com' }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
         <div className="home-image-container">
          <img src="/home.png" alt="About Simpler Technologies" className="home-hero-image" />
        </div>
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing people and connect with our community</p>
        {currentUser && (
          <div className="welcome-message">
            <h3>Hello, {currentUser.name}! 👋</h3>
            <p>Welcome back to your dashboard</p>
          </div>
        )}
      </div>


      <div className="featured-users-section">
        <h2>Featured Community Members</h2>
        <p>Connect with other members of our growing community</p>
        <div className="users-grid">
          {featuredUsers.map((user, index) => (
            <UserCard 
              key={index} 
              name={user.name} 
              email={user.email} 
            />
          ))}
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h3>1,000+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Countries</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;