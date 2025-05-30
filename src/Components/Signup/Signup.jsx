import React, { useContext, useState } from "react";
import UserAuth from "../../Context/UserAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const { setGetUserName, setGetUserEmail } = useContext(UserAuth);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!user || !email) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill all fields",
      });
      return;
    }
    

    Swal.fire({
      icon: "success",
      title: "SignUp Successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      setGetUserName(user);
      setGetUserEmail(email);
      localStorage.setItem("user", user);
      localStorage.setItem("email", email);
      setUser("");
      setEmail("");
      navigate("/login");
    });
  };

  return (
    <div
      className="max-w-md mx-auto mt-16 flex items-center justify-center  px-4 sm:px-0 box-border"
      style={{ boxSizing: "border-box" }}
    >
      <div className="bg-white shadow-lg rounded-xl px-6 py-6 sm:py-8 w-full max-w-md box-border">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4 sm:mb-6">
          Create Account
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md hover:bg-blue-700 transition duration-200 text-base sm:text-lg"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4 sm:mt-5">
          Already registered?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
