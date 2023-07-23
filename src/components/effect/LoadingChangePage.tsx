"use client";
import { FC, useState, CSSProperties, useEffect, memo } from "react";
import { HashLoader } from "react-spinners";
interface LoadingProps {
  load?: boolean;
}

const Loading: FC<LoadingProps> = ({}) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    textAlign: "center",
  };
  const [Loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className="flex justify-center z-50 items-center h-full bg-[rgba(0,0,0,0.5)]">
      <div className="sweet-loading p-20">
        <HashLoader
          color="#36d7b7"
          loading={Loading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default memo(Loading);
