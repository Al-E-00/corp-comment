import FeedbackForm from "../header/FeedbackForm";
import Logo from "../header/Logo";
import PageHeading from "../header/PageHeading";
import Pattern from "../header/Pattern";

type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
