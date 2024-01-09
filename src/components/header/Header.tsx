import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";
import logo from "../../images/icons/icons8-rent-64.png";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.container}>
          <img src={logo} width={24} height={24} alt="Лого" />
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
