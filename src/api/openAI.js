import axios from "../axios";

export const sendPrompt = async (prompt) => {
  return await axios.post("/text-curie-001/completions", { prompt });
};
