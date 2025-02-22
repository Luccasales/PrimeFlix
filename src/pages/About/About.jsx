import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

//CSS
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>About the ElitePlay</h2>
      <p className={styles.text}>
        This project is a library Player, where you put your Youtube Link and
        watch over here. <br />
        <span> My contacts:</span>
      </p>
      <ul>
        <div className={styles.icons}>
          <li>
            <a
              href="https://www.instagram.com/luccasales99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.instagram}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/Luccasales"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.github} />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default About;
