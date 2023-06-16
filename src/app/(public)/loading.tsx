"use client";
import { FC, useState, CSSProperties, useEffect } from "react";
import { BeatLoader } from "react-spinners";
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
    <>
      {/* <div className="sweet-loading">
        <BeatLoader
          loading={Loading}
          cssOverride={override}
          color={"#36d7b7"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div> */}
      <div>
        <h1>Loading .....</h1>
      </div>
    </>
  );
};

export default Loading;
