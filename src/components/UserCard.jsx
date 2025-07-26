import './UserCard.css';

const UserCard = ({ name, email }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {name ? name.charAt(0).toUpperCase() : 'U'}
      </div>
      <div className="user-info">
        <h3 className="user-name">{name || 'Unknown User'}</h3>
        <p className="user-email">{email || 'No email provided'}</p>
      </div>
    </div>
  );
};

export default UserCard;