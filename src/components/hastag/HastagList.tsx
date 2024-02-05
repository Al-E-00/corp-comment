import { useFeedbackItemsContext } from "../../lib/hooks";
import HastagItem from "./HastagItem";

export default function HastagList() {
  const { companyList, handleSelectCompany, selectedCompany } =
    useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      {companyList.map((company, index) => (
        <HastagItem
          company={company}
          key={index}
          onSelectCompany={handleSelectCompany}
        />
      ))}
      {selectedCompany && (
        <li>
          <button className="reset" onClick={() => handleSelectCompany("")}>
            Reset Filter
          </button>
        </li>
      )}
    </ul>
  );
}
