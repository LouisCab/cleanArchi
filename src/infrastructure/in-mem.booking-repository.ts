import { BookingRepository } from '../application/booking-repository';
import { Booking } from '../domain/model/booking';

export class InMemBookingRepository implements BookingRepository {
  private bookings: Booking[] = [];
  save(booking: Booking): void {
    this.bookings.push(
      new Booking(
        booking.bookingUserName,
        booking.bookingPeriod,
        booking.bookingHotelName
      )
    );
  }
  getBooks() {
    return this.bookings;
  }

  getHotelBooks(hotelName: string): Booking[] {
    return this.bookings.filter((book: Booking) => {
      book.bookingHotelName.toString() === hotelName;
    });
  }
}
