import React from "react";
import { DNA } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div className="h-[calc(100vh-160px)] flex items-center justify-center">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
