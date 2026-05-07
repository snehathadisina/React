import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        color: "black",
        py: 10,
      }}
    >
      <Container maxWidth="md">

        <Typography variant="h3" gutterBottom>
          Hi, I'm Sneha
        </Typography>

        <Typography variant="h6" sx={{ mb: 3 }}>
        I'm a passionate fresher with strong knowledge in Java and problem-solving.
        I love building projects and learning new technologies.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" sx={{ color: "white", borderColor: "black", backgroundColor: "black"}}>
            Resume
          </Button>

          <Button variant="outlined" sx={{ color: "black", borderColor: "black" }}>
            Projects
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

export default Hero;