import React from "react";
import UserContext, { IUser } from "../../context/userContext";
import Notions from "../notions/Notions";
import "./user.css";
type Props = {};

type Login = {
  login: string;
  password: string;
};

const User = (props: Props) => {
  let userContext = React.useContext<any>(UserContext);
  let user = userContext.user;

  let [attempt, setAttempt] = React.useState<boolean>(false);
  let [login, setLogin] = React.useState<Login>({
    login: "",
    password: "",
  });

  const handleLogin = (event: any) => {
    switch (event.currentTarget.id) {
      case "login":
        setLogin((prev: any) => ({ ...prev, login: event.target.value }));
        break;
      case "password":
        setLogin((prev: any) => ({ ...prev, password: event.target.value }));
        break;
    }
  };

  return (
    <div className="user">
      {user.logged ? (
        <Notions />
      ) : (
        <div className="user-container">
          <form>
            <h1>Войти</h1>
            <input
              type="text"
              id="login"
              value={login.login}
              onChange={handleLogin}
              placeholder="username"
            />
            <input
              type="text"
              id="password"
              value={login.password}
              onChange={handleLogin}
              placeholder="password"
            />

            <button
              onClick={() => {
                userContext.setUser((prev: any) => ({
                  ...prev,
                  logged: true,
                }));
                // const requestOptions = {
                //   method: "POST",
                //   // when i'm using application\json, node.js handling not a POST, but an OPTION method
                //   headers: { "Content-Type": "text/plain" },
                //   body: JSON.stringify(login),
                // };

                // fetch("http://localhost:3001/auth", requestOptions);
              }}
              type="button"
            >
              Войти
            </button>
          </form>

          <form onSubmit={() => {}}>
            <h1>Зарегистрироваться</h1>
            <input id="name" type="text" placeholder="name" />
            <input id="username" type="text" placeholder="username" />
            <input id="password" type="text" placeholder="password" />

            <button type="submit">Регистрация</button>
          </form>

          {attempt ? <div>Неверный пароль или имя пользователя</div> : null}
        </div>
      )}
    </div>
  );
};

export default User;
