import "components/Container/styles.scss";

const Container = ({ children }) => {
  return <main className="page-content-container">{children}</main>;
};

export default Container;
