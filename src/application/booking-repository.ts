import { Booking } from '../domain/model/booking';

export interface BookingRepository {
  save(booking: Booking): void;
  getHotelBooks(hotelName: string): Booking[];
}
