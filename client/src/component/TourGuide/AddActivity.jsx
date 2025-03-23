import React, { useState } from "react";

const AddActivity = () => {
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activities, setActivities] = useState([]);

  // Add Activity Handler
  const handleAddActivity = () => {
    if (!activityName || !activityDescription) {
      alert("Please enter both Activity Name and Description.");
      return;
    }

    const newActivity = {
      id: Date.now(),
      name: activityName,
      description: activityDescription,
    };

    setActivities([...activities, newActivity]);
    setActivityName("");
    setActivityDescription("");
  };

  // Delete Activity Handler
  const handleDeleteActivity = (id) => {
    const updatedActivities = activities.filter((activity) => activity.id !== id);
    setActivities(updatedActivities);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-green-600 text-center">Add Activity</h2>

      {/* Input Fields */}
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Activity Name</label>
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter activity name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Activity Description</label>
          <textarea
            value={activityDescription}
            onChange={(e) => setActivityDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter activity description"
          ></textarea>
        </div>

        <button
          onClick={handleAddActivity}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add Activity
        </button>
      </div>

      {/* All Tour Activities Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-green-700">Tour Activities</h3>

        {activities.length > 0 ? (
          <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
            {/* Table Headers */}
            <div className="grid grid-cols-3 bg-gray-200 text-gray-700 font-medium p-2">
              <div className="text-center">Activity Name</div>
              <div className="text-center">Activity Description</div>
              <div className="text-center">Action</div>
            </div>

            {/* Activities List */}
            {activities.map((activity) => (
              <div key={activity.id} className="grid grid-cols-3 border-t p-2 items-center bg-gray-50">
                <div className="text-center">{activity.name}</div>
                <div className="text-center">{activity.description}</div>
                <div className="text-center">
                  <button
                    onClick={() => handleDeleteActivity(activity.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-2">No activities added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddActivity;
