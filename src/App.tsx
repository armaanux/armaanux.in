import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import Layout from "./components/Layout";
import { Projects } from "./pages/Projects";
import { Milestones } from "./pages/Milestones";
import { Contact } from "./pages/Contact";
import { Blogs } from "./pages/Blogs";
import Loader from "./components/Loader"; // Import the Loader
import CustomCursor from "@/components/CustomCursor"; // Import the CustomCursor

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFadeIn(true), 100); // Slight delay for smooth transition
    }, 2000); // Loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Show Loader while loading
      ) : (
        <div className={`transition-opacity duration-1000 ease-in-out ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          
          <Router>
          <CustomCursor /> 
            <Layout>
              <Routes>
                <Route
                  path="/"
                  element={
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
        </div>
      )}
    </>
  );
}

export default App;
