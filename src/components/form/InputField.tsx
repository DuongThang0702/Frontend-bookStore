import { Dispatch, FC, SetStateAction } from "react";

interface InputFieldProps {
  styleLabel?: string;
  nameKey: string;
  type?: string;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
}

const InputField: FC<InputFieldProps> = ({
  styleLabel,
  type,
  value,
  nameKey,
  setValue,
}) => {
  return (
    <div className="flex flex-col mt-8">
      <label
        htmlFor={nameKey}
        className={styleLabel ? styleLabel : "text-[1.6rem] mb-4 text-start"}
      >
        {nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
      </label>
      <input
        id={nameKey}
        type={type ? type : "text"}
        value={value}
        onChange={(e) =>
          setValue((prev: any) => ({ ...prev, [nameKey]: e.target.value }))
        }
        className="border outline-none h-[4.2rem] mb-8 p-4 text-[1.6rem] rounded-sm"
      />
    </div>
  );
};

export default InputField;
