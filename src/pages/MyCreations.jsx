import React from "react";
import { Typography, Box, Grid, Chip } from "@mui/material";
import { ReactTyped } from "react-typed";

const ProjectsPage = () => {
  return (
    <div className="page">
      <div className="projects" id="projects">
        <div className="container">
          <h1 className="title">
            <ReactTyped strings={["My Projects"]} typeSpeed={40} />
          </h1>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box className="project-item">
                {/* <img src={ProjectImage1} alt="Project 1" /> */}
                <Typography variant="h6">Project 1</Typography>
                <Typography variant="body2">
                  Description of Project 1...
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className="project-item">
                {/* <img src={ProjectImage2} alt="Project 2" /> */}
                <Typography variant="h6">Project 2</Typography>
                <Typography variant="body2">
                  Description of Project 2...
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className="project-item">
                {/* <img src={ProjectImage3} alt="Project 3" /> */}
                <Typography variant="h6">Project 3</Typography>
                <Typography variant="body2">
                  Description of Project 3...
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
