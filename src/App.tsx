import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import Layout from "./components/Layout";
import { Projects } from "./pages/Projects";
import { Milestones } from "./pages/Milestones";
import { Contact } from "./pages/Contact";
import { Blogs } from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element=
            {
              <>
                <Hero />
                <About />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Layout>
    </Router>


  );
}

export default App;
