import React from "react";
import { Box, Container, Typography, TextField, Button} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        py: 6,
      }}
    >
      <Container maxWidth="md">

       
        <Typography variant="h4" sx={{fontWeight: "bold"}}>
        
          CONTACT ME
        </Typography>

        
        <Box
          sx={{
            display: "flex",
            gap: 6,
            mt: 4,
            flexWrap: "wrap",
          }}
        >

          
          <Box sx={{ flex: 1 }}>

            <Typography>Email: thadisinasneha2002@gmail.com</Typography>
            <Typography sx={{ mt: 1 }}>
              Phone: +91 9440688541
            </Typography>

            <Typography sx={{ mt: 1 }}>
              Hyderabad, India
            </Typography>
          </Box>

          <Box
            component="form"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >

            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />

            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />

            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />

            <Button variant="contained" sx={{ color: "white", borderColor: "black", backgroundColor: "black"}}>
              Submit
            </Button>

          </Box>

        </Box>


      </Container>
    </Box>
  );
}

export default Footer;