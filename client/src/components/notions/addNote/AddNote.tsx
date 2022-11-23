import React from "react";

type Props = {
  setAdd: any;
  profileNumber: number;
  addNote?: any;
};

function AddNote({ setAdd, profileNumber }: Props) {
  return (
    <div>
      AddNote
      <button
        onClick={() => {
          setAdd(false);
        }}
      >
        asd
      </button>
    </div>
  );
}

export default AddNote;
