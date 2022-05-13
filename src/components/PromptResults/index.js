import "components/PromptResults/prompt-results.scss";

import data from "data/prompt-repons.js";

const PromptResults = () => {
  return (
    <>
      <p className="results-title">Results</p>
      <div className="prompt-result-wrapper">
        {data.map((d) => (
          <div key={d.id} className="prompt-result-card-wrapper">
            <div className="label-value-wrapper">
              <div className="card-label">Prompt: </div>
              <div className="card-value">{d.prompt}</div>
            </div>
            <div className="label-value-wrapper">
              <div className="card-label">Result:</div>
              <div className="card-value">{d.response}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PromptResults;
