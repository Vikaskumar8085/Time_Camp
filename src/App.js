import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import ScrollUp from "./common/ScrollUp/ScrollUp";
import Loader from "./common/Loader";
import Home from "./pages/Home";
import Login from "./pages/AuthPages/Login";
import Blog from "./pages/Blog";
import Dashboard from "./pages/DashboardPages/Dashboard";
import SiginUp from "./pages/AuthPages/SiginUp";
import Contact from "./pages/Contact";
import {Toaster} from "react-hot-toast";
import Client from "./pages/AdminPages/Client/Client";
import Adminpage from "./pages/AdminPages/Admin/Adminpage";
import Employee from "./pages/AdminPages/Employee/Employee";
import Profile from "./pages/DashboardPages/Profile";
import ForgetPassword from "./pages/AuthPages/ForgetPassword";
import ChangePassword from "./pages/AuthPages/ChangePassword";
import Company from "./pages/AdminPages/Company/Company";
import VerifyToken from "./pages/VerifyToken";
import Contractor from "./pages/AdminPages/Contractor/Contractor";
import ErrorPage from "./pages/Error/ErrorPage";
import Privacy_Policy from "./pages/Privacy/Privacy_Policy";
import Term_Condition from "./pages/Term-Condition/Term_Condition";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import ProductivityLeaderBoardPage from "./pages/DashboardPages/ProductivityLeaderBoardPage";
import SuperAdminDashboard from "./pages/SuperAdminPages/SuperAdminDashboard/SuperAdminDashboard";
import SuperAdminEmployeeManagement from "./pages/SuperAdminPages/SuperAdminEmployeeManagement/SuperAdminEmployeeManagement";
import EmployeeDashboard from "./pages/EmployeePages/EmployeeDashboard/EmployeeDashboard";
import Reports from "./pages/SuperAdminPages/Report/Reports";
import Subscription from "./pages/SuperAdminPages/Subscription/Subscription";
import TechnicalSupport from "./pages/SuperAdminPages/TechnicalSupport/TechnicalSupport";
import PaymentActivitiy from "./pages/SuperAdminPages/PaymentActivity/PaymentActivitiy";
import EmployeeTimeSheet from "./pages/EmployeePages/EmployeeTimeSheet/EmployeeTimeSheet";
import EmployeeTeam from "./pages/EmployeePages/EmployeeTeam/EmployeeTeam";
import EmployeeProject from "./pages/EmployeePages/EmployeeProject/EmployeeProject";
import ContractorProjects from "./pages/ContractorPages/ContractorProjects/ContractorProjects";
import ContractorDashboard from "./pages/ContractorPages/ContaractorDashboard/ContractorDashboard";
import Settings from "./pages/AdminPages/Settings/Settings";
import Project from "./pages/AdminPages/Project/Project";
import EmployeeInfo from "./pages/AdminPages/Employee/Employeeinfo/EmployeeInfo";
import ContractorTimeSheets from "./pages/ContractorPages/ContractorTimeSheets/ContractorTimeSheets";
import ClientInfo from "./pages/AdminPages/Client/ClientInfo";
import Contractorinfo from "./pages/AdminPages/Contractor/Contractorinfo";
import Task from "./pages/Task/Task";
import ContractorTeam from "./pages/ContractorPages/ContractorTeam/ContractorTeam";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [isScroll, setIsScroll] = useState(false);
  const isLoad = useSelector((state) => state.loader.loading);
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  React.useEffect(() => {
    AOS.init();
  }, [0]);

  return (
    <>
      {isLoad && <Loader />}
      {isScroll && <ScrollUp />}

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SiginUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify/:id" element={<VerifyToken />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Pricing />} />
        <Route
          path="/productivity-leader-baord"
          element={<ProductivityLeaderBoardPage />}
        />
        {/* Term and condition and privacy policy */}
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/term-and-condition" element={<Term_Condition />} />
        {/* Term and condition and privacy policy */}
        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company" element={<Company />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/contractor" element={<Contractor />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/task" element={<Task />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/clientinfo/:id" element={<ClientInfo />} />
        <Route path={"/employeeinfo/:id"} element={<EmployeeInfo />} />
        <Route path={"/contractorinfo/:id"} element={<Contractorinfo />} />

        {/* Admin */}

        {/* Super Admin */}
        <Route
          path={"/super-admin-dashboard"}
          element={<SuperAdminDashboard />}
        />
        <Route
          path="/Employee-management"
          element={<SuperAdminEmployeeManagement />}
        />
        <Route
          path="/company-management"
          element={<SuperAdminEmployeeManagement />}
        />
        <Route path="/Report" element={<Reports />} />
        <Route path={"/subscription"} element={<Subscription />} />
        <Route path={"/technical-supports"} element={<TechnicalSupport />} />
        <Route path={"/payment"} element={<PaymentActivitiy />} />
        {/* Super Admin */}
        {/* Employee Pages */}
        <Route path={"/Employee-dashboard"} element={<EmployeeDashboard />} />
        <Route path={"/Employee-Project"} element={<EmployeeProject />} />
        <Route path={"/Employee-team"} element={<EmployeeTeam />} />
        <Route path={"/Employee-timesheet"} element={<EmployeeTimeSheet />} />
        {/* Employee Pages */}
        {/* Contractor Pages */}
        <Route
          path={"/contractor-dashboard"}
          element={<ContractorDashboard />}
        />
        <Route path={"/contractor-project"} element={<ContractorProjects />} />
        <Route
          path="/contractor-timesheets"
          element={<ContractorTimeSheets />}
        />

        <Route path={"/contractor-team"} element={<ContractorTeam />} />
        {/* contractor Page */}
        {/* Manager Pages */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
