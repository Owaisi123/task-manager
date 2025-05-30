import React, { useContext, useState } from "react";
import UserAuth from "../../Context/UserAuth";
import { useNavigate } from "react-router-dom";
import LogoutUser from "../../Context/Logout";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { setGetUserName, setGetUserEmail } = useContext(UserAuth);
  const { setLogout } = useContext(LogoutUser);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");
    const storedEmail = localStorage.getItem("email");

    if (!userEmail || !userName) {
      Swal.fire({
        icon: "warning",
        title: "Please fill in all fields",
        showConfirmButton: true,
      });
      return;
    }

    if (userName === storedUser && userEmail === storedEmail) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setGetUserName(userName);
        setGetUserEmail(userEmail);
        setUserName("");
        setUserEmail("");
        setLogout(false);
        navigate("/profile");
      });
    } else {
      if (userName !== storedUser && userEmail !== storedEmail) {
        Swal.fire({
          icon: "error",
          title: "Invalid username and email.",
          showConfirmButton: true,
        });
      } else if (userName !== storedUser) {
        Swal.fire({
          icon: "error",
          title: "Invalid username.",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid email.",
          showConfirmButton: true,
        });
      }
    }
  };

  
const handleLogout = () => {
  Swal.fire({
    title: "Are you sure you want to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, logout",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      setGetUserName("");
      setGetUserEmail("");
      localStorage.removeItem("user");
      localStorage.removeItem("email");
      setLogout(true);

      Swal.fire({
        icon: "success",
        title: "Logged out",
        text: "You have been logged out successfully.",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/signup");
      });
    }
  });
};


  return (
    <div className="flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md sm:max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Login
        </h1>

        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition duration-200"
          type="email"
          placeholder="Enter your Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition duration-200"
          type="text"
          placeholder="Enter your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200 mb-3 shadow-md"
        >
          Login
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-gray-600 text-white py-2 rounded-md font-semibold hover:bg-gray-700 transition duration-200 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
