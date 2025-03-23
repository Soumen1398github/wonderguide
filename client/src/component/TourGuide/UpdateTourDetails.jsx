import React, { useState, useEffect } from "react";
import Input from "../MyTour/Input";
import Textarea from "../MyTour/Textarea";
import Select from "../MyTour/Select";
import DateInput from "../MyTour/DateInput";
import NavbarTourGuide from "../NavbarTourGuide";

function UpdateTourDetails() {
  // Simulate fetching data from an API (Replace this with actual API call)
  const fetchExistingTourData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          tourName: "Amazing Europe Trip",
          tourDescription: "A fantastic 10-day tour exploring Europe’s famous cities.",
          fromLocation: "New York",
          toLocation: "Paris",
          lodgeType: "Hotel",
          lodgeName: "Grand Palace Hotel",
          lodgeAddress: "123 Main Street, Paris",
          transportType: "Flight",
          transportDescription: "Business class flight with luxury services.",
          transportRegNo: "FL12345",
          totalTourDays: 10,
          noOfTickets: 50,
          ticketPrice: 1200,
          startTime: new Date("2025-06-15"),
          endTime: new Date("2025-06-25"),
          specialNote: "Bring your passport and required travel documents.",
        });
      }, 1000); // Simulating delay
    });
  };

  // State for form data (initially empty)
  const [tourData, setTourData] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchExistingTourData().then((data) => {
      setTourData(data);
    });
  }, []);

  // Ensure the form doesn't break while waiting for data
  if (!tourData) {
    return <p className="text-center text-lg">Loading tour details...</p>;
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle date change
  const handleDateChange = (field, date) => {
    setTourData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  };

  // Function to update the tour
  const handleUpdateTour = () => {
    console.log("Updated Tour Details:", tourData);
    alert("Tour details updated successfully!");
    // Call API to update the tour details in the backend
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarTourGuide />
      <div className="border m-5 p-6 rounded-2xl bg-white shadow-lg">
        <form className="space-y-6">
          <div className="text-center text-2xl font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl px-5 py-2.5">
            Update Tour Details
          </div>

          {/* Grid 1 - Tour Details */}
          <div className="grid grid-cols-4 gap-6">
            <Input label="Tour Name" name="tourName" type="text" value={tourData.tourName} onChange={handleChange} />
            <Textarea label="Tour Description" name="tourDescription" value={tourData.tourDescription} onChange={handleChange} />
            <Input label="From Location" name="fromLocation" type="text" value={tourData.fromLocation} onChange={handleChange} />
            <Input label="To Location" name="toLocation" type="text" value={tourData.toLocation} onChange={handleChange} />
          </div>

          {/* Grid 2 - Lodge Details */}
          <div className="grid grid-cols-4 gap-6">
            <Select label="Lodge" name="lodgeType" value={tourData.lodgeType} onChange={handleChange} options={["Hotel", "Villa", "Bungalow"]} />
            <Input label="Lodge Name" name="lodgeName" type="text" value={tourData.lodgeName} onChange={handleChange} />
            <Textarea label="Lodge Address" name="lodgeAddress" value={tourData.lodgeAddress} onChange={handleChange} />
            <Select label="Transport" name="transportType" value={tourData.transportType} onChange={handleChange} options={["Bus", "Train", "Flight"]} />
          </div>

          {/* Grid 3 - Transport Details */}
          <div className="grid grid-cols-4 gap-6">
            <Textarea label="Transport Description" name="transportDescription" value={tourData.transportDescription} onChange={handleChange} />
            <Input label="Transport Registration No" name="transportRegNo" type="text" value={tourData.transportRegNo} onChange={handleChange} />
            <Input label="Total Tour Days" name="totalTourDays" type="number" value={tourData.totalTourDays} onChange={handleChange} />
            <Input label="No Of Tickets" name="noOfTickets" type="number" value={tourData.noOfTickets} onChange={handleChange} />
          </div>

          {/* Grid 4 - Date, Price, Special Note */}
          <div className="grid grid-cols-3 gap-6">
            <Input label="Ticket Price" name="ticketPrice" type="text" value={tourData.ticketPrice} onChange={handleChange} />
            <DateInput label="Select Start Time" selected={tourData.startTime} setSelected={(date) => handleDateChange("startTime", date)} />
            <DateInput label="Select End Time" selected={tourData.endTime} setSelected={(date) => handleDateChange("endTime", date)} />
          </div>

          {/* Special Note */}
          <div>
            <Textarea label="Special Note" name="specialNote" value={tourData.specialNote} onChange={handleChange} />
          </div>

          {/* Update Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleUpdateTour}
              className="bg-blue-600 text-white font-medium rounded-lg px-6 py-2 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Update Tour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTourDetails;
