import React from "react";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {fetchresourseapicall} from "../../apiservice/auth/resourseservice";
import {setfetchResource} from "../../redux/slices/authslices/resourceslice";
import {setLoader} from "../../redux/slices/loaderSlice";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function SubLayout({children}) {
  const dispatch = useDispatch();

  const resourcerole = useSelector((state) => state?.resource?.values);

  const roleextract = resourcerole?.Role?.map((item) => {
    console.log(item);
    return item === "Employee"
      ? item === "Manager"
        ? "hell"
        : "asdfjkskadf"
      : "";
  });

  const fetchresourcedata = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchresourseapicall();
      console.log("response", response);
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setfetchResource(response.resource));
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.message);
    }
  };

  useEffect(() => {
    fetchresourcedata();
  }, [0]);
  return (
    <>
      <div className="dashboard_wrapper">
        {/* <Sidebar /> */}
        <div className="dashboard_box">
          <Header />
          <main>
            <div className="content">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default SubLayout;

// import React from "react";
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// function App() {
//   const [roletype, setRoletype] = React.useState([
//     "Employee",
//     "Contractor",
//     "Manager",
//   ]);

//   console.log("roletype", roletype[0]);

//   const TypeofRole = {
//     Employee: "Employee",
//     Contractor: "Contractor",
//     Manager: "Manager",
//   };

//   // Create links based on roles
//   const roleLinks = roletype.map((item) => {
//     if (item === TypeofRole.Employee) {
//       return (
//         <li key={item}>
//           <Link to="/employee">Employee Dashboard</Link>
//         </li>
//       );
//     } else if (item === TypeofRole.Manager) {
//       return (
//         <li key={item}>
//           <Link to="/manager">Manager Dashboard</Link>
//         </li>
//       );
//     } else if (item === TypeofRole.Contractor) {
//       return (
//         <li key={item}>
//           <Link to="/contractor">Contractor Dashboard</Link>
//         </li>
//       );
//     }
//     return null; // Ensure to return null for unmatched items
//   });

//   return (
//     <>
//       <div>
//         <button onClick={() => setRoletype(["Contractor","Manager"])}>
//           Set Type
//         </button>
//         <ul>{roleLinks}</ul> {/* Display links here */}
//         <Routes>
//           <Route
//             path="/employee"
//             element={<div>Welcome to the Employee Dashboard</div>}
//           />
//           <Route
//             path="/manager"
//             element={<div>Welcome to the Manager Dashboard</div>}
//           />
//           <Route
//             path="/contractor"
//             element={<div>Welcome to the Contractor Dashboard</div>}
//           />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
