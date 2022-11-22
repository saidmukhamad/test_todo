import React from "react";
import { Cal } from "../../model/calendar";
import Header from "../header/Header";
import DayHolder from "../dayHolder/DayHolder";

type Props = {};

const Calendar = (props: Props) => {
  let [ref, setRef] = React.useState<Cal>(new Cal({}));

  const [test, setTest] = React.useState<boolean>(false);
  const updateMonth = () => {
    const obj: Cal = new Cal(ref.nextMonth());
    setRef(obj);
  };

  const prevMonth = () => {
    const obj: Cal = new Cal(ref.prevMonth());
    setRef(obj);
  };

  return (
    <div className="calendar">
      <Header
        prevMonth={prevMonth}
        updateMonth={updateMonth}
        day={ref.curDay}
        month={ref.curMonth}
        year={ref.curYear}
      />
      <DayHolder month={ref.curMonth} year={ref.curYear} />
    </div>
  );
};

export default Calendar;
