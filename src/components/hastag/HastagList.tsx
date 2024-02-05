import HastagItem from "./HastagItem";

type HastagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HastagList({
  companyList,
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
    </ul>
  );
}
