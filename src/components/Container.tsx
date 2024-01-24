import FeedbackList from "./container-components/FeedbackList";
import Header from "./container-components/Header";

export default function Container() {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}
