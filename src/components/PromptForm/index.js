import Button from "components/Button";
import Textarea from "components/Textarea";

const PromptForm = ({ value, handleChange }) => {
  return (
    <form>
      <Textarea
        placeholder="Enter prompt"
        value={value}
        onChange={handleChange}
      />
      <div className="justify-content-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default PromptForm;
