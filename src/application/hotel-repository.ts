import { Hotel } from '../domain/model/hotel';

export interface HotelRepository {
  getHotels(): Hotel[];
  // getHotelBookedPeriods(hotelName: string): Hotel;
}
