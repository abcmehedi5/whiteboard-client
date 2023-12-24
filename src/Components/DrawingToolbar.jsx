import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaTextHeight } from "react-icons/fa";

const DrawingToolbar = ({ setActiveTool, setColor }) => {
  const handleSetActiveTool = (tool) => {
    setActiveTool(tool);
  };

  return (
    <div className=" top-0 left-0 p-4 bg-white shadow-md w-full">
      <div className="flex justify-around ">
        <button
          className="mr-2 p-2 border rounded flex items-center gap-2"
          onClick={() => handleSetActiveTool("pencil")}
        >
          <span>
            <FaPencilAlt />
          </span>
        </button>
        <button
          className="mr-2 p-2 border rounded flex items-center gap-2"
          onClick={() => handleSetActiveTool("rectangle")}
        >
          <span>
            <MdOutlineCheckBoxOutlineBlank />
          </span>
        </button>
        <button
          className="mr-2 p-2 border rounded flex items-center gap-2"
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
