import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Others from "../pages/Others";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full bg-[#F1F7FF] overflow-y-scroll">
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Others />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
