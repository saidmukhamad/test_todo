import React from "react";
import Note from "./note/Note";
import AddNote from "./addNote/AddNote";
import dataContext from "../../context/dataContext";
import { Create } from "../../context/createContext";
import "./notions.css";
import AddProfile from "./addProfile/AddProfile";
import ViewNote from "./viewNote/ViewNote";

type Props = {};

function Notions({}: Props) {
  const create = React.useContext(Create);
  const data = React.useContext<any>(dataContext);

  // Events
  const [add, setAdd] = React.useState<boolean>(false);
  const [addProfileState, setAddProfileState] = React.useState<boolean>(false);
  const [watch, setWatch] = [create.watch, create.setWatch];

  const profiles = data.profile;
  const list = data.list;

  const [edit, setEdit] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<any[]>([]);
  const [active, setActive] = React.useState<number>(profiles[0].id);

  React.useEffect(() => {
    let arr = list.filter((obj: any) => obj.profile === active);

    setShow(arr);
  }, [active, list, profiles, watch, edit]);

  return (
    <div className="notions-container">
      <div className="notions-item-1">
        <h1
          onClick={() => {
            setWatch({ trigger: false, note: {}, index: 0 });
            create.setCreate({ trigger: false, date: "" });
            setAddProfileState(false);
          }}
        >
          Notions
        </h1>{" "}
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
        {!create.create.state && !addProfileState && !watch.state ? (
          <>
            <div className="notion-add">
              <button
                onClick={() => {
                  create.setCreate({
                    state: true,
                    date: "",
                  });
                }}
              >
                Добавить событие
              </button>
              <button
                onClick={() => {
                  setAddProfileState(!addProfileState);
                }}
              >
                Добавить профиль
              </button>
            </div>
            {show.map((note: any, index: number) => (
              <Note
                index={index}
                key={note.id}
                id={note.id}
                note={note}
                deleteNote={data.deleteNote}
                setWatch={setWatch}
              />
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
        ) : addProfileState ? (
          <AddProfile
            addProfile={data.addProfile}
            setAddProfileState={setAddProfileState}
          />
        ) : create.create.state ? (
          <AddNote
            addNote={data.addNote}
            profileNumber={active}
            setAdd={setAdd}
            date={create.create.date}
            setCreate={create.setCreate}
          />
        ) : (
          <ViewNote
            editNote={data.editNote}
            edit={edit}
            setEdit={setEdit}
            setWatch={setWatch}
            note={watch}
          />
        )}
      </div>
    </div>
  );
}

export default Notions;
