import React from "react";

const UserContext = React.createContext<any>(null);

export type IUser = {
  logged: boolean;
  data: any[];
  name: string;
};

type Props = {
  children?: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  let [user, setUser] = React.useState<IUser>({
    logged: true,
    data: [],
    name: "test",
  });

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserContext;
