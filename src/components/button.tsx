import { FC, memo } from "react";

interface buttonProps {
  style?: string;
  hanleOnClick: () => void;
  name: string;
}

const Button: FC<buttonProps> = ({ name, style, hanleOnClick }) => {
  return (
    <button
      type="button"
      className={
        style
          ? style
          : "bg-red px-10 py-3 text-white font-main text-2xl rounded-full my-8 uppercase font-bold"
      }
      onClick={() => {
        hanleOnClick && hanleOnClick();
      }}
    >
      <span>{name}</span>
    </button>
  );
};

export default memo(Button);
