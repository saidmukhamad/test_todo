import React from "react";
import "./dayHolder.css";
import { Create } from "../../context/createContext";
import { dates } from "../../model/month";

type Props = {
  month: number;
  year: number;
};

function newNote(data: any, trigger: any, year: number) {
  let month = data.month.length === 1 ? `0${data.month}` : data.month;
  let day = data.day.length === 1 ? `0${data.day}` : data.day;
  trigger.setCreate({
    trigger: true,
    date: `${year}-${month}-${day}`,
  });
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

let drawCalendar = (month: number, year: number) => {
  // will update later
  let arr: any[] = [];

  let counter: number = 1;
  let curMaxDays: number = getDaysInMonth(year, month + 1);
  let prevMonth: number = month - 1 < 0 ? 11 : month;
  let curMonth: number = month + 1;
  let prevYear: number = month === 11 ? year - 1 : year;
  let prevMaxDays = getDaysInMonth(prevYear, prevMonth);
  let prevCounter = prevMaxDays;
  let state: "prev" | "cur" | "next" = "prev";

  for (let i = 0; i < 5; i++) {
    let week = [{}, {}, {}, {}, {}, {}, {}];
    let weekCounter = 0;
    let test = new Date();
    test.setMonth(month);
    test.setFullYear(year);

    if (arr.length === 0) {
      test.setDate(0);
      for (let j = test.getDay(); j != 0; j--) {
        week[j - 1] = { day: prevCounter, month: prevMonth, class: state };
        prevCounter--;
        weekCounter++;
      }
    }
    state = "cur";

    while (weekCounter != 7) {
      if (counter === curMaxDays + 1) {
        counter = 1;
        state = "next";
      }
      week[weekCounter] = { day: counter, month: curMonth, class: state };
      counter++;
      weekCounter++;
    }
    arr.push(week);
  }
  return arr;
};

const DayHolder = ({ month, year }: Props) => {
  let trigger = React.useContext(Create);
  console.log(trigger);
  let [test, setTest] = React.useState<any[]>();
  console.log(test);
  React.useEffect(() => {
    setTest(drawCalendar(month, year));
  }, [month, year]);

  return (
    <div>
      <div className="weekdays">
        <p>Mon</p>
        <p>Tue</p>
        <p>Thur</p>
        <p>Wend</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>

      {test ? (
        <div className="week-container">
          {test.map((week, index) => (
            <div key={index} className="weekdates">
              {week.map((data: any, index: number) =>
                index < 5 ? (
                  <p
                    onClick={() => {
                      newNote(data, trigger, year);
                    }}
                    className={data.class}
                    key={data.month + data.day}
                  >
                    {" "}
                    {data.day}
                  </p>
                ) : (
                  <p
                    onClick={() => {
                      newNote(data, trigger, year);
                    }}
                    className={data.class}
                    id="weekends"
                    key={data.day + data.month}
                  >
                    {data.day}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DayHolder;
