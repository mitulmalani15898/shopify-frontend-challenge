import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/Button";
import Textarea from "components/Textarea";
import { postPrompt } from "redux/actions/PromptsActions";

const PromptForm = () => {
  const {
    loading: promptLoading,
    success: promptSuccess,
    error: promptError,
  } = useSelector(({ prompts }) => prompts);
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = ({ target: { value } }) => {
    setPrompt(value);
  };

  const handleSendPrompt = (e) => {
    e.preventDefault();
    if (!prompt) {
      return;
    }
    dispatch(postPrompt(prompt));
  };

  return (
    <form onSubmit={handleSendPrompt}>
      <Textarea
        placeholder="Enter prompt"
        value={prompt}
        onChange={handlePromptChange}
      />
      <div className="justify-content-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default PromptForm;
