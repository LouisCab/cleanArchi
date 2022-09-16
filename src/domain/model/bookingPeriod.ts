export class BookPeriod {
  constructor(private start: Date, private end: Date) {
    if (start > end) throw new Error('Start date is after end date');
  }

  get startDate() {
    return this.start;
  }

  get endDate() {
    return this.end;
  }
}
