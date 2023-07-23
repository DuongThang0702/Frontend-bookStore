import { FC, memo } from "react";
import { UseFormRegister } from "react-hook-form";

interface RadioProps {
  id: string;
  errors?: string;
  style?: string;
  validate: {};
  fullw?: boolean;
  name: string;
  value: string;
  styleLabel?: string;
  label: string;
  register: UseFormRegister<any>;
}

const Page: FC<RadioProps> = ({
  id,
  errors,
  style,
  validate,
  fullw,
  value,
  name,
  styleLabel,
  label,
  register,
}) => {
  return (
    <>
      <div>
        <input
          type="radio"
          className={`${style ? style : ""} ${fullw ? "w-full" : ""} mr-4`}
          id={id}
          {...register(id, validate)}
          value={value}
          name={name}
        />
        <label
          htmlFor={id}
          className={`${
            styleLabel ? styleLabel : "text-2xl font-semibold tracking-wider"
          }`}
        >
          {label}
        </label>
        {errors && <small className="text-red font-semibold">{errors}</small>}
      </div>
    </>
  );
};

export default memo(Page);
