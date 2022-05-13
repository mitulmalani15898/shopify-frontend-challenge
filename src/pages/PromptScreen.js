import Page from "components/Page";
import PromptResults from "components/PromptResults";
import PromptForm from "components/PromptForm";

const PromptScreen = () => {
  return (
    <Page>
      <PromptForm />
      <PromptResults />
    </Page>
  );
};

export default PromptScreen;
