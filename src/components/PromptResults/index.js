import { useSelector } from "react-redux";

import NoResultIcon from "static/icons/NoResultIcon.png";
import "components/PromptResults/styles.scss";

const PromptResults = () => {
  const { promptsData = [] } = useSelector(({ prompts }) => prompts);

  return (
    <>
      <h2 className="results-title">Results</h2>
      <div className="prompt-result-wrapper">
        {promptsData && !!promptsData.length ? (
          promptsData.map((item) => (
            <div key={item.id} className="prompt-result-card-wrapper">
              <div className="label-value-wrapper">
                <div className="card-label">Prompt: </div>
                <div className="card-value">{item.prompt}</div>
              </div>
              <div className="label-value-wrapper">
                <div className="card-label">Result:</div>
                <div className="card-value">{item.result}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results-wrapper">
            <img src={NoResultIcon} alt="no-results" width={80} height={80} />
            <p className="no-results-message">No results available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PromptResults;
