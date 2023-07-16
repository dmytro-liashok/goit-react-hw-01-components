import PropTypes from 'prop-types';
import {
  Profile,
  Avatar,
  Paragraph,
  Stats,
  Description,
  StatsItem,
} from './ProfileUser.styled';

const ProfileUser = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Paragraph> {username}</Paragraph>
        <Paragraph>&#64;{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </Description>

      <Stats>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </Profile>
  );
};

ProfileUser.propTypes = {
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

export default ProfileUser;
