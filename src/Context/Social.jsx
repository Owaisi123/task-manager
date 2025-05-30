import React from "react";
import { createContext, useEffect, useState } from "react";

const SocialLinks = createContext();

export const SocialLinksProvider = ({ children }) => {
  const [socialLink, setSocialLink] = useState(() => {
    const savedLinks = localStorage.getItem("socialLinks");
    if (savedLinks) {
      try {
        return JSON.parse(savedLinks);
      } catch (e) {
        console.error("Failed to parse social links from localStorage", e);
        localStorage.removeItem("socialLinks");
      }
    }
    return {
      linkdinLink: "",
      githubLink: "",
      twitterLink: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("socialLinks", JSON.stringify(socialLink));
    console.log("Social links saved to localStorage:", socialLink);
  }, [socialLink]);

  return (
    <SocialLinks.Provider value={{ socialLink, setSocialLink }}>
      {children}
    </SocialLinks.Provider>
  );
};

export default SocialLinks;