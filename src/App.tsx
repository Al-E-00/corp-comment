import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HastagList from "./components/hastag/HastagList";
import FeedbackItemsContextProvider from "./components/context/FeedbackItemsContextProvider";

function App() {
  return (
    <div className="app">
      <Footer />

      <FeedbackItemsContextProvider>
        <Container />

        <HastagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
