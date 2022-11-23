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
    { notion: "task3", date: "2022-10-10", profile: 0, data: 0, id: 3 },
    { notion: "task3", date: "2022-02-11", profile: 3, data: 0, id: 4 },
    { notion: "task34", date: "2022-04-10", profile: 3, data: 0, id: 5 },
    { notion: "task352", date: "2023-09-10", profile: 3, data: 0, id: 6 },
    { notion: "ta1k3", date: "2022-10-10", profile: 3, data: 0, id: 7 },
    { notion: "one more", date: "2022-10-10", profile: 4, data: 0, id: 8 },
  ]);

  const [profile, setProfile] = React.useState<any[]>([
    { id: 3, name: "check" },
    { id: 1, name: "test" },
    { id: 2, name: "test2" },
    { id: 4, name: "one more" },
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
  const editNote = (noteId: number, notion: string, date: string, data: 0) => {
    let index = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === noteId) {
        index = i;
      }
    }
    let tmp: any[] = Object.assign(list);
    tmp[index] = Object.assign({
      notion: notion,
      date: date,
      profile: tmp[index].profile,
      data: data,
      id: tmp[index].id,
    });

    setList([...tmp]);

    // setList((prev: any[]) => ([
    //   ...prev,
    //   [index]: {...prev[index], notion: notion, date: date},
    // ]));

    // fetch
  };

  let addNote = (note: string, date: string, profileId: number, data: any = 0) => {
    setList((prev: any[]) => [
      ...prev,
      {
        notion: note,
        date: date,
        profile: profileId,
        id: list[list.length - 1].id + 1,
        data: data,
      },
    ]);
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
