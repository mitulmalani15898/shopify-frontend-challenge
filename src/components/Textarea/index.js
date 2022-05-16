import "components/Textarea/styles.scss";

const Textarea = ({ isError = false, errorMessage = "", ...restProps }) => {
  return (
    <>
      <textarea
        rows="6"
        className={`text-area ${isError ? "text-area-error" : ""}`}
        {...restProps}
      />
      {isError && <p className="text-area-error-message">{errorMessage}</p>}
    </>
  );
};

export default Textarea;
