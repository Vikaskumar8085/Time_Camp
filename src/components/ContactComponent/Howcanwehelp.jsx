import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function Howcanwehelp() {
  return (
    <div>
      {" "}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 600,
          margin: "auto",
          padding: 2,
        }}
        onSubmit={""}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          required
          margin="normal"
          fullWidth
        />

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          margin="normal"
          fullWidth
        />

        <TextField
          label="Subject"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
          margin="normal"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Send
        </Button>
      </Box>
    </div>
  );
}

export default Howcanwehelp;
