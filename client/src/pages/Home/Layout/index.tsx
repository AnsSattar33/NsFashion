import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../shared/Header/Navbar";
import Footer from "../../../shared/Footer/Footer";
import LandingPageContextProvider from "../context/LandingPageContext";

import { ToastContainer } from "react-toastify";

const HomePageLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingPageContextProvider>
        <div className="bg-red-400 text-white mb-1">
          <Navbar />
        </div>
        {/* Layout content like Navbar, Sidebar can go here */}
        <div className="flex-grow">
          <Outlet />
        </div> {/* This ensures child routes are displayed */}
        <div>
          <Footer />
        </div>
      </LandingPageContextProvider>
      <ToastContainer />
    </div>
  );
};

export default HomePageLayout;
