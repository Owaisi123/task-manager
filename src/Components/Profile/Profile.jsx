import React, { useContext } from "react";
import UserAuth from "../../Context/UserAuth";

export default function Profile() {
  const { getUserName } = useContext(UserAuth);

  if (!getUserName) {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Profile</h2>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg text-red-500 font-semibold">
            🚫 Please log in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Profile</h2>
      <div className="text-lg text-gray-800">
        <p>
          👋 Welcome,{" "}
          <span className="font-semibold text-indigo-600">{getUserName}</span>!
        </p>
        <p>This is your profile page.</p>
      </div>
    </div>
  );
}
