import React, { useState } from "react";
import NavbarTourGuide from "../NavbarTourGuide";

const UpdateTourImages = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ]);
  const [selectedFiles, setSelectedFiles] = useState(["No file selected", "No file selected", "No file selected"]);

  // Handle Image Upload
  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      const newSelectedFiles = [...selectedFiles];

      newImages[index] = URL.createObjectURL(file);
      newSelectedFiles[index] = file.name;

      setImages(newImages);
      setSelectedFiles(newSelectedFiles);
    }
  };

  return (
    <div className="bg-gray-100">
      <NavbarTourGuide/>
    <div className="max-w-3xl mx-auto p-6 m-4 bg-white shadow-lg rounded-lg">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-green-600 text-center">Update Tour Images</h2>

      {/* Display Uploaded Images */}
      <div className="flex justify-center gap-4 mt-4">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Tour Image ${index + 1}`} className="w-32 h-32 object-cover rounded-lg shadow" />
        ))}
      </div>

      {/* Image Upload Inputs */}
      <div className="mt-6 space-y-4">
        {images.map((_, index) => (
          <div key={index} className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-md">
            {/* Left - Choose File Button (1/3 width) */}
            <label className="w-1/3 bg-gray-500 text-white font-medium px-4 py-2 flex items-center justify-center cursor-pointer transition hover:bg-gray-700">
              Choose File
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(index, e)}
              />
            </label>

            {/* Right - File Name Display (2/3 width) */}
            <span className="w-2/3 text-gray-700 px-3 py-2 bg-gray-100 truncate">
              {selectedFiles[index]}
            </span>
          </div>
        ))}
      </div>

      {/* Update Button */}
      <button className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
        Update Images
      </button>
    </div>
    </div>
  );
};

export default UpdateTourImages;
