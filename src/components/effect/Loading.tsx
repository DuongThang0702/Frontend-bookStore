import { FC, useState, CSSProperties, useEffect, memo } from "react";
import { BeatLoader } from "react-spinners";

const Loading: FC = ({}) => {
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
      <div className="sweet-loading">
        <BeatLoader
          loading={Loading}
          cssOverride={override}
          color={"#36d7b7"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default memo(Loading);
