"use client";
import { FC, useState, CSSProperties, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
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
    <div className="flex justify-center items-center h-screen">
      <div className="sweet-loading p-20">
        <PacmanLoader
          loading={Loading}
          cssOverride={override}
          color={"#59429a"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loading;
