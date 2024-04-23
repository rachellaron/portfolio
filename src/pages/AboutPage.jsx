import React from "react";
import { Typography, Box, Grid, Chip } from "@mui/material";
import { ReactTyped } from "react-typed";
import SkillsComponent from "../components/SkillsComponent";
import "../styles/about.css";
import CV from "../components/rachelaron-resume.pdf";
import ProjectsPage from "./MyCreations";

const AboutPage = () => {
  const downloadCV = () => {
    // Open the PDF file in a new window
    window.open(CV, "_blank");
  };

  const scrollToProjects = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
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
              I'm a Software Engineer and UX/UI Designer based in Queensland,
              Australia, with a knack for crafting seamless user experiences.{" "}
              <br /> <br />
              Whether I'm coding or designing, my goal is always the same: to
              create something both beautiful and functional.
              <br /> <br />
              When I'm not at my desk, you'll likely find me out and about with
              my dogs, nose deep in a good book, or dancing around my living
              room listening to Taylor Swift.
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
