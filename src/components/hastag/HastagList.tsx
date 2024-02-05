import HastagItem from "./HastagItem";

type HastagListProps = {
  companyList: string[];
  selectedCompany: string;
  handleSelectCompany: (company: string) => void;
};

export default function HastagList({
  companyList,
  selectedCompany,
  handleSelectCompany,
}: HastagListProps) {
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
