import { BookingRepository } from '../application/booking-repository';
import { Booking } from '../domain/model/booking';
import { bookingRepositoryTestSuite } from '../domain/repository/booking-repository.test-suite';
import { InMemBookingRepository } from './in-mem.booking-repository';

describe('In mem test suite booking repository implementation ', () => {
  const inMemRep = new InMemBookingRepository();
  function getRepository(): BookingRepository {
    return inMemRep;
  }

  function getBooks(): Booking[] {
    return inMemRep.getBooks();
  }

  bookingRepositoryTestSuite(getRepository, getBooks);
});
