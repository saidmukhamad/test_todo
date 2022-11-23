import React from "react";

type Props = {
  setAdd: any;
  profileNumber: number;
  date: string;
  addNote?: any;
  setCreate?: any;
};

function AddNote({ setAdd, setCreate, addNote, profileNumber, date }: Props) {
  const [note, setNote] = React.useState<string>("");
  const inp = React.useRef<any>(null);
  const dateRef = React.useRef<any>(null);
  const out = () => {
    setAdd(false);
    setCreate((p: any) => ({ date: "", state: false }));
  };

  return (
    <div className="add-note-container">
      <div className="add-note-item-1">
        <button onClick={() => out()}>назад</button>
      </div>

      <div className="add-note-item-2">
        <p>дата</p>
        <input
          ref={dateRef}
          type="date"
          onChange={(e) => {
            setCreate((prev: any) => ({ ...prev, date: e.target.value }));
          }}
          value={date}
        />
      </div>
      <div>
        <p>текст</p>
        <textarea
          ref={inp}
          value={note}
          required
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </div>

      <div>
        <p>файл</p>
        <input type="file" name="" id="" />
      </div>

      <div>
        <button
          onClick={() => {
            if (note.length > 1 || date !== "") {
              addNote(note, date, profileNumber);
              out();
            } else {
              if (note.length < 1) inp.current.style.border = "2px solid red";
              if (date == "") {
                dateRef.current.style.border = "2px solid red";
              }
            }
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default AddNote;
