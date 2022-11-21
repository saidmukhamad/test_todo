export class Cal {
  date: Date;

  curDate: number;
  curDay: number;
  curMonth: number;
  curYear: number;

  constructor({
    date = new Date(),
    curMonth = date.getMonth(),
    curDate = date.getDate(),
    curDay = date.getDay(),
    curYear = date.getFullYear(),
  }: {
    date?: Date;
    curDate?: number;
    curDay?: number;
    curMonth?: number;
    curYear?: number;
  }) {
    this.date = date;
    this.curMonth = curMonth;
    this.curDate = curDate;
    this.curDay = curDay;
    this.curYear = curYear;
  }

  public nextMonth() {
    if (this.curMonth === 11) {
      this.curYear += 1;
      this.curMonth = 0;
      return this;
    } else {
      this.curMonth += 1;
      return this;
    }
  }
  public prevMonth() {
    if (this.curMonth === 0) {
      this.curYear -= 1;
      this.curMonth = 11;
      return this;
    } else {
      this.curMonth -= 1;
      return this;
    }
  }
}
