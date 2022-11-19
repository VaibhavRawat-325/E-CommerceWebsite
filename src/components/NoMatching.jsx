import React from "react";

function NoMatching(props) {
  return (
    <div className="bg-indigo-500 p-2 border-2 text-xl mt-2 text-white flex">
      {props.children}
    </div>
  );
}

export default NoMatching;
