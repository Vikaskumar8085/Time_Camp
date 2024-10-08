import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import {MdOutlineDelete, MdOutlineEdit} from "react-icons/md";
import Button from "../../../../../common/Button";
import ProjectDrawer from "../../../../../components/AdminComponent/ProjectComponent/ProjectDrawer";
import {fetchclientapicall} from "../../../../../apiservice/admin/clientapiservice";
import {fetchallresources} from "../../../../../apiservice/admin/employeeapiservice";
import {fetroleapicall} from "../../../../../apiservice/admin/roleapiservice";

function AllProjects({
  IsOpen,
  projectitmes,
  PhandleSubmit,
  RemoveProjects,
  EPhandleSubmit,
  handleEdit,
  setIsOpen,
  PItems,
}) {
  const [clientdata, setclient] = React.useState([]);
  const [resourcedata, setresource] = React.useState([]);
  const [roledata, setrole] = React.useState([]);


  // fetch client data
  const fetchclienthandler = async () => {
    try {
      const response = await fetchclientapicall();
      console.log(response, "client");
      if (response.success) {
        setclient(response.clientdata);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  // fetch project manager data
  const fetchprojectmanagerhandler = async () => {
    try {
      const response = await fetchallresources();
      if (response.success) {
        setresource(response.result);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  // fetch role

  const fetchprojectrolehandler = async () => {
    try {
      const response = await fetroleapicall();
      console.log(response, "response");
      if (response.success) {
        setrole(response.result);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  React.useEffect(() => {
    fetchclienthandler();
    fetchprojectmanagerhandler();
    fetchprojectrolehandler();
  }, [0]);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button type="submit" onclick={() => setIsOpen(true)}>
        Add Project
      </Button>
      {IsOpen && (
        <ProjectDrawer
          IsOpen={IsOpen}
          clientdata={clientdata}
          resourcedata={resourcedata}
          roledata={roledata}
          setIsOpen={setIsOpen}
          PhandleSubmit={PhandleSubmit}
          EPhandleSubmit={EPhandleSubmit}
          handleClose={handleClose}
          PItems={PItems}
        />
      )}

      {/* table project */}
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">ProjectName</TableCell>
              <TableCell align="right">ProjectCode</TableCell>
              <TableCell align="right">Client Name</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">Project Type</TableCell>
              <TableCell align="right">Project Manager</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Employee</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectitmes?.map((item, index) => {
              return (
                <>
                  <TableRow
                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell key={index}>{index + 1}</TableCell>
                    <TableCell>{item?.Project_Name}</TableCell>
                    <TableCell>{item?.Project_Code}</TableCell>
                    <TableCell>{item?.Client_Name}</TableCell>
                    <TableCell>{item?.Start_Date}</TableCell>
                    <TableCell>{item?.End_Date}</TableCell>
                    <TableCell>{item?.Project_Type}</TableCell>
                    <TableCell>{item?.Project_Managers}</TableCell>
                    <TableCell>{item?.Role}</TableCell>
                    <TableCell>{item?.Employee}</TableCell>
                    <TableCell>
                      <span onClick={() => RemoveProjects(item?.Project_Id)}>
                        <MdOutlineDelete
                          style={{fontSize: "1.2em", margin: "0px 3px"}}
                        />
                      </span>
                      <span onClick={() => handleEdit(item)}>
                        <MdOutlineEdit
                          style={{fontSize: "1.2em", margin: "0px 3px"}}
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllProjects;
