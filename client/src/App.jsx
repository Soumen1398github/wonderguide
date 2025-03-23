import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchbar from "./component/Searchbar";
import AddTour from "./component/MyTour/AddTour";
import RegisterUser from "./component/RegisterUser";
import Login from "./component/Login";
import AddLocation from "./component/Location/AddLocation";
import ViewLocation from "./component/Location/ViewLocation";
import UpdateLocation from "./component/Location/UpdateLocation";
import AddTransport from "./component/Transport/AddTransport";
import ViewTransport from "./component/Transport/ViewTransport";
import UpdateTransport from "./component/Transport/UpdateTransport";
import AddLodge from "./component/Lodge/AddLodge";
import ViewLodge from "./component/Lodge/ViewLodge";
import UpdateLodge from "./component/Lodge/UpdateLodge";
import AddTourGuide from "./component/TourGuide/AddTourGuide";
import ViewTourGuide from "./component/TourGuide/ViewTourGuide";
import ViewMyTour from "./component/TourGuide/ViewMyTour";
import ViewButtonTour from "./component/TourGuide/ViewButtonTour";
import AddActivity from "./component/TourGuide/AddActivity";
import UpdateTourImages from "./component/TourGuide/UpdateTourImages";
import UpdateMeals from "./component/TourGuide/UpdateMeals";
import UpdateTourDetails from "./component/TourGuide/UpdateTourDetails";
import MyTourBookings from "./component/TourGuide/MyTourBookings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-tour" element={<AddTour />} />
        <Route path="/add-location" element={<AddLocation />} />
        <Route path="/view-location" element={<ViewLocation />} />
        <Route path="/update-location/:id" element={<UpdateLocation />} />
        <Route path="/add-transport" element={<AddTransport />} />
        <Route path="/view-transport" element={<ViewTransport />} />
        <Route path="/update-transport/:id" element={<UpdateTransport />} />
        <Route path="/add-lodge" element={<AddLodge />} />
        <Route path="/view-lodge" element={<ViewLodge />} />
        <Route path="/update-lodge/:id" element={<UpdateLodge />} />
        <Route path="/add-tour-guide" element={<AddTourGuide />} />
        <Route path="/view-tour-guide" element={<ViewTourGuide />} />
        <Route path="/view-tour" element={<ViewMyTour />} />
        <Route path="/view-tour-details/:id" element={<ViewButtonTour />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/update-meals" element={<UpdateMeals />} />
        <Route path="/update-tour-images" element={<UpdateTourImages />} />
        <Route path="/update-tour-details" element={<UpdateTourDetails />} />
        <Route path="/my-tour-bookings" element={<MyTourBookings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
