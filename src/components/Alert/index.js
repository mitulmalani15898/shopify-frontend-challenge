import "components/Alert/styles.scss";

const Alert = ({ children }) => {
  return <div className="alert-message">{children}</div>;
};

export default Alert;
