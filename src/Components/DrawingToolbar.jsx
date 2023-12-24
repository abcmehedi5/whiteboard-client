// DrawingToolbar.js
const DrawingToolbar = ({ setActiveTool, setColor }) => {
  return (
    <div className="fixed top-0 left-0 p-4 bg-white shadow-md">
      <button
        className="mr-2 p-2 border rounded"
        onClick={() => setActiveTool("line")}
      >
        Line
      </button>
      <button
        className="mr-2 p-2 border rounded"
        onClick={() => setActiveTool("rectangle")}
      >
        Rectangle
      </button>
      <button
        className="mr-2 p-2 border rounded"
        onClick={() => setActiveTool("text")}
      >
        Text
      </button>
    </div>
  );
};

export default DrawingToolbar;
