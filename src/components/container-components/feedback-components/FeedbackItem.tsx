import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export default function FeedbackItem({
  feedbackItem: { id, upvoteCount, badgeLetter, company, text, daysAgo },
}: FeedbackItemProps): JSX.Element {
  return (
    <li key={id} className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo}d</p>
    </li>
  );
}
