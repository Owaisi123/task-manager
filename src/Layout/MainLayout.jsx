import React, { useState } from "react";
import TaskManagerNavbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <TaskManagerNavbar />
      <div className="md:hidden fixed top-16 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-indigo-700"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="pt-24 md:pt-16 flex h-screen overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 bg-gray-100 p-4 overflow-auto">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;