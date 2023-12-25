import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaTextHeight } from "react-icons/fa";
import { useState } from "react";

const DrawingToolbar = ({ setActiveTool, setColor }) => {
  // local state for active tool
  const [activeTool, setActiveToolState] = useState("");

  const handleSetActiveTool = (tool) => {
    setActiveTool(tool);
    setActiveToolState(tool);
  };

  return (
    <div className="top-0 left-0 p-4 bg-stone-100 shadow-md w-full">
      <div className="flex justify-around">
        <button
          className={`mr-2 p-2 border rounded flex items-center gap-2 ${
            activeTool === "pencil" ? "bg-blue-200" : ""
          }`} // conditionally apply style for active tool
          onClick={() => handleSetActiveTool("pencil")}
        >
          <span>
            <FaPencilAlt />
          </span>
        </button>
        <button
          className={`mr-2 p-2 border rounded flex items-center gap-2 ${
            activeTool === "rectangle" ? "bg-blue-200" : ""
          }`} // conditionally apply style for active tool
          onClick={() => handleSetActiveTool("rectangle")}
        >
          <span>
            <MdOutlineCheckBoxOutlineBlank />
          </span>
        </button>
        <button
          className={`mr-2 p-2 border rounded flex items-center gap-2 ${
            activeTool === "text" ? "bg-blue-200" : ""
          }`} // conditionally apply style for active tool
          onClick={() => handleSetActiveTool("text")}
        >
          <span>
            <FaTextHeight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DrawingToolbar;
