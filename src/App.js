import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './common/Loader/Loader';
import ScrollUp from './common/ScrollUp/ScrollUp';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SiginUp from './pages/SiginUp';
function App() {
  const [isScroll, setIsScroll] = useState(false);
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

  console.log(process.env.REACT_APP_BASE_URL ,"base url")
  return (<>
    {isScroll && <ScrollUp />}
    <Routes>
      <Route path="/" index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SiginUp />} />
    </Routes>
  </>
  );
}

export default App;
