import React from "react";
import propTypes from "prop-types";
import styles from "../../styles/profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>1000</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>2000</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  stats: propTypes.shape({
    Followers: propTypes.string,
    Views: propTypes.number,
    Likes: propTypes.number,
  }),
};

export default Profile;
