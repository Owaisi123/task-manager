import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TaskManagerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add Task", path: "/addtask" },
    { name: "Profile", path: "/profile" },
    { name: "Add Links", path: "/userlinks" },
  ];

  return (
    <nav className="bg-indigo-600 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-bold text-xl cursor-pointer select-none">
            TaskMaster
          </div>

          <div className="hidden md:flex space-x-8 text-indigo-100">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="hover:text-white font-medium transition"
              >
                {name}
              </Link>
            ))}

            <Link
              to="/signup"
              className="ml-6 bg-green-500 px-3 py-1 rounded hover:bg-green-600"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="ml-2 bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Login
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="text-indigo-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-indigo-700">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-indigo-100 hover:bg-indigo-600 hover:text-white font-medium transition"
            >
              {name}
            </Link>
          ))}

          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-green-200 hover:bg-green-600 hover:text-white font-medium transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-blue-200 hover:bg-blue-600 hover:text-white font-medium transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}