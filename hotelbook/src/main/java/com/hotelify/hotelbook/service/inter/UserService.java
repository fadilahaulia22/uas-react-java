package com.hotelify.hotelbook.service.inter;

import com.hotelify.hotelbook.dto.LoginRequest;
import com.hotelify.hotelbook.dto.Response;
import com.hotelify.hotelbook.entity.User;

public interface UserService {
    Response register(User user);
    Response login(LoginRequest loginRequest);
    Response getAllUsers();
    Response getUSerBookingHistory(String userId);
    Response deleteUser(String userId);
    Response getUserById(String userId);
    Response getMyInfo(String email);
}
