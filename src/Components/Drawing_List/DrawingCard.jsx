import React, { useState } from "react";

import { MdDelete } from "react-icons/md";
import { baseURL } from "../../constant/util";
import DrawingView from "../DrawingView/DrawingView";
import ListSkeleton from "../common/Skeleton/List_skeleton";

const DrawingCard = ({ drawing, handleDelete, loading }) => {
  const [singleDrawing, setSingleDrawing] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  // get single drawing data after click the drawing list
  const handleList = (id) => {
    setLoadingModal(true);
    fetch(`${baseURL}/drawing/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleDrawing(data);
        setLoadingModal(false);
        openModal();
      })
      .catch((err) => {
        setLoadingModal(false);
      });
  };

  //   modal open and close handler
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
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
          <h1>
            {loadingModal && (
              <span className="text-gray-400">Please Wait..</span>
            )}
          </h1>
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
      {/* drawing details view */}
      <DrawingView
        singleDrawing={singleDrawing}
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default DrawingCard;
