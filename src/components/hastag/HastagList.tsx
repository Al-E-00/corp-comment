import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HastagItem from "./HastagItem";

export default function HastagList() {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  const selectedCompany = useFeedbackItemsStore(
    (state) => state.selectedCompany
  );

  return (
    <ul className="hashtags">
      {companyList.map((company, index) => (
        <HastagItem
          company={company}
          key={index}
          onSelectCompany={selectCompany}
        />
      ))}
      {selectedCompany && (
        <li>
          <button className="reset" onClick={() => selectCompany("")}>
            Reset Filter
          </button>
        </li>
      )}
    </ul>
  );
}
