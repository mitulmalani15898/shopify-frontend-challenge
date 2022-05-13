import Container from "components/Container";
import Header from "components/Header";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Page;
