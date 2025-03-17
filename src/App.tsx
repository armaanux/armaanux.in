import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import Layout from "./components/Layout";
import { Projects } from "./pages/Projects";
import { Milestone } from "./pages/Milestone";
import { Contact } from "./pages/Contact";

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
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </Layout>
    </Router>


  );
}

export default App;
