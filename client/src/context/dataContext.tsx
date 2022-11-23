import React from "react";

type Props = {
  children?: React.ReactNode;
};

const dataContext = React.createContext<any>(null);

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = React.useState<any>({ test: "test" });
  const [isLogged, setIsLogged] = React.useState<boolean>(false);
  const [list, setList] = React.useState<any[]>([
    { notion: "task1", date: "2022-10-10", profile: 1, data: 0, id: 1 },
    { notion: "task2", date: "2022-10-10", profile: 2, data: 0, id: 2 },
    { notion: "task3", date: "2022-10-10", profile: 3, data: 0, id: 3 },
    { notion: "task3", date: "2022-02-11", profile: 3, data: 0, id: 4 },
    { notion: "task34", date: "2022-04-10", profile: 3, data: 0, id: 5 },
    { notion: "task352", date: "2023-09-10", profile: 3, data: 0, id: 6 },
    { notion: "ta1k3", date: "2022-10-10", profile: 3, data: 0, id: 7 },
  ]);

  const [profile, setProfile] = React.useState<any[]>([
    { id: 3, name: "check" },

    { id: 1, name: "test" },
    { id: 2, name: "test2" },
    // { id: 3, name: "check" },
  ]);

  // fetch data when url is ready
  React.useEffect(() => {
    if (isLogged) {
    }
  }, [isLogged]);

  const addProfile = (name: string) => {
    let newId = profile[profile.length - 1].id + 1;
    setProfile((prev: any[]) => [...prev, { id: newId, name: name }]);

    // fetch
  };

  const deleteProfile = (id: number) => {
    setProfile((prev: any[]) => prev.filter((p: any) => p.id !== id));

    // fetch
  };

  const editProfile = (index: number, id: number, name: string) => {
    let tmp = profile;
    tmp[index] = { ...tmp[index], name: name };
  };

  const deleteNote = (noteId: number) => {
    setList((prev: any) => prev.filter((task: any) => task.id !== noteId));
    // fetch
  };

  /**
   *
   * @param index
   * @param notion
   * @param date
   *
   * @description index can be easily sended from object
   */
  const editNote = (index: number, noteId: number, notion: string, date: string) => {
    let tmp: any[] = list;
    tmp[index] = { id: tmp[index].id, notion: notion, date: date };
    setList(tmp);

    // setList((prev: any[]) => ([
    //   ...prev,
    //   [index]: {...prev[index], notion: notion, date: date},
    // ]));
    // fetch
  };

  let addNote = (note: string, date: string, profileId: number) => {
    let id = profile[profile.length - 1].id + 1;
    setList((prev: any[]) => [...prev, { notion: note, date: date, profileId: id }]);
    // fetch
  };

  return (
    <dataContext.Provider
      value={{
        data,
        list,
        profile,
        addProfile,
        deleteProfile,
        editProfile,
        addNote,
        editNote,
        deleteNote,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
