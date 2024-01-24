import FeedbackForm from "./header-components/FeedbackForm";
import Logo from "./header-components/Logo";
import PageHeading from "./header-components/PageHeading";
import Pattern from "./header-components/Pattern";

export default function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  );
}
