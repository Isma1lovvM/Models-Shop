import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;
