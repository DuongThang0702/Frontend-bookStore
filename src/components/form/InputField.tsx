import { Dispatch, FC, SetStateAction, memo } from "react";

interface InputFieldProps {
  styleLabel?: string;
  nameKey: string;
  type?: string;
  value: string;
  style?: string;
  wFull?: boolean;
  placeholder?: string;
  size?: string;
  hidenLabel?: boolean;
  setValue: Dispatch<SetStateAction<any>>;
}

const InputField: FC<InputFieldProps> = ({
  styleLabel,
  type,
  value,
  nameKey,
  style,
  wFull,
  placeholder,
  size,
  hidenLabel,
  setValue,
}) => {
  return (
    <div className={`${wFull ? "w-full flex justify-end" : ""}`}>
      <div className="flex flex-col mt-8">
        {!hidenLabel && (
          <label
            htmlFor={nameKey}
            className={
              styleLabel ? styleLabel : "text-[1.6rem] mb-4 text-start"
            }
          >
            {nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
          </label>
        )}
        <input
          id={nameKey}
          placeholder={`${placeholder ? placeholder : ""}`}
          type={type ? type : "text"}
          value={value}
          onChange={(e) =>
            setValue((prev: any) => ({ ...prev, [nameKey]: e.target.value }))
          }
          className={` ${
            style
              ? style
              : `border outline-none h-[4.2rem] mb-8 p-4 text-[1.6rem] rounded-sm`
          }
          ${size ? `w-[${size + "rem"}]` : ""}
              `}
        />
      </div>
    </div>
  );
};

export default memo(InputField);
