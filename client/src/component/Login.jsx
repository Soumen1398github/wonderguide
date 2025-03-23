import React from "react";
import Navbar from "./Navbar";
function Login() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
      <div className="flex items-center justify-center p-10">
        <div className="border border-gray-400 rounded-2xl p-10 w-full max-w-md bg-white shadow-xl">
        
          <form className="space-y-4">
          <div className="text-center text-2xl font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl px-5 py-2.5">
              Login
            </div>
            <div>
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                User Role
              </label>
              <select
                id="role"
                className="w-full p-2.5 border rounded-lg"
                required
              >
                <option>User</option>
                <option>Admin</option>
                <option>Guide</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email Id
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2.5 border rounded-lg"
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
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-2.5 rounded-lg hover:bg-blue-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  }
  export default Login;