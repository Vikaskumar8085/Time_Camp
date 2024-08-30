import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ScrollUp from "./common/ScrollUp/ScrollUp";
import Loader from "./common/Loader";
import Home from "./pages/Home";
import Login from "./pages/AuthPages/Login";
import Blog from "./pages/Blog";
import Dashboard from "./pages/DashboardPages/Dashboard";
import SiginUp from "./pages/AuthPages/SiginUp";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Client from "./pages/AdminPages/Client";
import Adminpage from "./pages/AdminPages/Adminpage";
import Employee from "./pages/AdminPages/Employee";
import Profile from "./pages/DashboardPages/Profile";
import ForgetPassword from "./pages/AuthPages/ForgetPassword";
import ChangePassword from "./pages/AuthPages/ChangePassword";
import Company from "./pages/AdminPages/Company";
import VerifyToken from "./pages/VerifyToken";
import Contractor from "./pages/AdminPages/Contractor";
import ErrorPage from "./pages/Error/ErrorPage";
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

  return (
    <>
      {isLoad && <Loader />}
      {isScroll && <ScrollUp />}

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company" element={<Company />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/contractor" element={<Contractor />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SiginUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify/:id" element={<VerifyToken />} />
        
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
