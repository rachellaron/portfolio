import React from "react";
import { Typography, Box, Grid, Chip } from "@mui/material";
import { ReactTyped } from "react-typed";
import SkillsComponent from "../components/SkillsComponent";
import "../styles/about.css";
import CV from "../components/rachelaron-resume.pdf";

const AboutPage = () => {
  const downloadCV = () => {
    // Open the PDF file in a new window
    window.open(CV, "_blank");
  };

  return (
    <div className="page">
      <div className="about" id="about">
        <div className="container">
          <h1 className="title">
            <ReactTyped strings={["About Me"]} typeSpeed={40} />
          </h1>

          <Box className="speach-bubble">
            <p className="body-text">
              I am a Software Enginner and UX/UI Designer based in Queensland,
              Australia. <br />I have a rich experience in building and
              designing applications that look amazing and work flawlessly.
            </p>
            <button className="button" onClick={downloadCV}>
              Download my CV
            </button>
          </Box>
        </div>

        <div className="container">
          <SkillsComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
