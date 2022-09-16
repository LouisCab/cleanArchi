import { BookPeriod } from './bookingPeriod';
export class Hotel {
  constructor(private name: string, private bookedPeriods: BookPeriod[] = []) {
    this.name = name;
  }

  get hotelName(): string {
    return this.name;
  }

  get hotelBookedPeriod(): BookPeriod[] {
    return this.bookedPeriods;
  }
}
