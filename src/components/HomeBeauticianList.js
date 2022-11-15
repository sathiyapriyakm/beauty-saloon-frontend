import React from "react";
import "./css/doctorlist.css";
import BeauticianList from "./BeauticianList.js";
import Sidebar from "./Sidebar.js";

function HomeBeauticianList() {
  return (
    <div className="homedoctorlist">
      <Sidebar />
      <BeauticianList />
    </div>
  );
}

export default HomeBeauticianList;
