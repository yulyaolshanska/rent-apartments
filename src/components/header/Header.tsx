import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.container}>
          <p className={styles.homeNav}>
            <NavLink to="/">Оголошення</NavLink>
          </p>
          <Button variant="headerBtn">
            <Link to={"/add"}>Здати в оренду</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
