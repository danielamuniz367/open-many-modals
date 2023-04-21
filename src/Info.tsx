import React, { FC } from "react";

interface InfoProps {
  onOpen: () => void;
}

export const Info: FC<InfoProps> = ({ onOpen }) => {
  return (
    <div style={{ display: "block" }}>
      <h4>Here's where we will start our modals.</h4>
      <button onClick={onOpen}>start</button>
    </div>
  );
};
