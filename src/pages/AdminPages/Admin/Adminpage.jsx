import React, {useEffect} from "react";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import Button from "../../../common/Button";
import AdminDrawer from "../../../components/AdminComponent/adminComp/AdminDrawer";
import TabComp from "../../../common/TabComp";
import {useDispatch} from "react-redux";
import {setLoader} from "../../../redux/slices/loaderSlice";
import toast from "react-hot-toast";
import ViewListIcon from "@mui/icons-material/ViewList";
import {GetallAdminApiCall} from "../../../apiservice/admin/adminapiservice";
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
  Box,
} from "@mui/material";
import Input from "../../../common/Input/Input";
import InActiveAdmins from "./AdminSubpages/InActiveAdmins";
function Adminpage() {
  const [isAdmin, setIsAdmin] = React.useState([]);
  const [IsView, setIsView] = React.useState("list");
  const [IsSearch, setIsSearch] = React.useState("");
  const dispatch = useDispatch();
  const [IsOpen, setOpen] = React.useState(false);
  // searching
  const filterBySearch = isAdmin.filter((item) => {
    return (
      item.FirstName.toLowerCase().includes(IsSearch.toLowerCase()) ||
      item?.LastName?.toLowerCase().includes(IsSearch.toLowerCase()) ||
      item?.Email?.toLowerCase()?.includes(IsSearch?.toLowerCase())
    );
  });
  //
  const GetAllAdmins = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetallAdminApiCall();
      console.log(response, "response");
      if (response?.success) {
        dispatch(setLoader(false));
        setIsAdmin(response?.result);
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
  const tabsheadr = [{title: "Admin Dashboard"}, {title: "Admin Details"}];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="admin_wrapper">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button onclick={() => setOpen(true)}>add admin</Button>
              <div className="input_bar">
                <label for="cars">Sorting</label>
                <select name="" id="">
                  <option value="Asc">Acending</option>
                  <option value="desacending">desacending</option>
                  <option value="FirstName">FirstName</option>
                  <option value="LastName">FirstName</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </Box>
            {IsOpen && (
              <AdminDrawer
                GetAllAdmins={GetAllAdmins}
                IsOpen={IsOpen}
                setOpen={setOpen}
              />
            )}

            <Input
              onchange={(e) => setIsSearch(e.target.value)}
              value={IsSearch}
              placeholder={"Search"}
            />

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
                    {filterBySearch?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.FirstName}</TableCell>
                        <TableCell>{row?.LastName}</TableCell>
                        <TableCell>{row?.Email}</TableCell>
                        <TableCell>
                          <img src={row?.Photo} />
                        </TableCell>
                        <TableCell>{row?.Role}</TableCell>
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
                {filterBySearch?.map((row, index) => {
                  return (
                    <>
                      <Card sx={{maxWidth: 345, minWidth: 320, margin: "20px"}}>
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
          <InActiveAdmins />
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
