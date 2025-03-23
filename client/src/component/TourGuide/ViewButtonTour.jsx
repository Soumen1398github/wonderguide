import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarTourGuide from "../NavbarTourGuide";


const ViewButtonTour = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const storedTours = JSON.parse(localStorage.getItem("tours")) || [];
    const selectedTour = storedTours.find((t) => t.id === Number(id));

    if (selectedTour) {
      setTour(selectedTour);
    } else {
      // Sample data if no tour found
      setTour({
        name: "Sample Tour",
        description: "An amazing journey to the mountains.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        from: "New York",
        to: "Los Angeles",
        tourGuideName: "John Doe",
        transport: "Flight",
        startDate: "2024-04-01T10:00:00",
        endDate: "2024-04-07T18:00:00",
        activities: ["Hiking", "Camping"],
        meals: ["Breakfast", "Lunch"],
        lodgeName: "Grand Resort",
        lodgeType: "5-Star",
        lodgeAddress: "Downtown LA",
        ticketPrice: 5000,
      });
    }
  }, [id]);

  if (!tour) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="bg-gray-100">
      <NavbarTourGuide />
      <div className="max-w-4xl mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-green-600">{tour.name}</h2>
        <p className="text-gray-600">{tour.description}</p>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {tour.images.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt={`Tour Image ${index + 1}`} className="w-full h-32 object-cover rounded-lg shadow" />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
          <p><strong>From:</strong> {tour.from}</p>
          <p><strong>To:</strong> {tour.to}</p>
          <p><strong>Tour Guide:</strong> {tour.tourGuideName}</p>
          <p><strong>Transport:</strong> {tour.transport}</p>
          <p><strong>Start Date:</strong> {new Date(tour.startDate).toLocaleString()}</p>
          <p><strong>End Date:</strong> {new Date(tour.endDate).toLocaleString()}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-green-700">Activities</h3>
          <ul className="list-disc list-inside">{tour.activities.map((act, index) => <li key={index}>{act}</li>)}</ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-green-700">Meals</h3>
          <ul className="list-disc list-inside">{tour.meals.map((meal, index) => <li key={index}>{meal}</li>)}</ul>
        </div>

        <div className="mt-4 border-t pt-4">
          <h3 className="text-xl font-semibold text-green-700">Lodging Details</h3>
          <p><strong>Lodge Name:</strong> {tour.lodgeName}</p>
          <p><strong>Lodge Type:</strong> {tour.lodgeType}</p>
          <p><strong>Lodge Address:</strong> {tour.lodgeAddress}</p>
        </div>

        <p className="text-lg font-bold text-green-600">Ticket Price: ₹ {tour.ticketPrice}</p>

        <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
          <h3 className="text-lg font-bold text-green-700">Want to join this tour?</h3>
          <button className="mt-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
            Book Tour
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Manage Tour</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/update-tour-details">
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Update Details</button>
            </Link>
            <Link to="/update-tour-images">
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Update Images</button>
            </Link>
            <Link to="/add-activity">
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Update Activity</button>
            </Link>
            <Link to="/update-meals">
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Update Meals</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewButtonTour;
