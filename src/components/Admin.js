import React from "react";
import "./css/admindashboard.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddBeautician from "./AddBeautician.js";
import AdminBeauticianList  from "./AdminBeauticianList.js";
import AdminAppointmentView from "./AdminAppointmentView";

function Admin() {
  return (
    <div className="dashboardwrapper">
      <h2>Admin Dashboard</h2>
      <Tabs
        defaultActiveKey="beauticians"
        id="justify-tab-example"
        className="mb-3 admintabs"
        justify
      >
        <Tab eventKey="add-beautician" title="Add Beautician">
          <AddBeautician />
        </Tab>
        <Tab eventKey="beauticians" title="Beautician List">
          <AdminBeauticianList  />
        </Tab>
        <Tab eventKey="appointments" title="Appointments">
          <AdminAppointmentView />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Admin;
