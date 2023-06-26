import { FC, memo } from "react";

interface buttonProps {
  style?: string;
  name: string;
  status: boolean;
  hanleOnClick: () => void;
  icon?: JSX.Element;
}

const Button: FC<buttonProps> = ({
  name,
  style,
  status,
  hanleOnClick,
  icon,
}) => {
  return (
    <button
      type="button"
      disabled={!status}
      className={
        status
          ? style
            ? style
            : "bg-red border-2 border-red px-10 py-3 text-white font-main text-2xl rounded-full my-8 uppercase font-bold"
          : "bg-[#ccc] px-10 py-3 text-white font-main text-2xl rounded-full my-8 uppercase font-bold"
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
