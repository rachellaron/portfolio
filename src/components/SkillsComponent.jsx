import React from "react";
import { Chip, Typography, LinearProgress, Grid } from "@mui/material";

const SkillsComponent = () => {
  // List of your skills with corresponding progress values and colors
  const skills = [
    { name: "UI/UX Design", progress: 100, color: "#4caf50" },
    { name: "JavaScript", progress: 99, color: "#f44336" },
    { name: "Node.js", progress: 99, color: "#8bc34a" },
    { name: "React", progress: 99, color: "#673ab7" },
    { name: "TypeScript", progress: 80, color: "#2196f3" },
    { name: "Python", progress: 60, color: "#ffeb3b" },
    { name: "CDK", progress: 50, color: "#ff9800" },
    { name: "AWS", progress: 50, color: "#009688" },
  ];

  return (
    <div>
      <Typography variant="h6">Main Skills</Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <div style={{ marginBottom: "8px" }}>
              <p>{skill.name}</p>
              <LinearProgress
                variant="determinate"
                value={skill.progress}
                style={{
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: "lightgray",
                }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillsComponent;
