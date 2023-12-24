import React, { useState } from "react";
import DrawingToolbar from "./Components/Drawing/DrawingToolbar";
import DrawingCanvas from "./Components/Drawing/DrawingCanvas";
import DrawingList from "./Components/Drawing_List/DrawingItem";

const App = () => {
  const [activeTool, setActiveTool] = useState("");
  const [color, setColor] = useState("black");

  return (
    <div className="grid grid-cols-8">
      <div className=" col-span-2  h-screen bg-gray-100">
        <DrawingToolbar setActiveTool={setActiveTool} setColor={setColor} />
        {/* drawing list items */}
        <DrawingList/>
      </div>
      <div className="col-span-6">
        <DrawingCanvas activeTool={activeTool} color={color} />
      </div>
    </div>
  );
};

export default App;
