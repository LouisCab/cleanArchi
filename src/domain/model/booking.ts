import { BookPeriod } from './bookingPeriod';
import { Hotel } from './hotel';

export class Booking {
  constructor(
    private userName: string,
    private bookPeriod: BookPeriod,
    private hotel: Hotel
  ) {}

  get bookingUserName() {
    return this.userName;
  }

  get bookingPeriod() {
    return this.bookPeriod;
  }

  get bookingHotelName() {
    return this.hotel;
  }
}
