import { useState } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants";

export default function FeedbackForm() {
  const [textInput, setTextInput] = useState("");

  const textInputHandlerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setTextInput(event.target.value);
  };

  const charCount = MAX_CHARACTERS - textInput.length;

  return (
    <form className="form">
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
        <button>Submit</button>
      </div>
    </form>
  );
}
