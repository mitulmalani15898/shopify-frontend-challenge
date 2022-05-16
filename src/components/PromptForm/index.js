import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Alert from "components/Alert";
import Button from "components/Button";
import Textarea from "components/Textarea";
import { postPrompt, resetPromptBlock } from "redux/actions/PromptsActions";

const PromptForm = () => {
  const dispatch = useDispatch();
  const {
    loading: promptLoading,
    success: promptSuccess,
    error: promptError,
  } = useSelector(({ prompts }) => prompts);

  const [prompt, setPrompt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (promptSuccess) {
      setPrompt("");
      dispatch(resetPromptBlock());
    }
  }, [promptSuccess]);

  const handlePromptChange = ({ target: { value } }) => {
    setPrompt(value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSendPrompt = (e) => {
    e.preventDefault();
    if (!prompt) {
      return setErrorMessage("Please provide prompt.");
    }
    setErrorMessage("");
    dispatch(postPrompt(prompt));
  };

  return (
    <>
      {!!promptError && <Alert>{promptError}</Alert>}
      <form onSubmit={handleSendPrompt}>
        <Textarea
          placeholder="Enter prompt... e.g. write a poem about dinosaurs in the snow :)"
          value={prompt}
          onChange={handlePromptChange}
          isError={!!errorMessage}
          errorMessage={errorMessage}
        />
        <div className="justify-content-center">
          <Button
            type="submit"
            disabled={promptLoading}
            loading={promptLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default PromptForm;
