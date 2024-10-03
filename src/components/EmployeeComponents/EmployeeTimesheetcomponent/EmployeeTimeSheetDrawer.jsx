import {Drawer, Grid} from "@mui/material";
import Input from "../../../common/Input/Input";
import React from "react";
import {Container} from "@mui/system";

function EmployeeTimeSheetDrawer({IsOpen, setOpen}) {
  const projectsData = [
    {id: 1, name: "Project A"},
    {id: 2, name: "Project B"},
    {id: 3, name: "Project C"},
  ];

  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={() => setOpen(false)}>
        <Container component="main" maxWidth="sm">
          <div className="employee_timesheets_drawer">
            <div className="employee_filltimesheet_box">
              <div className="employee_filltimesheet_title">
                <h1>Fill TimeSheet</h1>
              </div>
            </div>

            <form action="">
              <Grid container spacing={2}>
                <Grid item md={12} sm={6} xs={12}>
                  <Input labelText={""} placeholder="Project Name" />
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                  <Input
                    labelText={"Hours"}
                    type="Number"
                    placeholder="Hours"
                  />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                  <label>
                    Project:
                    <select name="project" required>
                      <option value="" disabled>
                        Select a project
                      </option>
                      {projectsData.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Input labelText="Task Discription" />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Input labelText="Day" type="date" />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Input labelText="Discription" />
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Drawer>
    </>
  );
}

export default EmployeeTimeSheetDrawer;
