import { FaDownload } from "react-icons/fa";
import Modal from "../common/Modal/Modal";
import { IoCloseCircleOutline } from "react-icons/io5";

const DrawingView = ({
  singleDrawing,
  isOpen,
  setIsOpen,
  closeModal,
  openModal,
}) => {
  const { type, date, drawing } = singleDrawing;
  return (
    <Modal
      openModal={openModal}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      closeModal={closeModal}
      title={type}
      className="max-w-2xl"
    >
      {/* close icon */}
      <button onClick={closeModal} className={"absolute right-3 top-2 "}>
        <IoCloseCircleOutline style={{ fontSize: "28px" }} />
      </button>
      <div>
        <img className="border" src={drawing} alt="" />
      </div>
      <button className="mt-4 flex items-center gap-2 bg-purple-400 p-2 rounded-lg text-white">
        Download
        <span>
          <FaDownload />
        </span>
      </button>
    </Modal>
  );
};

export default DrawingView;
