import React, { useState } from "react";
import DrawingToolbar from "./Components/DrawingToolbar";
import DrawingCanvas from "./Components/DrawingCanvas";

const App = () => {
  const [activeTool, setActiveTool] = useState('rectangle');
  const [color, setColor] = useState("black");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <DrawingToolbar setActiveTool={setActiveTool} setColor={setColor} />
      <DrawingCanvas activeTool={activeTool} color={color} />
    </div>
  );
};

export default App;
