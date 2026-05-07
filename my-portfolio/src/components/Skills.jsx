import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Skills() {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        color: "black",
        py: 6,
      }}
    >
      <Container maxWidth="md">

        <Typography variant="h4" sx={{fontWeight: "bold"}}>
          SKILLS
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              borderBottom: "2px solid black",
              display: "inline-block",
              mb: 1,
            }}
          >
            Backend
          </Typography>

          <Typography>Java</Typography>
          <Typography>JDBC</Typography>
          <Typography>Servlets</Typography>
          <Typography>Hibernate(JPA)</Typography>
          <Typography>Spring</Typography>
          <Typography>Spring Boot</Typography>
        </Box>

       
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              borderBottom: "2px solid black",
              display: "inline-block",
              mb: 1,
            }}
          >
            Frontend
          </Typography>

          <Typography>HTML</Typography>
          <Typography>CSS</Typography>
          <Typography>JavaScript</Typography>
        </Box>

       
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              borderBottom: "2px solid black",
              display: "inline-block",
              mb: 1,
            }}
          >
            Database
          </Typography>

          <Typography>MySQL</Typography>
        </Box>

      </Container>
    </Box>
  );
}

export default Skills;