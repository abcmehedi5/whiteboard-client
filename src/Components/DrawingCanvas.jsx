import { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import { baseURL } from "../constant/util";

const DrawingCanvas = ({ activeTool, color = "black" }) => {
  const [isCanvasInitialized, setIsCanvasInitialized] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas("drawingCanvas", {
      isDrawingMode: activeTool === "pencil" ? true : false,
    });

    canvas.freeDrawingBrush.color = color;
    canvas.freeDrawingBrush.width = 5;

    let isDragging = false;

    canvas.on("mouse:down", (options) => {
      const pointer = canvas.getPointer(options.e);
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

      isDragging = true;
    });

    canvas.on("mouse:move", () => {
      if (isDragging) {
        // Handle drawing or resizing if necessary
      }
    });

    canvas.on("mouse:up", () => {
      isDragging = false;
    });

    canvasRef.current = canvas;
    setIsCanvasInitialized(true);

    return () => {
      canvas.dispose();
    };
  }, [activeTool, color]);

  // action area -----------------

  // handle save drawing in database
  const handleSaveDrawing = async () => {
    if (!isCanvasInitialized) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    const drawingData = {
      drawing: dataURL,
      type: activeTool,
      date: new Date(),
    };
    try {
      const response = await fetch(`${baseURL}/api/drawing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(drawingData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Drawing saved:", data);
      } else {
        console.error("Failed to save drawing");
      }
    } catch (error) {
      console.error("Error saving drawing:", error);
    }
  };

  return (
    <div className="relative border border-gray-300 h-screen">
      <button onClick={() => handleSaveDrawing()}>Save</button>
      <canvas id="drawingCanvas" width="800" height="700"></canvas>
    </div>
  );
};

export default DrawingCanvas;
