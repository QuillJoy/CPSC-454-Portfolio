import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Suits from './components/suits/Suits';
import Intern from './components/intern/Intern';
import Student from './components/student/Student';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="experience/*" element={<Experience />} />
          <Route path="/experience/suits" element={<Suits />} />
          <Route path="/experience/intern" element={<Intern />} />
          <Route path="/experience/student" element={<Student />} />
          <Route path="contact" element={<Contact />} />



        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
