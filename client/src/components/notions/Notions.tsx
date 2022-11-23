import React from "react";
import Note from "./note/Note";
import AddNote from "./addNote/AddNote";
import dataContext from "../../context/dataContext";
import "./notions.css";

type Props = {};

function Notions({}: Props) {
  const [add, setAdd] = React.useState<boolean>(false);
  const data = React.useContext<any>(dataContext);

  const profiles = data.profile;
  const list = data.list;

  const [show, setShow] = React.useState<any[]>([]);
  const [active, setActive] = React.useState<number>(profiles[0].id);

  React.useEffect(() => {
    let arr = list.filter((obj: any) => obj.profile === active);
    setShow(arr);
  }, [active, list, profiles]);

  return (
    <div className="notions-container">
      <div className="notions-item-1">
        <h1>Notions</h1>{" "}
        <div>
          <select value={active} onChange={(e) => setActive(parseInt(e.target.value))}>
            {profiles.map((p: any) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="notion-item-2">
        {!add ? (
          <>
            <div className="notion-add">
              <button
                onClick={() => {
                  setAdd(!add);
                }}
              >
                Добавить событие
              </button>
              <button
                onClick={() => {
                  setAdd(!add);
                }}
              >
                Добавить профиль
              </button>
            </div>
            {show.map((note: any) => (
              <Note key={note.id} id={note.id} note={note} deleteNote={data.deleteNote} />
            ))}
            <div className="notion-add">
              {profiles.length !== 1 && (
                <button
                  onClick={() => {
                    data.deleteProfile(active);
                    let test = profiles.filter((p: any) => p.id !== active);
                    setActive(test[0].id);
                  }}
                >
                  Удалить профиль
                </button>
              )}
            </div>
          </>
        ) : (
          <AddNote profileNumber={active} setAdd={setAdd} />
        )}
      </div>
    </div>
  );
}

export default Notions;
