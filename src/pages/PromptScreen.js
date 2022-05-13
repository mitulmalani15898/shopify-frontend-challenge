import { useState } from "react";

import Page from "components/Page";
import PromptResults from "components/PromptResults";
import PromptForm from "components/PromptForm";

const PromptScreen = () => {
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = ({ target: { value } }) => {
    setPrompt(value);
  };

  return (
    <Page>
      <PromptForm value={prompt} handleChange={handlePromptChange} />
      <PromptResults />
    </Page>
  );
};

export default PromptScreen;
