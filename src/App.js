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
import ForgetPassword from "./pages/AuthPages/ForgetPassword";
import ChangePassword from "./pages/AuthPages/ChangePassword";
import ProfilePage from "./pages/DashboardPages/ProfilePage";
import Company from "./pages/AdminPages/Company";
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
        <Route path="/login" index element={<Login />} />
        <Route path="/signup" element={<SiginUp />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
