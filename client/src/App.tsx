import React from "react";
import Calendar from "./components/calendar/Calendar";
import User from "./components/user/User";

import UserContext, { IUser } from "./context/userContext";
import "./App.css";

function App() {
  let [user, setUser] = React.useState<IUser>({
    name: "",
    logged: true,
    data: [],
  });

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Calendar />
        <User />
      </UserContext.Provider>
    </div>
  );
}

export default App;
