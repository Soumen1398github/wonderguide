import React from "react";
import Navbar from "./Navbar";

function RegisterUser() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center p-10">
        <div className="border border-gray-400 rounded-2xl p-10 w-full max-w-3xl bg-white shadow-xl">
          <form className="space-y-6">
            <div className="text-center text-2xl font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl px-5 py-2.5">
              Register Here!!
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email Id
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                  Contact No
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900">
                  Street
                </label>
                <textarea
                  id="street"
                  rows="2"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder=""
                ></textarea>
              </div>
              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  className="w-full p-2.5 border rounded-lg"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border rounded-sm"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">
                I agree with the <a href="#" className="text-blue-600 underline">terms and conditions</a>.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-2.5 rounded-lg hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
