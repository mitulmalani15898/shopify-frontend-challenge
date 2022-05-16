import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Page from "components/Page";
import PromptResults from "components/PromptResults";
import PromptForm from "components/PromptForm";
import { getPrompts } from "redux/actions/PromptsActions";

const PromptScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrompts());
  }, []);

  return (
    <Page>
      <PromptForm />
      <PromptResults />
    </Page>
  );
};

export default PromptScreen;
