import PropTypes from "prop-types";

import { FriendListItem } from "./FriendListItem";
import { Ul } from "./FriendList.styled";

const FriendList = ({ friends }) => {
    return (
      <Ul>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </Ul>
    );
  };
  

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
      })
    ).isRequired,
  };
  
  export default FriendList;