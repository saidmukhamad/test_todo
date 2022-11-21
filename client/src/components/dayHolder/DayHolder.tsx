import React from "react";
import "./dayHolder.css";
import { dates } from "../../model/month";
type Props = {
  month: number;
  year: number;
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

let drawCalendar = (month: number, year: number) => {
  let arr: any[] = [];
  let counter = 1;
  let curMaxDays = getDaysInMonth(year, month);
  let prevMonth: number = month - 1 < 0 ? 11 : month - 1;
  let prevYear: number = month === 11 ? year - 1 : year;
  let prevMaxDays = getDaysInMonth(prevYear, prevMonth);

  for (let i = 0; i < 5; i++) {
    let week = [0, 0, 0, 0, 0, 0, 0];
    let weekCounter = 0;
    let test = new Date();
    test.setMonth(month);
    test.setFullYear(year);

    if (arr.length === 0) {
      test.setDate(0);
      for (let j = test.getDay(); j != 0; j--) {
        week[j - 1] = prevMaxDays;
        prevMaxDays--;
        weekCounter++;
      }
    }

    while (weekCounter != 7) {
      if (counter === curMaxDays + 1) {
        counter = 1;
      }
      week[weekCounter] = counter;
      counter++;
      weekCounter++;
    }
    arr.push(week);
  }
  console.log(arr);
  return arr;
};

const DayHolder = ({ month, year }: Props) => {
  let [test, setTest] = React.useState<any[]>();

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

      {test
        ? test.map((week, index) => (
            <div key={index} className="weekdays">
              <p key={week[0]}>{week[0]}</p>
              <p key={week[1]}>{week[1]}</p>
              <p key={week[2]}>{week[2]}</p>
              <p key={week[3]}>{week[3]}</p>
              <p key={week[4]}>{week[4]}</p>
              <p key={week[5]}> {week[5]}</p>
              <p key={week[6]}>{week[6]}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default DayHolder;
