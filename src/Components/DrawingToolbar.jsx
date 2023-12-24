const DrawingToolbar = ({ setActiveTool, setColor }) => {
  const handleSetActiveTool = (tool) => {
    setActiveTool(tool);
  };

  return (
    <div className="fixed top-0 left-0 p-4 bg-white shadow-md">
      <button
        className="mr-2 p-2 border rounded"
        onClick={() => handleSetActiveTool("line")}
      >
        Line
      </button>
      <button
        className="mr-2 p-2 border rounded"
        onClick={() => handleSetActiveTool("rectangle")}
      >
        Rectangle
      </button>
      <button
        className="mr-2 p-2 border rounded"
        onClick={() => handleSetActiveTool("text")}
      >
        Text
      </button>
    </div>
  );
};

export default DrawingToolbar;
