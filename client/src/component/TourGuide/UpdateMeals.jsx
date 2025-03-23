import React, { useState } from "react";

const UpdateMeals = () => {
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [meals, setMeals] = useState([]);

  // Add Meal Handler
  const handleAddMeal = () => {
    if (!mealName || !mealDescription) {
      alert("Please enter both Meal Name and Description.");
      return;
    }

    const newMeal = {
      id: Date.now(),
      name: mealName,
      description: mealDescription,
    };

    setMeals([...meals, newMeal]);
    setMealName("");
    setMealDescription("");
  };

  // Delete Meal Handler
  const handleDeleteMeal = (id) => {
    const updatedMeals = meals.filter((meal) => meal.id !== id);
    setMeals(updatedMeals);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-green-600 text-center">Update Meals</h2>

      {/* Input Fields */}
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Meal Name</label>
          <input
            type="text"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter meal name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Meal Description</label>
          <textarea
            value={mealDescription}
            onChange={(e) => setMealDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter meal description"
          ></textarea>
        </div>

        <button
          onClick={handleAddMeal}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add Meal
        </button>
      </div>

      {/* All Tour Meals Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-green-700">All Tour Meals</h3>

        {meals.length > 0 ? (
          <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
            {/* Table Headers */}
            <div className="grid grid-cols-3 bg-gray-200 text-gray-700 font-medium p-2">
              <div className="text-center">Meal Name</div>
              <div className="text-center">Meal Description</div>
              <div className="text-center">Action</div>
            </div>

            {/* Meals List */}
            {meals.map((meal) => (
              <div key={meal.id} className="grid grid-cols-3 border-t p-2 items-center bg-gray-50">
                <div className="text-center">{meal.name}</div>
                <div className="text-center">{meal.description}</div>
                <div className="text-center">
                  <button
                    onClick={() => handleDeleteMeal(meal.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-2">No meals added yet.</p>
        )}
      </div>
    </div>
  );
};

export default UpdateMeals;
