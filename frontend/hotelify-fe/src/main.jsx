import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./component/home/HomePage.jsx";
import LoginPage from "./component/auth/LoginPage.jsx";
import RegisterPage from "./component/auth/RegisterPage.jsx";
import AllRoomsPage from "./component/booking_room/AllRoomsPage.jsx";
import FindBookingPage from "./component/booking_room/FindBookingPage.jsx";
import RoomDetailsPage from "./component/booking_room/RoomDetailsPage.jsx";
import ProfilePage from "./component/profile/ProfilePage.jsx";
import EditProfilePage from "./component/profile/EditProfilePage.jsx";
import AdminPage from "./component/admin/AdminPage.jsx";
import ManageRoomPage from "./component/admin/ManageRoomPage.jsx";
import EditRoomPage from "./component/admin/EditRoomPage.jsx";
import AddRoomPage from "./component/admin/AddRoomPage.jsx";
import ManageBookingsPage from "./component/admin/ManageBookingsPage.jsx";
import EditBookingPage from "./component/admin/EditBookingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/rooms",
        element: <AllRoomsPage />,
      },
      {
        path: "/find-booking",
        element: <FindBookingPage />,
      },
      {
        path: "/room-details-book/:roomId",
        element: <RoomDetailsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/edit-profile",
        element: <EditProfilePage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/admin/manage-rooms",
        element: <ManageRoomPage />,
      },
      {
        path: "/admin/edit-room/:roomId",
        element: <EditRoomPage />,
      },
      {
        path: "/admin/add-room",
        element: <AddRoomPage />,
      },
      {
        path: "/admin/manage-bookings",
        element: <ManageBookingsPage />,
      },
      // {
      //   path: "/admin/edit-booking/:id",
      //   element: <BookingDetailPage  />,
      // },
      {
        path: "/admin/edit-booking/:bookingCode",
        element: <EditBookingPage />,
      },
      {
        path: "*",
        element: <Navigate to="/login" />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);