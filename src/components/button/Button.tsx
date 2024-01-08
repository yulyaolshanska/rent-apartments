import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  type,
  children,
  isDisabled,
}) => {
  const buttonClass = isDisabled
    ? `${styles.button} ${styles.unActive} ${styles[variant]}`
    : `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
