export const GET_PROMPT_REQUEST = "GET_PROMPT_REQUEST";

export const POST_PROMPT_REQUEST = "POST_PROMPT_REQUEST";
export const POST_PROMPT_SUCCESS = "POST_PROMPT_SUCCESS";
export const POST_PROMPT_ERROR = "POST_PROMPT_ERROR";

export const RESET_DEFAULT_BLOCK = "RESET_DEFAULT_BLOCK";

const block = {
  loading: false,
  error: "",
  success: false,
};

const initialState = {
  ...block,
  promptsData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROMPT_REQUEST:
      return {
        ...state,
        promptsData: JSON.parse(localStorage.getItem("PromptResults")) || [],
      };

    case POST_PROMPT_REQUEST:
      return { ...state, loading: true };

    case POST_PROMPT_SUCCESS:
      const newResult = {
        id: action.id,
        prompt: action.prompt,
        result: action.result,
      };
      const newResults = [newResult, ...state.promptsData];
      localStorage.setItem("PromptResults", JSON.stringify(newResults));
      return {
        ...state,
        loading: false,
        success: true,
        promptsData: newResults,
      };

    case POST_PROMPT_ERROR:
      return { ...state, loading: false, error: action.error };

    case RESET_DEFAULT_BLOCK:
      return { ...state, ...block };

    default:
      return state;
  }
};
