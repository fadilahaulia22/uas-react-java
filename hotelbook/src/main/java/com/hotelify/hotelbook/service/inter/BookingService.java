package com.hotelify.hotelbook.service.inter;

import com.hotelify.hotelbook.dto.Response;
import com.hotelify.hotelbook.entity.Booking;

public interface BookingService {
    Response saveBooking(Long rooId, Long userId, Booking bookingRequest);
    Response findBookingByConfirmationCode(String confirmationCode);
    Response getAllBookings();
    Response cancelBooking(Long bookingId);
    //  Booking findById(Long id);
}
