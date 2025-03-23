import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarTourGuide from "../NavbarTourGuide";

const ViewMyTour = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let storedTours = JSON.parse(localStorage.getItem("tours")) || [];

    // Ensure each tour has a unique ID
    if (storedTours.length > 0) {
      let lastId = storedTours.reduce((max, tour) => (tour.id > max ? tour.id : max), 0);
      storedTours = storedTours.map((tour, index) => ({
        ...tour,
        id: tour.id || lastId + index + 1, // Assign new ID if missing
      }));
      localStorage.setItem("tours", JSON.stringify(storedTours));
    }

    setTours(storedTours);
  }, []);

  const handleDelete = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    localStorage.setItem("tours", JSON.stringify(updatedTours));
    setTours(updatedTours);
    alert("Tour deleted successfully!");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar Section */}
      <div className="flex-shrink-0">
        <NavbarTourGuide />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex justify-center bg-gray-100 p-4">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6">
          <div className="text-center text-2xl font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl px-5 py-2.5 mb-4">
            All Tours Added
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-center">
                  <th className="border border-gray-300 px-3 py-2">ID</th>
                  <th className="border border-gray-300 px-3 py-2">Tour Name</th>
                  <th className="border border-gray-300 px-3 py-2">Description</th>
                  <th className="border border-gray-300 px-3 py-2">Tour Date</th>
                  <th className="border border-gray-300 px-3 py-2">From</th>
                  <th className="border border-gray-300 px-3 py-2">To</th>
                  <th className="border border-gray-300 px-3 py-2">Total Tickets</th>
                  <th className="border border-gray-300 px-3 py-2">Price</th>
                  <th className="border border-gray-300 px-3 py-2">Status</th>
                  <th className="border border-gray-300 px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tours.length > 0 ? (
                  tours.map((tour) => (
                    <tr key={tour.id} className="text-center bg-white hover:bg-gray-100">
                      <td className="border border-gray-300 px-3 py-2">{tour.id}</td>
                      <td className="border border-gray-300 px-3 py-2">{tour.name}</td>
                      <td className="border border-gray-300 px-3 py-2">{tour.description}</td>
                      <td className="border border-gray-300 px-3 py-2">{tour.date}</td>
                      <td className="border border-gray-300 px-3 py-2">{tour.fromLocation}</td>
                      <td className="border border-gray-300 px-3 py-2">{tour.toLocation}</td>
                      <td className="border border-gray-300 px-3 py-2">{tour.totalTickets}</td>
                      <td className="border border-gray-300 px-3 py-2">${tour.ticketPrice}</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className={`px-2 py-1 rounded-lg text-white ${tour.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                          {tour.status}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 space-x-2">
                        <button
                          onClick={() => navigate(`/view-tour-details/${tour.id}`)}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(tour.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center py-4 text-gray-500">
                      No tours added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMyTour;
