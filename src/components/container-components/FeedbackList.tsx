import FeedbackItem from "./feedback-components/FeedbackItem";

const feedbackItems = [
  {
    id: 1,
    numberOfUpvotes: 345,
    badgeLetter: "F",
    companyName: "Facebook",
    feedback: "so so ",
    daysAgo: 4,
  },
  {
    id: 2,
    numberOfUpvotes: 345,
    badgeLetter: "F",
    companyName: "Facebook",
    feedback: "so so ",
    daysAgo: 4,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
