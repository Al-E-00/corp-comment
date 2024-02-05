import FeedbackForm from "../header/FeedbackForm";
import Logo from "../header/Logo";
import PageHeading from "../header/PageHeading";
import Pattern from "../header/Pattern";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
