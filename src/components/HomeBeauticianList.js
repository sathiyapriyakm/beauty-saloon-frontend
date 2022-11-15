import React from "react";
import "./css/beauticianlist.css";
import BeauticianList from "./BeauticianList.js";
import Sidebar from "./Sidebar.js";

function HomeBeauticianList() {
  return (
    <div className="homeBeauticianlist">
      <Sidebar />
      <BeauticianList />
    </div>
  );
}

export default HomeBeauticianList;
