import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingFallback = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <PacmanLoader color={"#36D7B7"} css={override} size={50} />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingFallback;
