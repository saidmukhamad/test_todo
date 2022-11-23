import { Console } from "console";
import React from "react";
import { months, dates } from "../../model/month";
import "./header.css";

type Props = {
  day: number;
  month: number;
  year: number;
  updateMonth: Function;
  prevMonth: Function;
};

const Header = function ({ day, month, year, updateMonth, prevMonth }: Props) {
  return (
    <div className="header">
      <div onClick={() => prevMonth()}> {"<"} </div>
      {months[month]} {year}
      <div onClick={() => updateMonth()}>{">"}</div>
    </div>
  );
};

export default Header;
