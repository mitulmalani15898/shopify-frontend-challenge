import "components/Button/styles.scss";

const Button = ({ children, loading = false, ...restProps }) => {
  return (
    <button className="button-class" {...restProps}>
      {loading ? <div className="button-loader"></div> : children}
    </button>
  );
};

export default Button;
