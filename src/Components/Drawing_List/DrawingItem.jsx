import React, { useEffect, useState } from "react";
import { baseURL } from "../../constant/util";
import DrawingCard from "./DrawingCard";
import toast from "react-hot-toast";
const DrawingList = ({ reFetch }) => {
  // local state
  const [drawings, setDrawings] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch all list items
  useEffect(() => {
    setLoading(true);
    fetch(`${baseURL}/drawing`)
      .then((res) => res.json())
      .then((data) => {
        setDrawings(data);
        setLoading(false);
      });
  }, [reFetch]);

  // delete drawing list
  const handleDelete = (id) => {
    // confirmation alert
    const isConfirm = confirm('Want to delete?');
    if (isConfirm) {
      fetch(`${baseURL}/drawing/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            toast.success("delete successfull");
            reFetch();
          }
        })
        .catch((err) => {
          toast.error("something worng");
        });
    }
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
