import React from "react";
import { FaArrowUp } from "react-icons/fa";

const BouncingArrow = () => {
  return (
    <div title="" className="absolute bottom-0 right-0 animate-bounce ease-out">
      <a href="#home" className="text-white hover:text-gray-500">
        <FaArrowUp size={30} />
      </a>
    </div>
  );
};

export default BouncingArrow;
