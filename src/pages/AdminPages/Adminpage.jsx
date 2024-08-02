import React, { useEffect } from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import AdminDrawer from "../../components/AdminComponent/adminComp/AdminDrawer";
import TabComp from "../../common/TabComp";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/slices/loaderSlice";
import toast from "react-hot-toast";
import ViewListIcon from "@mui/icons-material/ViewList";
import { GetallAdminApiCall } from "../../apiservice/admin";
import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
function Adminpage() {
  const [isAdmin, setIsAdmin] = React.useState([]);
  const [IsView, setIsView] = React.useState("list");

  console.log(isAdmin, "isAdmin");
  const dispatch = useDispatch();
  const [IsOpen, setOpen] = React.useState(false);

  const GetAllAdmins = async () => {
    try {
      dispatch(setLoader(true));

      const response = await GetallAdminApiCall();
      if (response?.data?.success) {
        dispatch(setLoader(false));
        setIsAdmin(response?.data?.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    GetAllAdmins();
  }, [0]);


  // Tabs component
  const tabsheadr = [{ title: "Admin Dashboard" }, { title: "Admin Details" }];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="admin_wrapper">
            <Button onclick={() => setOpen(true)}>add admin</Button>
            {IsOpen && (
              <AdminDrawer
                GetAllAdmins={GetAllAdmins}
                IsOpen={IsOpen}
                setOpen={setOpen}
              />
            )}
            <PanoramaOutlinedIcon onClick={() => setIsView("view")} />
            <ViewListIcon onClick={() => setIsView("list")} />
            {IsView === "list" && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>FirstName</TableCell>
                      <TableCell>LastName</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Photo</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isAdmin.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.FirstName}</TableCell>
                        <TableCell>{row?.LastName}</TableCell>
                        <TableCell>{row?.Email}</TableCell>
                        <TableCell>
                          <img src={row?.Photo} />
                        </TableCell>
                        <TableCell>{row?.Activity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            {IsView === "view" && (
              <div
                className="admin_table"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "Center",
                }}
              >
                {isAdmin.map((row, index) => {
                  return (
                    <>
                      <Card
                        sx={{ maxWidth: 345, minWidth: 320, margin: "20px" }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={row?.Photo}
                          alt="Sample Image"
                        />
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {row?.FirstName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {row?.LastName}
                            {row?.Email}
                          </Typography>
                        </CardContent>
                      </Card>
                    </>
                  );
                })}
              </div>
            )}
          </section>
        </>
      ),
    },
    {
      content: (
        <>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            aspernatur eligendi culpa accusantium quos quisquam facere facilis
            suscipit ipsum, ratione placeat unde distinctio alias, dolor porro
            id! Reprehenderit, aliquid. Doloremque.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Adminpage;
