//CSS
import styles from "./navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-video">New video</Link>
        </li>
        <li>
          <Link to="/about"> About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
