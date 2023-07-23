import { FC, memo } from "react";

interface buttonProps {
  style?: string;
  name: string;
  status: boolean;
  hanleOnClick?: () => void;
  icon?: JSX.Element;
  w60?: boolean;
  w25?: boolean;
  w100?: boolean;
  type?: string;
}

const Button: FC<buttonProps> = ({
  name,
  style,
  status,
  hanleOnClick,
  icon,
  w60,
  type,
  w25,
  w100,
}) => {
  return (
    <button
      type={type ? "submit" : "button"}
      disabled={!status}
      className={
        status
          ? style
            ? style
            : `bg-red border-2 border-red px-10 py-3 text-white font-main text-2xl rounded-full my-8 uppercase font-bold ${
                w60 ? "w-3/5" : ""
              } ${w25 ? "w-1/4" : ""} ${w100 ? "w-full" : ""}`
          : `bg-[#ccc] px-10 py-3 text-white font-main text-2xl rounded-full my-8 uppercase font-bold ${
              w60 ? "w-3/5" : ""
            } ${w25 ? "w-1/4" : ""} ${w100 ? "w-full" : ""}`
      }
      onClick={() => {
        hanleOnClick && hanleOnClick();
      }}
    >
      {icon && <span className="mr-4">{icon}</span>}
      {name}
    </button>
  );
};

export default memo(Button);
