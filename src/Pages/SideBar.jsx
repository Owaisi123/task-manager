import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsSidebarOpen }) {
  const sidebarRef = useRef();

  return (
    <>
      {/* Backdrop that closes sidebar when clicked */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          {/* Empty transparent area behind the sidebar */}
        </div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()} // prevent closing on inner click
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:relative top-0 left-0 h-full w-64 bg-indigo-700 text-white transform transition-transform duration-300 ease-in-out z-40 md:translate-x-0`}
      >
        <div className="p-4 text-lg font-semibold border-b border-indigo-600">
          Menu
        </div>
        <nav className="flex flex-col space-y-2 px-4 mt-4">
          {[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Add Task", to: "/addtask" },
            { label: "Show Tasks", to: "/showtask" },
            { label: "Profile", to: "/profile" },
            { label: "Login", to: "/login" },
            { label: "Sign Up", to: "/signup" },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setIsSidebarOpen(false)}
              className="hover:bg-indigo-600 p-2 rounded transition duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
