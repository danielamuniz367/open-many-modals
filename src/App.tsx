import { useState } from "react";
import { Info } from "./Info";
import { Modal } from "./Modal";
import "./styles.css";

export interface ModalInterfaceProps {
  id: string;
  position: { top: string; left: string };
  zIndex: string;
}

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [modals, setModals] = useState<ModalInterfaceProps[]>();

  function generateTop(max = 300) {
    return Math.floor(Math.random() * max);
  }

  function generateLeft(max = 150) {
    return Math.floor(Math.random() * max);
  }

  function addModal() {
    setCount(count + 1);
    if (!modals) {
      setModals([
        {
          id: count.toString(),
          position: {
            top: generateTop().toString(),
            left: generateLeft().toString()
          },
          zIndex: count.toString()
        }
      ]);
    } else {
      setModals([
        ...modals,
        {
          id: count.toString(),
          position: {
            top: generateTop().toString(),
            left: generateLeft().toString()
          },
          zIndex: count.toString()
        }
      ]);
    }
  }

  function closeModal(id?: string) {
    setModals(modals?.filter((modal) => modal.id !== id));
  }

  return (
    <div className="App">
      <Info onOpen={addModal} />
      {modals?.map((map) => (
        <Modal {...map} onOpen={addModal} onClose={closeModal} />
      ))}
    </div>
  );
}
