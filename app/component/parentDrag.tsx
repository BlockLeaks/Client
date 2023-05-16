import React from "react";
import FileDrop from "./sonDrag";

interface ParentComponentProps {
  setCID: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ParentComponent: React.FC<ParentComponentProps> = ({ setCID }) => {
  //   const [cid, setCID] = useState<string | undefined>();

  return (
    <div>
      <FileDrop setCID={setCID} />
    </div>
  );
};

export default ParentComponent;
