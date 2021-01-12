import React from "react";
import propTypes from "prop-types";
import styles from "../../styles/friendsList.module.css";

const FriendListItem = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map((friend) => (
        <li className={styles.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt=""
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequireds,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};

export default FriendListItem;
