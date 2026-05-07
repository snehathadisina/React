import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        <Typography variant="h6">
          SNEHA THADISINA
        </Typography>

        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact me</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

