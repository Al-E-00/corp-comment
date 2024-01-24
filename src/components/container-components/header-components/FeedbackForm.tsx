import { useState } from "react";

export default function FeedbackForm() {
  const [textInput, setTextInput] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const textInputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextInput(event.target.value);
    setCharacterCount(textInput.length);
  };

  let remainingCharacters = 150 - characterCount;
  if (remainingCharacters < 0) {
    remainingCharacters = 0;
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
        <p className="u-italic">{remainingCharacters}</p>
        <button>Submit</button>
      </div>
    </form>
  );
}
