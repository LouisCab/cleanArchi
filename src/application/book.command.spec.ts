import { Booking } from '../domain/model/booking';
import { BookPeriod } from '../domain/model/bookingPeriod';
import { Hotel } from '../domain/model/hotel';
import { InMemBookingRepository } from '../infrastructure/in-mem.booking-repository';
import { InMemHotelRepository } from '../infrastructure/in-mem.hotel-repository';
import { BookCommandHandler } from './book.comand';

describe('Book hotel', () => {
  let bookingRepository: InMemBookingRepository;
  let hotelRepository: InMemHotelRepository;
  let bookCommandHandler: BookCommandHandler;
  const userName = 'John';
  const bookPeriod = new BookPeriod(
    new Date('2022/01/01'),
    new Date('2022/01/02')
  );

  const hotel = new Hotel('Bandol', []);

  const booking = new Booking(userName, bookPeriod, hotel);
  beforeEach(() => {
    bookingRepository = new InMemBookingRepository();
    bookCommandHandler = new BookCommandHandler(bookingRepository);
  });

  it('should be able to book', () => {
    hotelRepository.setHotels([hotel]);
    bookCommandHandler.execute(userName, bookPeriod, hotel);
    const books = bookingRepository.getBooks();
    expect(books.length).toBe(1);
    expect(books[0]).toEqual({ userName, bookPeriod, hotel });
  });

  it('should be able to book twice', () => {
    hotelRepository.setHotels([hotel]);
    bookCommandHandler.execute(userName, bookPeriod, hotel);
    bookCommandHandler.execute(userName, bookPeriod, hotel);
    const books = bookingRepository.getBooks();
    expect(books.length).toBe(2);
  });

  it('should not be able to book less than 1 day', () => {
    bookCommandHandler.execute(userName, bookPeriod, hotel);
    const books = bookingRepository.getBooks();
    expect(books.length).toBe(0);
  });

  it('should not be able to book when no hotel is available', () => {
    hotelRepository.setHotels([]);
    bookCommandHandler.execute(userName, bookPeriod, hotel);
    const books = bookingRepository.getBooks();
    expect(books.length).toBe(0);
  });

  it('should be able to book on specified hotel', () => {
    hotelRepository.setHotels([hotel, new Hotel('Superdévoluy', [])]);
    bookCommandHandler.execute(userName, bookPeriod, hotel);
    const books = bookingRepository.getBooks();
    expect(books.length).toBe(1);
    expect(books[0]).toEqual(booking);
  });

  it('should not be able to book on an already booked period', () => {
    const bookPeriod = new BookPeriod(
      new Date('2022-01-01'),
      new Date('2022-01-01')
    );
    const superde = new Hotel('Superdévoluy', [bookPeriod]);
    hotelRepository.setHotels([superde]);
    bookCommandHandler.execute(userName, bookPeriod, superde);
    const books = bookingRepository.getBooks();
    expect(books.length).toBe(1);
  });
});
