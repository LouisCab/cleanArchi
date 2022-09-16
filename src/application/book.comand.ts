import { Booking } from '../domain/model/booking';
import { BookPeriod } from '../domain/model/bookingPeriod';
import { Hotel } from '../domain/model/hotel';
import { BookingRepository } from './booking-repository';

export class BookCommandHandler {
  constructor(private readonly bookingRepository: BookingRepository) {}
  execute(userName: string, bookingPeriod: BookPeriod, hotel: Hotel) {
    const booking = new Booking(userName, bookingPeriod, hotel);
    const bookings = this.bookingRepository.getHotelBooks(hotel.hotelName);
    console.log(bookings);
    if (!hotel) {
      return;
    }

    this.bookingRepository.save(booking);
  }
}

// TODO : Add model periode de réservation pour implémenter ses propes règles métiers.
