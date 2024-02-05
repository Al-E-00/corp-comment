import FeedbackForm from "../header/FeedbackForm";
import Logo from "../header/Logo";
import PageHeading from "../header/PageHeading";
import Pattern from "../header/Pattern";
import {} from "../context/FeedbackItemsContextProvider";
import { useFeedbackItemsContext } from "../../lib/hooks";

export default function Header() {
  const { handleAddToList } = useFeedbackItemsContext();

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
