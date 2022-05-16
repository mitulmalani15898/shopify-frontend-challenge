import { sendPrompt } from "api/openAI";
import {
  GET_PROMPT_REQUEST,
  POST_PROMPT_REQUEST,
  POST_PROMPT_SUCCESS,
  POST_PROMPT_ERROR,
  RESET_DEFAULT_BLOCK,
} from "redux/reducers/PromptsReducer";

export const getPrompts = () => (dispatch) => {
  dispatch({ type: GET_PROMPT_REQUEST });
};

export const postPrompt = (prompt) => async (dispatch) => {
  dispatch({ type: POST_PROMPT_REQUEST });
  try {
    const response = await sendPrompt(prompt);
    if (response.status === 200) {
      dispatch({
        type: POST_PROMPT_SUCCESS,
        prompt,
        id: response.data.id,
        result: response.data.choices[0].text,
      });
    }
  } catch (error) {
    dispatch({ type: POST_PROMPT_ERROR, error });
  }
};

export const resetPromptBlock = () => (dispatch) => {
  dispatch({ type: RESET_DEFAULT_BLOCK });
};
