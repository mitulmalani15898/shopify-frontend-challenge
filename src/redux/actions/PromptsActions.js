import { sendPrompt } from "api/openAI";
import {
  POST_PROMPT_REQUEST,
  POST_PROMPT_SUCCESS,
  POST_PROMPT_ERROR,
} from "redux/reducers/PromptsReducer";

export const postPrompt = (prompt) => async (dispatch) => {
  dispatch({ type: POST_PROMPT_REQUEST });
  try {
    const response = await sendPrompt(prompt);
    if (response.status === 200) {
      dispatch({
        type: POST_PROMPT_SUCCESS,
        response: { prompt, result: response.data.choices[0].text },
      });
    }
  } catch (error) {
    dispatch({ type: POST_PROMPT_ERROR, error });
  }
};
