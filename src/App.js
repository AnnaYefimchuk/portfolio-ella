import { Routes, Route } from "react-router-dom";
import './App.css';
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Testimonials } from "./pages/Testimonials";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>

  );
}

export default App;
