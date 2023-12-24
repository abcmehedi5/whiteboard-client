import React, { useEffect, useState } from "react";
import { baseURL } from "../../constant/util";
import DrawingCard from "./DrawingCard";
const DrawingList = () => {
  const [drawings, setDrawings] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  // fetch all list items
  useEffect(() => {
    fetch(`${baseURL}/drawing`)
      .then((res) => res.json())
      .then((data) => {
        setDrawings(data);
        setReFetch(false);
      });
  }, [reFetch]);

  // delete drawing list
  const handleDelete = (id) => {
    fetch(`${baseURL}/drawing/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("delete successfull");
          setReFetch(true);
        }
      })
      .catch((err) => {
        alert("something worng");
      });
    console.log(id);
  };
  return (
    <div>
      {drawings?.map((drawing, key) => (
        <DrawingCard drawing={drawing} handleDelete={handleDelete} key={key} />
      ))}
    </div>
  );
};

export default DrawingList;
