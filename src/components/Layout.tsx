import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import bgimg from "../assets/Background.png";
import { Navdock } from "./Navdock";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Determine the quote based on the current route
  const getQuote = () => {
    switch (location.pathname) {
      case "/":
        return "Designed by me, admired by you!";
      case "/projects":
        return "Built by me, loved by you!";
      case "/milestones":
        return "The journey so far.";
      case "/blogs":
        return "Thoughts worth sharing.";
      case "/contact":
        return "Let's talk.";
      default:
        return "Designed by me, admired by you.";
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgimg})` }}
      />
      {/* Navbar with dynamic quote */}
      <Navbar quote={getQuote()} />
      {/* Fixed Navdock */}
      <div className="hidden md:block fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 max-w-screen">
        <Navdock />
      </div>
      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;