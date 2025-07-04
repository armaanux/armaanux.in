import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import Layout from "./components/Layout";
import { Projects } from "./pages/Projects";
import { Milestones } from "./pages/Milestones";
import { Contact } from "./pages/Contact";
import Loader from "./components/Loader";
import CustomCursor from "@/components/CustomCursor";
import { BlogList } from "./components/BlogList";
import BlogPostPage from "./components/BlogPostPage";
import { getAllBlogPosts } from "./lib/blog";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const posts = getAllBlogPosts();
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade out
      setTimeout(() => {
        setIsLoading(false); // Remove loader completely after fade
      }, 1000); // Match with fade transition
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Loader overlay */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-[99999] transition-opacity duration-1000 ease-in-out ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <Loader />
        </div>
      )}

      {/* Actual App (renders immediately) */}
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
            <Route path="/blogs" element={<BlogList posts={posts} />} />
            <Route path="/blogs/:slug" element={<BlogPostPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
