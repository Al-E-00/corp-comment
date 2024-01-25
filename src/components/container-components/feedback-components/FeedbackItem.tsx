import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  id: number;
  numberOfUpvotes: number;
  badgeLetter: string;
  companyName: string;
  feedback: string;
  daysAgo: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export default function FeedbackItem({
  feedbackItem: {
    id,
    numberOfUpvotes,
    badgeLetter,
    companyName,
    feedback,
    daysAgo,
  },
}: FeedbackItemProps): JSX.Element {
  return (
    <li key={id} className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{numberOfUpvotes}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{companyName}</p>
        <p>{feedback}</p>
      </div>

      <p>{daysAgo}d</p>
    </li>
  );
}
