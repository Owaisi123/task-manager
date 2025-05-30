import React, { useContext, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";
import UserAuth from "../../Context/UserAuth";
import SocialLinks from "../../Context/Social";

export default function Dashboard() {
  const { getUserName, logoutUser } = useContext(UserAuth);
  const { socialLink } = useContext(SocialLinks);

  useEffect(() => {}, [socialLink]);

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
    <div className="h-auto overflow-auto p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center sm:text-left">
        Dashboard
      </h2>

      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {getUserName !== "Guest" && getUserName !== "" ? (
          <p className="text-xl text-gray-700 text-center sm:text-left">
            Welcome back,{" "}
            <span className="font-semibold text-indigo-600">{getUserName}</span>!
          </p>
        ) : (
          <p className="text-xl text-gray-700 text-center sm:text-left">
            Hello, <span className="font-semibold text-gray-800">Guest</span>!
          </p>
        )}

        <div className="flex gap-3">
          {/* Only show Logout button if logged in */}
          {getUserName !== "Guest" && getUserName !== "" && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {getUserName !== "Guest" && getUserName !== "" ? (
        <>
          <p className="text-gray-600 mb-6 text-center sm:text-left">
            Your linked profiles:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* LinkedIn */}
            <a
              href={socialLink.linkdinLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 ease-in-out ${
                socialLink.linkdinLink
                  ? "hover:scale-105 hover:shadow-xl"
                  : "cursor-not-allowed opacity-75"
              }`}
            >
              <div
                className={`bg-blue-50 border-l-4 border-blue-700 p-6 flex items-center gap-4 ${
                  socialLink.linkdinLink ? "" : "grayscale"
                }`}
              >
                <FaLinkedin className="text-blue-700 text-4xl" />
                <div>
                  <p className="text-gray-600 text-sm">LinkedIn Profile</p>
                  {socialLink.linkdinLink ? (
                    <h3 className="text-xl font-bold text-blue-800 break-words">
                      Linked!
                    </h3>
                  ) : (
                    <h3 className="text-xl font-bold text-gray-400">
                      Not Linked
                    </h3>
                  )}
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={socialLink.githubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 ease-in-out ${
                socialLink.githubLink
                  ? "hover:scale-105 hover:shadow-xl"
                  : "cursor-not-allowed opacity-75"
              }`}
            >
              <div
                className={`bg-gray-100 border-l-4 border-gray-800 p-6 flex items-center gap-4 ${
                  socialLink.githubLink ? "" : "grayscale"
                }`}
              >
                <FaGithub className="text-gray-800 text-4xl" />
                <div>
                  <p className="text-gray-600 text-sm">GitHub Profile</p>
                  {socialLink.githubLink ? (
                    <h3 className="text-xl font-bold text-gray-900 break-words">
                      Github
                    </h3>
                  ) : (
                    <h3 className="text-xl font-bold text-gray-400">
                      Not Linked
                    </h3>
                  )}
                </div>
              </div>
            </a>

            {/* Twitter / X */}
            <a
              href={socialLink.twitterLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 ease-in-out ${
                socialLink.twitterLink
                  ? "hover:scale-105 hover:shadow-xl"
                  : "cursor-not-allowed opacity-75"
              }`}
            >
              <div
                className={`bg-blue-100 border-l-4 border-sky-500 p-6 flex items-center gap-4 ${
                  socialLink.twitterLink ? "" : "grayscale"
                }`}
              >
                <FaTwitter className="text-sky-500 text-4xl" />
                <div>
                  <p className="text-gray-600 text-sm">X (Twitter) Profile</p>
                  {socialLink.twitterLink ? (
                    <h3 className="text-xl font-bold text-sky-600 break-words">
                      X
                    </h3>
                  ) : (
                    <h3 className="text-xl font-bold text-gray-400">
                      Not Linked
                    </h3>
                  )}
                </div>
              </div>
            </a>
          </div>
        </>
      ) : (
        <div className="bg-white shadow-md rounded-xl p-6 text-center border border-red-200">
          <p className="text-lg text-gray-700 font-medium">
            🚫 Please log in to view your dashboard and manage your profiles.
          </p>
        </div>
      )}
    </div>
  );
}
