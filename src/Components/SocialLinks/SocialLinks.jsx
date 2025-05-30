import React, { useContext, useState, useEffect } from "react";
import SocialLinks from "../../Context/Social";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Userlinks = () => {
  const { socialLink, setSocialLink } = useContext(SocialLinks);

  const [linkdinLink, setLinkdinLink] = useState(socialLink.linkdinLink);
  const [githubLink, setGithubLink] = useState(socialLink.githubLink);
  const [twitterLink, setTwitterLink] = useState(socialLink.twitterLink);

  const navigate = useNavigate();

  useEffect(() => {
    setLinkdinLink(socialLink.linkdinLink);
    setGithubLink(socialLink.githubLink);
    setTwitterLink(socialLink.twitterLink);
  }, [socialLink]);

  const handleSubmitLinks = (e) => {
    e.preventDefault();

    setSocialLink({
      linkdinLink,
      githubLink,
      twitterLink,
    });

    Swal.fire({
      icon: "success",
      title: "Social links updated successfully!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/dashboard");
    });
  };

  const isSubmitDisabled = !linkdinLink && !githubLink && !twitterLink;

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Update Your Profiles
      </h2>

      <form onSubmit={handleSubmitLinks} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter your LinkedIn profile link"
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-700"
          value={linkdinLink}
          onChange={(e) => setLinkdinLink(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your GitHub profile link"
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-700"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your X (Twitter) profile link"
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-700"
          value={twitterLink}
          onChange={(e) => setTwitterLink(e.target.value)}
        />

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className={`px-6 py-3 rounded-md text-white font-semibold shadow-md transition duration-300 ease-in-out transform ${
            isSubmitDisabled
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active:scale-95"
          }`}
        >
          {isSubmitDisabled ? "Enter A Link To Save" : "Save My Links"}
        </button>
      </form>
    </div>
  );
};

export default Userlinks;
