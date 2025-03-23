import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileInput from "./FileInput";
import Textarea from "./Textarea";
import DateInput from "./DateInput";
import Input from "./Input";
import Select from "./Select";
import NavbarTourGuide from "../NavbarTourGuide";

function AddTour() {
  const [startTime, setStartTime] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarTourGuide/>
    <div className="border m-5 p-6 rounded-2xl bg-white shadow-lg">
      <form className="space-y-6">
        <div className="text-center text-2xl font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Tour</div>

        {/* Grid 1 - Tour Details */}
        <div className="grid grid-cols-4 gap-6">
          <Input label="Tour Name" type="text" placeholder="Tour name" required />
          <Textarea label="Tour Description" rows="2" placeholder="Enter description..." />
          <Input label="From Location" type="text" placeholder="From location" required />
          <Input label="To Location" type="text" placeholder="To location" required />
        </div>

        {/* Grid 2 - Lodge Details */}
        <div className="grid grid-cols-4 gap-6">
          <Select label="Lodge" options={["Hotel", "Villa", "Bunglo"]} />
          <Input label="Lodge Name" type="text" placeholder="Enter Lodge Name" required />
          <Textarea label="Lodge Address" rows="2" placeholder="Enter lodge address" />
          <Select label="Transport" options={["Bus", "Train", "Flight"]} />
        </div>

        {/* Grid 3 - Transport Details */}
        <div className="grid grid-cols-4 gap-6">
          <Textarea label="Transport Description" rows="2" placeholder="Enter transport description..." />
          <Input label="Transport Registration No" type="text" placeholder="Enter registration no." required />
          <Input label="Total Tour Days" type="number" placeholder="Number of days" required />
          <Input label="No Of Tickets" type="number" placeholder="Enter ticket count" required />
        </div>

        {/* Grid 4 - Date, Price, Images */}
        <div className="grid grid-cols-4 gap-6">
          <Input label="Ticket Price" type="text" placeholder="Enter price" required />
          <DateInput label="Select Start Time" selected={startTime} setSelected={setStartTime} />
          <DateInput label="Select End Time" selected={endTime} setSelected={setEndTime} />
          <FileInput label="Select Tour Image 1" selectedFile={selectedFile1} setSelectedFile={setSelectedFile1} />
        </div>

        {/* Grid 5 - Images & Special Note */}
        <div className="grid grid-cols-3 gap-6">
          <FileInput label="Select Tour Image 2" selectedFile={selectedFile2} setSelectedFile={setSelectedFile2} />
          <FileInput label="Select Tour Image 3" selectedFile={selectedFile3} setSelectedFile={setSelectedFile3} />
          <Textarea label="Special Note" rows="2" placeholder="Enter special note if any..." />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-600 text-white font-medium rounded-lg px-6 py-2 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit Tour
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddTour;
