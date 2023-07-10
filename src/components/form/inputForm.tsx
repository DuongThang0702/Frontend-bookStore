import React, { FC, memo } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface FormData {
  email: string;
  lastName: string;
  firstName: string;
  role: string;
  status: boolean;
}

interface InputForm {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  fullW?: boolean;
  id: any;
  errors: FieldErrors<FormData>;
  validate: object;
  register: UseFormRegister<FormData>;
  handleSubmit?: UseFormHandleSubmit<FormData, undefined>;
}

const inputForm: FC<InputForm> = ({
  label,
  placeholder,
  disabled,
  type = "text",
  fullW,
  id,
  validate,
  register,
  handleSubmit,
  errors,
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`${fullW ? "w-full" : ""} px-4 py-2`}
        disabled={disabled}
        {...register(id, validate)}
      />
      {/* {errors[id] && <span>{errors[id]?.message}</span>} */}
    </div>
  );
};

export default memo(inputForm);
