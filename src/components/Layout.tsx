import { ReactNode } from "react";
import bgimg from "../assets/Background.png";
import { Navdock } from "./Navdock";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{backgroundImage: `url(${bgimg})`}}
      />
      <Navbar />
      {/* Fixed Navdock */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-screen">
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
