import { HotelRepository } from '../application/hotel-repository';
import { Hotel } from '../domain/model/hotel';

export class InMemHotelRepository implements HotelRepository {
  private hotels: Hotel[] = [];
  getHotels() {
    return this.hotels;
  }
  setHotels(hotels: Hotel[]) {
    this.hotels = hotels;
  }
}

// TODO in-mem.room-repository.ts
