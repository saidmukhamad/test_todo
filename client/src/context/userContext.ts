import React from "react";

const UserContext = React.createContext<any>(null);

export type IUser = {
  logged: boolean;
  data: any[];
  name: string;
};

export default UserContext;
