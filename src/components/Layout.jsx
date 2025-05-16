import Sidebar from "./Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Others from "../pages/Others";
import Header from "./Header";
import { useEffect, useState } from "react";

const Layout = () => {
  const [side, setSide] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" ) {
      setSide(false);
    }
  }, [location.pathname]);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {side && <Sidebar />}

      <div className="w-full bg-[#F1F7FF] overflow-y-scroll">
        {side && <Header />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Others />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
