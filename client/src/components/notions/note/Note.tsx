import React from "react";

type Props = {
  note: any;
  deleteNote: Function;
  id: number;
};

const Note = ({ note, deleteNote, id }: Props) => {
  return (
    <div className="notion">
      <div>{note.date.replaceAll("-", " ")}</div>
      <button onClick={() => deleteNote(id)}>delete</button>
      <button>edit</button>
    </div>
  );
};

export default Note;
