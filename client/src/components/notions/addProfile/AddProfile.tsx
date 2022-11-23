import React from "react";

type Props = {
  setAddProfileState: Function;
  addProfile: Function;
};

function AddProfile({ setAddProfileState, addProfile }: Props) {
  const [name, setName] = React.useState<string>("");

  return (
    <div className="add-note-container">
      <div className="add-note-item-1">
        <button onClick={() => setAddProfileState(false)}>назад</button>
      </div>

      <div>
        <p>имя</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <button
          onClick={() => {
            addProfile(name);
            setAddProfileState(false);
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default AddProfile;
