import React from "react";

import styles from "./Player.module.css";
import { useLocation, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state || {};

  return (
    <div className={styles.playerPage}>
      <h2>Assintindo ao video: {title}</h2>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          title={title}
          className={styles.videoPlayer}
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
