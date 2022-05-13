import "components/Button/styles.scss";

const Button = ({ children, ...restProps }) => {
  return (
    <button className="button-class" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
