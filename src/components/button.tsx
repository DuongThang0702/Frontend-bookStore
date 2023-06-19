import { FC, memo } from "react";

interface buttonProps {
  style?: string;
  name: string;
  status: boolean;
  hanleOnClick: () => void;
}

const Button: FC<buttonProps> = ({ name, style, status, hanleOnClick }) => {
  return (
    <button
      type="button"
      disabled={!status}
      className={
        status
          ? style
            ? style
            : "bg-red px-10 py-3 text-white font-main text-2xl rounded-full my-8 uppercase font-bold"
          : "bg-[#ccc] px-10 py-3 text-white font-main text-2xl rounded-full my-8 uppercase font-bold"
      }
      onClick={() => {
        hanleOnClick && hanleOnClick();
      }}
    >
      {name}
    </button>
  );
};

export default memo(Button);
