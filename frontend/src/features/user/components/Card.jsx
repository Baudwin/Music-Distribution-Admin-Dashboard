import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

function Card({ onClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log(open);
  };
  return (
    <div
      className="w-[300px] h-[230px] rounded-md shadow-md flex justify-center items-center bg-white hover:bg-[#f1f6fe] cursor-pointer dark:bg-[#21354bf5] dark:hover:bg-[#283f59f5]"
      onClick={onClick}
    >
      <div className="flex flex-col">
        <FontAwesomeIcon
          icon={faPlus}
          style={{ fontSize: "28px" }}
          className="text-[#0b57d0] "
        />
        <span className="text-[#0b57d0] text-[1rem] ">Add Project</span>
      </div>
    </div>
  );
}

export default Card;
