import React from "react";
import Calendar from "./components/calendar/Calendar";
import User from "./components/user/User";
import { UserProvider } from "./context/userContext";
import { DataProvider } from "./context/dataContext";
import { Create } from "./context/createContext";
import "./App.css";

function App() {
  let [create, setCreate] = React.useState({
    state: false,
    date: "",
  });

  return (
    <div className="App">
      <UserProvider>
        <DataProvider>
          <Create.Provider value={{ create, setCreate }}>
            <Calendar />
            <User />
          </Create.Provider>
        </DataProvider>
      </UserProvider>
    </div>
  );
}

export default App;
