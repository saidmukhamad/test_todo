import React from "react";
import "./notions.css";

type Props = {};

function Notions({}: Props) {
  const [profile, setProfile] = React.useState<any>({
    list: [
      { notion: "task1", date: "2022-10-10", profile: 1 },
      { notion: "task2", date: "2022-10-10", profile: 2 },
      { notion: "task3", date: "2022-10-10", profile: 3 },
      { notion: "task3", date: "2022-02-11", profile: 3 },
      { notion: "task34", date: "2022-04-10", profile: 3 },
      { notion: "task352", date: "2023-09-10", profile: 3 },
      { notion: "ta1k3", date: "2022-10-10", profile: 3 },
    ],
    profiles: [
      { id: 1, name: "test" },
      { id: 2, name: "test2" },
      { id: 3, name: "check" },
    ],
  });

  // let test: Date = new Date(profile.list[0].date);

  const [active, setActive] = React.useState<any>(1);
  const [list, setList] = React.useState<any>(profile.list);

  React.useEffect(() => {
    let arr = profile.list.filter((obj: any) => obj.profile === active);
    setList(arr);
  }, [active]);

  return (
    <div className="notions-container">
      <div className="notions-item-1">
        <h1>Notions</h1>{" "}
        <div>
          <select value={active} onChange={(e) => setActive(parseInt(e.target.value))}>
            {profile.profiles.map((p: any) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {list.map((note: any) => (
          <div>
            <p>{note.notion}</p>
            <>{console.log(note)}</>
            <>{note.date.replaceAll("-", " ")}</>
            <button>delete</button>
            <button>edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notions;
