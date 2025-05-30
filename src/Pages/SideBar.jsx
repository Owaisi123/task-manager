import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import UserAuth from "../Context/UserAuth";
import Swal from "sweetalert2";

function Sidebar({ isOpen, setIsSidebarOpen }) {
  const sidebarRef = useRef();
  const { getUserName, logoutUser } = useContext(UserAuth);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire({
          icon: "success",
          title: "Logged out",
          text: "You have been logged out successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()}
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:relative top-0 left-0 h-full w-64 bg-indigo-700 text-white transform transition-transform duration-300 ease-in-out z-40 md:translate-x-0 flex flex-col`}
      >
        <div className="p-4 border-b border-indigo-600 text-center text-xl font-semibold">
          {getUserName || "Username"}
        </div>

        <div className="flex-1 overflow-y-auto px-4 mt-4 space-y-2">
          {[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Add Task", to: "/addtask" },
            { label: "Show Tasks", to: "/showtask" },
            { label: "Profile", to: "/profile" },
            { label: "Login", to: "/login" },
            { label: "Sign Up", to: "/signup" },
            { label: "Add Links", to: "/userlinks" },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setIsSidebarOpen(false)}
              className="block hover:bg-indigo-600 py-2 px-3 rounded"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-indigo-600">
          <button
            onClick={handleLogout}
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
