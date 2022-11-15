import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword.js";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Single from "./components/Single";
import VerifyEmail from "./components/VerifyEmail";
import VerifyToken from "./components/VerifyToken";

import BeauticianList from "./components/BeauticianList";
import Header from "./components/Header.js";
import HomeBeauticianList from "./components/HomeBeauticianList";
import Admin from "./components/Admin";
import MyAppointments from "./components/MyAppointments";
import BookAppointment from "./components/BookAppointment.js";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Navbar />
      {/* <Header /> */}
      {/* <div className="separator"></div> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singlePost" element={<Single />} />
        <Route path="/beauticianList" element={<HomeBeauticianList />} />
        <Route path="/beauticianList/:category" element={<HomeBeauticianList />} />
        <Route path="/List" element={<BeauticianList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route
          path="/bookAppointment/:beauticianId"
          element={<BookAppointment />}
        />

        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyEmail/:token" element={<VerifyEmail />} />
        <Route path="/verifyToken" element={<VerifyToken />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <createpost /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
