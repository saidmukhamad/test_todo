import React from "react";

type Props = {
  note: any;
  edit?: boolean;
  setWatch: Function;
  setEdit: Function;
  editNote: Function;
};

/**
 *
 * @description view and edit of Note
 * @returns
 */
const ViewNote = ({ note, edit = false, setWatch, setEdit, editNote }: Props) => {
  let [show, setShow] = React.useState<any>(Object.assign(note.note));
  React.useEffect(() => {
    setShow(Object.assign(note.note));
  }, [edit]);
  return (
    <div className="add-note-container">
      <div id="add-note-item-1">
        <button
          onClick={() => {
            setWatch({
              trigger: false,
              note: {},
              index: 0,
            });
          }}
        >
          назад
        </button>
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          изменить
        </button>
      </div>
      <div>
        <p>Note</p>
        <textarea
          id={`textarea-${!edit ? "disable" : null}`}
          disabled={!edit}
          value={show.notion}
          onChange={(e) => {
            setShow((prev: any) => ({ ...prev, notion: e.target.value }));
          }}
        />
      </div>
      <div>
        <input
          disabled={!edit}
          type="date"
          value={show.date}
          onChange={(e) => {
            setShow((prev: any) => ({ ...prev, date: e.target.value }));
          }}
        />
      </div>
      {note.data && (
        <div>
          <button>Скачать файл</button>
          <button>Удалить файл</button>
        </div>
      )}
      {!note.data && (
        <div>
          <p>Добавить файл</p>
          <input type="file" name="" id="" />
        </div>
      )}

      {edit && (
        <div>
          {" "}
          <button
            onClick={() => {
              editNote(note.index, show.id, show.notion, show.date, show.data);

              setWatch({
                trigger: false,
                note: {},
                index: 0,
              });
            }}
          >
            Сохранить изменения
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewNote;
