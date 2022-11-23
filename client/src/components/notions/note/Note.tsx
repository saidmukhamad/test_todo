import React from "react";

type Props = {
  note: any;
  id: number;
  index: number;
  deleteNote: Function;
  setWatch: Function;
};

const Note = ({ note, deleteNote, id, index, setWatch }: Props) => {
  return (
    <div
      onClick={() => setWatch({ state: true, note: note, index: index })}
      className="notion"
    >
      <div>{note.date.replaceAll("-", " ")}</div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteNote(id);
        }}
      >
        delete
      </button>
      <button>edit</button>
    </div>
  );
};

export default Note;
