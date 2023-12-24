import React from "react";

import { MdDelete } from "react-icons/md";
import ListSkeleton from "../common/list_skeleton";

const DrawingCard = ({ drawing, handleDelete, loading }) => {
  const handleList = (id) => {
    console.log(id);
  };

  return (
    <>
      {loading ? (
        <ListSkeleton />
      ) : (
        <div className="bg-slate-200 shadow my-3 p-1 flex justify-between items-center cursor-pointer">
          <div
            className="flex gap-3 items-center"
            onClick={() => {
              handleList(drawing?._id);
            }}
          >
            <img src={drawing.drawing} className="h-12, w-12 border-1" />
            <div>
              <h4 className="text-lg">{drawing?.type}</h4>
              <h6 className="text-sm text-gray-400">
                {new Date(drawing?.date)
                  .toISOString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("/")}
              </h6>
            </div>
          </div>
          <button
            onClick={() => {
              handleDelete(drawing?._id);
            }}
          >
            <MdDelete
              style={{
                fontSize: "20px",
                background: "white",
                borderRadius: "50%",
                padding: "3px",
              }}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default DrawingCard;
