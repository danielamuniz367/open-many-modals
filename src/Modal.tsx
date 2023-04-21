import React, { FC } from "react";

interface ModalProps {
  id: string;
  position: { top: string; left: string };
  zIndex: string;
  onOpen: () => void;
  onClose: (id?: string) => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { id, position, zIndex, onOpen, onClose } = props;

  const modalStyle: React.CSSProperties = {
    border: "1px solid",
    padding: "1rem",
    width: "20rem",
    backgroundColor: "white",
    position: "absolute",
    top: `${position.top}px`,
    left: `${position.left}px`,
    zIndex: `${zIndex}`
  };

  return (
    <div id={id} style={modalStyle}>
      Here's the modal
      <button onClick={onOpen}>open modal</button>
      <button onClick={() => onClose(id)}>close modal</button>
    </div>
  );
};
