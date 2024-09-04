package com.hotelify.hotelbook.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelify.hotelbook.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking,Long>{
    Optional<Booking> findByBookingConfirmationCode(String confirmationCode);
}
