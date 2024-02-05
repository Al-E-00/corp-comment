import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HastagList from "./components/hastag/HastagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />

      <Container />

      <HastagList />
    </div>
  );
}

export default App;
