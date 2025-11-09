import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Projects from "./components/Projects.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmallDeviceToast from "./components/SmallDeviceToast";
import SmallDeviceToastOnRouteChange from "./components/SmallDeviceToastOnRouteChange";
import Contact from "./components/Contacts.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer newestOnTop />
      <SmallDeviceToast message="SijanBro's Portfolio Website" />

      <NavBar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
