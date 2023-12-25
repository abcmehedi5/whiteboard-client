import React, { useEffect, useState } from "react";
import { baseURL } from "../../constant/util";
import DrawingCard from "./DrawingCard";
import toast from "react-hot-toast";
const DrawingList = () => {
  // local state
  const [drawings, setDrawings] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  // fetch all list items
  useEffect(() => {
    setLoading(true);
    fetch(`${baseURL}/drawing`)
      .then((res) => res.json())
      .then((data) => {
        setDrawings(data);
        setReFetch(false);
        setLoading(false);
      });
  }, [reFetch]);

  // delete drawing list
  const handleDelete = (id) => {
    fetch(`${baseURL}/drawing/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success("delete successfull");
          setReFetch(true);
        }
      })
      .catch((err) => {
        toast.error("something worng");
      });
  };
  return (
    <div>
      {drawings?.map((drawing, key) => (
        <DrawingCard
          loading={loading}
          drawing={drawing}
          handleDelete={handleDelete}
          key={key}
        />
      ))}
    </div>
  );
};

export default DrawingList;
