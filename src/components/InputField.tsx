import { Dispatch, FC, SetStateAction } from "react";

interface InputFieldProps {
  styleLabel?: string;
  nameKey: string;
  type?: string;
  value: string;
  invalidField?: boolean;
  setValue: Dispatch<SetStateAction<any>>;
  setInvalidField?: Dispatch<SetStateAction<boolean>>;
}

const InputField: FC<InputFieldProps> = ({
  styleLabel,
  type,
  value,
  nameKey,
  invalidField,
  setValue,
  setInvalidField,
}) => {
  return (
    <div className="flex flex-col mt-8">
      <label
        className={styleLabel ? styleLabel : "text-[1.6rem] mb-4 text-start"}
      >
        {nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
      </label>
      <input
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
