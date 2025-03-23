import React, { useEffect, useState } from "react";
import NavbarTourGuide from "../NavbarTourGuide";

function MyTourBookings() {
  // Simulating API Data
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchBookings = async () => {
      setTimeout(() => {
        setBookings([
          {
            id: "B12345",
            tourName: "Amazing Europe Trip",
            customerName: "John Doe",
            tourDate: "2025-06-15",
            fromLocation: "New York",
            toLocation: "Paris",
            pricePerTicket: 1200,
            totalTickets: 2,
            totalPrice: 2400,
            bookingTime: "2025-03-14 14:30:00",
            status: "Confirmed",
          },
          {
            id: "B67890",
            tourName: "Grand Asia Tour",
            customerName: "Jane Smith",
            tourDate: "2025-07-10",
            fromLocation: "Los Angeles",
            toLocation: "Tokyo",
            pricePerTicket: 1500,
            totalTickets: 3,
            totalPrice: 4500,
            bookingTime: "2025-03-15 10:00:00",
            status: "Pending",
          },
        ]);
      }, 1000);
    };
    
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarTourGuide />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          My Tour Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-600">Loading bookings...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3">Tour Name</th>
                  <th className="p-3">Customer Name</th>
                  <th className="p-3">Tour Date</th>
                  <th className="p-3">From</th>
                  <th className="p-3">To</th>
                  <th className="p-3">Price/Ticket</th>
                  <th className="p-3">Total Tickets</th>
                  <th className="p-3">Total Price</th>
                  <th className="p-3">Booking Time</th>
                  <th className="p-3">Booking ID</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="p-3 text-center">{booking.tourName}</td>
                    <td className="p-3 text-center">{booking.customerName}</td>
                    <td className="p-3 text-center">{booking.tourDate}</td>
                    <td className="p-3 text-center">{booking.fromLocation}</td>
                    <td className="p-3 text-center">{booking.toLocation}</td>
                    <td className="p-3 text-center">${booking.pricePerTicket}</td>
                    <td className="p-3 text-center">{booking.totalTickets}</td>
                    <td className="p-3 text-center font-semibold">${booking.totalPrice}</td>
                    <td className="p-3 text-center">{booking.bookingTime}</td>
                    <td className="p-3 text-center">{booking.id}</td>
                    <td
                      className={`p-3 text-center font-bold ${
                        booking.status === "Confirmed" ? "text-green-600" : "text-orange-500"
                      }`}
                    >
                      {booking.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTourBookings;
