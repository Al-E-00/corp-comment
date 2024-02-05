import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFromProps = {
  onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFromProps) {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });
  const [setshowValidIndicator, setSetshowValidIndicator] = useState(false);

  const textInputHandlerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setTextInput(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (textInput.length === 0) {
      setError({ hasError: true, message: "Please enter some feedback." });
      setTimeout(() => setError({ hasError: false, message: "" }), 2000);
      return;
    } else if (textInput.includes("#") === false) {
      setError({ hasError: true, message: "Please include a hashtag." });
      setTimeout(() => setError({ hasError: false, message: "" }), 2000);
      return;
    }

    setError({ hasError: false, message: "" });
    setSetshowValidIndicator(true);
    setTimeout(() => setSetshowValidIndicator(false), 2000);
    setTextInput("");

    onAddToList(textInput);
  };

  const charCount = MAX_CHARACTERS - textInput.length;

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className={`form ${error.hasError ? "form--invalid" : ""} ${
          setshowValidIndicator ? "form--valid" : ""
        }`}
      >
        <textarea
          id="feedback-textarea"
          placeholder="dummy-placeholder"
          spellCheck={false}
          value={textInput}
          onChange={textInputHandlerChange}
        />
        <label htmlFor="feedback-textarea">
          Enter your feedback here, remember to #hashtag the company
        </label>
        <div>
          <p className="u-italic">{charCount}</p>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p className="form--error-message">{error.message}</p>
    </>
  );
}
