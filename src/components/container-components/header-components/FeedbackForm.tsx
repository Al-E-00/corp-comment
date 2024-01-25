import { useState } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants";

export default function FeedbackForm() {
  const [textInput, setTextInput] = useState("");

  const textInputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextInput(event.target.value);
  };

  let charCount = MAX_CHARACTERS - textInput.length;
  if (charCount < 0) {
    charCount = 0;
  }

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="dummy-placeholder"
        spellCheck={false}
        value={textInput}
        onChange={textInputChangeHandler}
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
