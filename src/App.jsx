import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
