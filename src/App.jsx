import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TaskManagerNavbar from "./Components/Navbar/Navbar";
import Sidebar from "./Pages/SideBar";
import AddTask from "./Components/Tasks/AddTask";
import ShowTasks from "./Components/ShowTasks/ShowTasks";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";
import Userlinks from "./Components/SocialLinks/SocialLinks";
import Swal from "sweetalert2";
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now().toString() }]);
  };

  const deleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((task) => task.id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleSignUp = (userData) => {
    setRegisteredUser(userData);
    console.log("User signed up:", userData);
  };

  const handleLogin = (userData) => {
    if (
      registeredUser &&
      userData.username === registeredUser.username &&
      userData.password === registeredUser.password
    ) {
      setUser(userData);
      return true;
    } else {
      return false;
    }
  };

  return (
    <Router>
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

      {/* Updated here: added max-w-screen and overflow-x-hidden */}
      <div className="pt-24 md:pt-16 flex h-screen max-w-screen overflow-x-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Updated here: added max-w-full */}
        <main className="flex-1 bg-gray-100 p-4 overflow-auto max-w-full">
          <Routes>
            <Route path="/" element={<Signup onSignUp={handleSignUp} />} />

            <Route
              path="/showtask"
              element={
                <ShowTasks
                  tasks={tasks}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              }
            />
            <Route path="/addtask" element={<AddTask addTask={addTask} />} />
            <Route
              path="/signup"
              element={<Signup onSignUp={handleSignUp} />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/userlinks" element={<Userlinks />} />

            <Route
              path="*"
              element={<h1 className="text-2xl">404 - Page not found</h1>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;



