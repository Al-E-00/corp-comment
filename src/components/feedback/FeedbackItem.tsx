import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({
  feedbackItem: { upvoteCount, badgeLetter, company, text, daysAgo },
}: FeedbackItemProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [updatedUpvoteCount, setUpdatedUpvoteCount] = useState(upvoteCount);

  const handleUpvote = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpdatedUpvoteCount((prevState) => ++prevState);
    event.currentTarget.disabled = true;
    event.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prevState) => !prevState)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{updatedUpvoteCount}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo === 0 ? "NEW" : `${daysAgo} d`}</p>
    </li>
  );
}
