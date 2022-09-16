import { BookingRepository } from '../../application/booking-repository';
import { Booking } from '../model/booking';
import { BookPeriod } from '../model/bookingPeriod';
import { Hotel } from '../model/hotel';

export function bookingRepositoryTestSuite(
  getRepository: () => BookingRepository,
  getBooks: () => Booking[]
) {
  const repository = getRepository();
  const bookingPeriod = new BookPeriod(
    new Date('2022/01/01'),
    new Date('2022/01/02')
  );
  const booking = new Booking('John', bookingPeriod, new Hotel('Bandol', []));
  it('should save a reservation', () => {
    repository.save(booking);
    expect(getBooks().length).toEqual(1);
    expect(getBooks()[0]).toEqual(booking);
    expect(getBooks()[0]).not.toBe(booking);
  });
}
