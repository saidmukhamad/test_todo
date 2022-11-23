import React from "react";
import Calendar from "./components/calendar/Calendar";
import User from "./components/user/User";
import { UserProvider } from "./context/userContext";
import { DataProvider } from "./context/dataContext";
import CreateProvider from "./context/createContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <DataProvider>
          <CreateProvider>
            <Calendar />
            <User />
          </CreateProvider>
        </DataProvider>
      </UserProvider>
    </div>
  );
}

export default App;
