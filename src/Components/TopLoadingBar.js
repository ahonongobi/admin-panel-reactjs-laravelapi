import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const ref = useRef(null);

  const handleLoadSomething = () => {
    ref.current.continuousStart();
    setTimeout(() => {
      console.log("...loading something");
      ref.current.complete();
    }, 4000);
  };
  return (
    <div>
      <LoadingBar color="#f11946" ref={ref} />

     {/** <button onClick={handleLoadSomething}>
        Start Continuous Loading Bar
      </button> **/}
    </div>
  );
};

export default TopLoadingBar;
