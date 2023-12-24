import { useEffect } from "react";
import { fabric } from "fabric";

const DrawingCanvas = ({ activeTool, color = "black" }) => {
  useEffect(() => {
    const canvas = new fabric.Canvas("drawingCanvas", {
      isDrawingMode: activeTool === "pencil" ? true : false,
    });

    canvas.freeDrawingBrush.color = color;
    canvas.freeDrawingBrush.width = 5;

    let isDragging = false;
    canvas.on("mouse:down", (options) => {
      const pointer = canvas.getPointer(options.e);

      // Check if an object is already selected
      const target = canvas.findTarget(options.e);
      if (target) {
        return;
      }

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

      isDragging = true; // Set the flag to true on mouse down
    });

    canvas.on("mouse:move", () => {
      if (isDragging) {
        // Handle drawing or resizing if necessary
      }
    });

    canvas.on("mouse:up", () => {
      isDragging = false; // Reset the flag on mouse up
    });

    return () => {
      // Cleanup code if necessary
      canvas.dispose();
    };
  }, [activeTool, color]);

  return (
    <div className="relative border border-gray-300 h-screen">
      <canvas id="drawingCanvas" width="800" height="700"></canvas>
    </div>
  );
};

export default DrawingCanvas;
