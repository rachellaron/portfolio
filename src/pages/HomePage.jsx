import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { FaAngleDown } from "react-icons/fa";
import AboutPage from "./AboutPage";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/home.css";

const HomePage = () => {
  const [showDescription, setShowDescription] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="page">
        <div className="home-page">
          <h1 className="home-title">
            <ReactTyped
              strings={["Hi, I'm Rachel"]}
              typeSpeed={40}
              onComplete={() => setShowDescription(true)}
            />
          </h1>

          {showDescription && (
            <p className="home-description animate-fade-in">
              a{" "}
              <span className="highlight highlight-two">software engineer</span>{" "}
              & <span className="highlight highlight-one">ux/ui designer</span>{" "}
              {""}
              <br />
              who has a passion for building applications that look amazing and
              work flawlessly
            </p>
          )}

          {/* Social Media Icons List & Contact Me */}
          <div className="social-media-icons">
            <FaLinkedin
              onClick={() =>
                window.open("https://www.linkedin.com/in/racharon/", "_blank")
              }
              className="icon"
            />
            <FaGithub
              onClick={() =>
                window.open("https://github.com/rachellaron", "_blank")
              }
            />
          </div>

          {/* About Me Button that scrolls to about me section */}
          <button className="scroll-down-btn" onClick={scrollToAbout}>
            <FaAngleDown />
          </button>
        </div>
      </div>

      <AboutPage />
    </div>
  );
};

export default HomePage;
