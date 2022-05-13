export const POST_PROMPT_REQUEST = "POST_PROMPT_REQUEST";
export const POST_PROMPT_SUCCESS = "POST_PROMPT_SUCCESS";
export const POST_PROMPT_ERROR = "POST_PROMPT_ERROR";

const block = {
  loading: false,
  error: "",
  success: false,
};

const initialState = {
  ...block,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_PROMPT_REQUEST:
      return { ...state, loading: true };
    case POST_PROMPT_SUCCESS:
      return { ...state, loading: false, success: true };
    case POST_PROMPT_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
