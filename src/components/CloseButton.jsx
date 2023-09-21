import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const CloseButton = ({ handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
      className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-gray-500"
    >
      <MdOutlineCancel />
    </button>
  );
};

export default CloseButton;
