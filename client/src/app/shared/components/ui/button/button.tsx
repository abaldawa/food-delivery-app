/**
 * @author Abhijit Baldawa
 */

import styles from "./button.module.css";

interface ButtonProps {
  variant: "contained" | "outlined";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, className, children } = props;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export { Button };
