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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SiginUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Toaster/>

    </>
  );
}

export default App;
