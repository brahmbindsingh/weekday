import React from "react";
import hourglass from '../../assets/images/hourglass.png';
import styles from '../../styles/components/JobCard/JobCard.module.css';

const JobCard = () => {
  return (
    <div className={styles["job-card"]}>
      <div className="post-date">
        <img src={hourglass} alt="hourglass" className={styles["hourglass-image"]} />
        <p>Posted 10 days ago</p>
      </div>
    </div>
  );
};

export default JobCard;
