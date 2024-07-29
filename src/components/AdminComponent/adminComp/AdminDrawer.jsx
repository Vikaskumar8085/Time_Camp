import React from "react";
import { Grid, Drawer, Box, Typography, Container } from "@mui/material";
import InputPassword from "../../../common/Input/InputPassword";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
function AdminDrawer({ IsOpen, setOpen }) {
  const handleSubmit = () => {
    alert("hello");
  };
  return (
    <Drawer open={IsOpen} onClose={() => setOpen(false)} anchor={"right"}>
      <div className="ClientDrawer_box">
        <Container component="main" maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <div className="clientDrawer_title">
              <Typography variant="h6" component={"h1"}>
                Add Admin
              </Typography>
            </div>
            {/* <Box component="form" sx={{ mt: 0 }}> */}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Client Name"
                    placeholder={"Please enter your FirstName"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Last Name"
                    placeholder={"Please enter your LastName"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    labelText="Email Address"
                    type="email"
                    placeholder={"Please enter your Email"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputPassword
                    labelText="Password"
                    type="password"
                    placeholder={"Please enter your password"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type={"submit"}>Submit</Button>
                </Grid>
              </Grid>
              {/* </Box> */}
            </form>
          </Box>
        </Container>
      </div>
    </Drawer>
  );
}

export default AdminDrawer;
