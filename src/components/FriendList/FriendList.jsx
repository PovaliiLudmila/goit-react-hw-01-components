import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {

  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({avatar, name, isOnline, id}) => {
          return (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
          )} 
        )}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};