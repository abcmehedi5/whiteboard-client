import React, { useEffect, useState } from "react";
import { baseURL } from "../../constant/util";
import DrawingCard from "./DrawingCard";
const DrawingList = () => {
  const [drawings, setDrawings] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/drawing`)
      .then((res) => res.json())
      .then((data) => {
        setDrawings(data);
      });
  }, []);
  return (
    <div>
      {drawings?.map((drawing, key) => (
        <DrawingCard drawing={drawing} key={key} />
      ))}
    </div>
  );
};

export default DrawingList;
