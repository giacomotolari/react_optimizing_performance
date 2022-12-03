import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Download from "../pages/Download";
import SideBar from "../Layout/SideBar";

const Contact = () => {
  return (
    <div>
      <p>01512345678</p>
      <SideBar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </div>
  );
};

export default Contact;
