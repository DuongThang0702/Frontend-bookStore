import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

interface PageProps {
  data: { question: string; answer: string; active?: number };
}

const Page: FC<PageProps> = ({ data }) => {
  const [item, setItem] = useState(data);
  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <div
      className={`group ${
        item.active === 1 ? `isActive` : ``
      } m-6 cursor-pointer`}
    >
      <div
        onClick={handleToggleActive}
        className="flex items-center bg-[#e9e9e9] border border-[#c9c6c665] p-5 rounded-md mb-4"
      >
        <div className="w-full text-[1.6rem] font-semibold">
          {data.question}
        </div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="overflow-hidden max-h-0 text-[1.6rem] group-[.isActive]:max-h-[100rem] transition-all duration-1000 ml-6">
        {data.answer}
      </div>
    </div>
  );
};

export default Page;
