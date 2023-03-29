import PropTypes from 'prop-types';
import { DivContenedor, DivDescription, Img, ListStats, StatsLi } from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <DivContenedor className="profile">
      <DivDescription className="description">
        <Img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </DivDescription>

      <ListStats className="stats">
        <StatsLi>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsLi>
        <StatsLi>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsLi>
        <StatsLi>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsLi>
      </ListStats>
    </DivContenedor>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;





