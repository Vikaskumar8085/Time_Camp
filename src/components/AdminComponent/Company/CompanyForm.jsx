import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    Company_Id: "",
    Company_Name: "",
    Company_Email: "",
    Address: "",
    Postal_Code: "",
    Phone: "",
    Company_Logo: "",
    Employee_No: "",
    Established_date: "",
    CompanyWesite: "",
    Tex_Number: "",
    UserId: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form Data:", formData);
  };

  return (
    <Container component="main">
      <Typography variant="h5">Company Registration</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Company_Id"
              label="Company ID"
              type="number"
              fullWidth
              value={formData.Company_Id}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Company_Name"
              label="Company Name"
              required
              fullWidth
              value={formData.Company_Name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Company_Email"
              label="Company Email"
              required
              fullWidth
              type="email"
              value={formData.Company_Email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Address"
              label="Address"
              required
              fullWidth
              value={formData.Address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Postal_Code"
              label="Postal Code"
              required
              fullWidth
              value={formData.Postal_Code}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Phone"
              label="Phone"
              required
              fullWidth
              type="number"
              value={formData.Phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Company_Logo"
              label="Company Logo URL"
              required
              fullWidth
              value={formData.Company_Logo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Employee_No"
              label="Number of Employees"
              required
              fullWidth
              type="number"
              value={formData.Employee_No}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Established_date"
              label="Established Date"
              fullWidth
              value={formData.Established_date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="CompanyWesite"
              label="Company Website"
              required
              fullWidth
              value={formData.CompanyWesite}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="Tex_Number"
              label="Tax Number"
              required
              fullWidth
              value={formData.Tex_Number}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              name="UserId"
              label="User ID (comma-separated)"
              fullWidth
              value={formData.UserId.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "UserId",
                    value: e.target.value
                      .split(",")
                      .map((id) => Number(id.trim())),
                  },
                })
              }
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CompanyForm;
