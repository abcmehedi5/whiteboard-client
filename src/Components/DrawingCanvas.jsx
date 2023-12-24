import { useEffect } from "react";
import { fabric } from "fabric";

const DrawingCanvas = ({ activeTool, color = "black" }) => {
  useEffect(() => {
    const canvas = new fabric.Canvas("drawingCanvas", {
      isDrawingMode: false,
    });

    // Set initial brush properties
    canvas.freeDrawingBrush.color = color;
    canvas.freeDrawingBrush.width = 5;

    // Remove previous event listeners
    canvas.off("mouse:down");

    // Event listener for mouse down
    canvas.on("mouse:down", (options) => {
      console.log("Active tool in mouse down:", activeTool);
      const pointer = canvas.getPointer(options.e);
      switch (activeTool) {
        case "line":
          const points = [pointer.x, pointer.y, pointer.x, pointer.y];
          const line = new fabric.Line(points, {
            strokeWidth: 5,
            stroke: color,
          });
          canvas.add(line);
          break;

        case "rectangle":
          const rect = new fabric.Rect({
            left: pointer.x,
            top: pointer.y,
            width: 50,
            height: 50,
            fill: color,
            strokeWidth: 2,
            stroke: "black",
          });
          canvas.add(rect);
          break;

        case "text":
          const text = new fabric.IText("Enter text", {
            left: pointer.x,
            top: pointer.y,
            fill: color,
            fontSize: 20,
          });
          canvas.add(text);
          text.enterEditing();
          text.hiddenTextarea.focus();
          break;

        default:
          break;
      }
    });
  }, [activeTool, color]);

  return (
    <div className="relative border border-gray-300 h-screen">
      <canvas id="drawingCanvas" width="800" height="600"></canvas>
    </div>
  );
};

export default DrawingCanvas;
