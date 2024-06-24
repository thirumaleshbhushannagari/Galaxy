import React from "react";
import { FaTimes } from "react-icons/fa";

const Modul = ({ Modul, handleclick }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="croos">
          <FaTimes style={{ color: "white" }} size={25} onClick={handleclick} />
        </div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum
          quibusdam quis nobis amet aliquid non?
        </h2>
      </div>
    </div>
  );
};

export default Modul;
