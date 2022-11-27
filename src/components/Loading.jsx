import React from "react";
import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="text-6xl p-2 flex justify-center items-center">
      <ImSpinner9 className="animate-spin" />
    </div>
  );
}
