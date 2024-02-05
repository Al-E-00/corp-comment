type HastagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

export default function HastagItem({
  company,
  onSelectCompany,
}: HastagItemProps) {
  return (
    <li>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
