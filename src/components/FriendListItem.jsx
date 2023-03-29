import PropTypes from "prop-types";
import { LiFriendItem, StatusSpan } from './FriendList.styled'

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
      <LiFriendItem key={id}>
        <StatusSpan status={isOnline}></StatusSpan>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </LiFriendItem>
    );
  };
  
  FriendListItem.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };


export default FriendListItem;