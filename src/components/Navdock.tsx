import { NavLink } from "react-router-dom";

type NavLinkClassNameProps = {
  isActive: boolean;
};

export const Navdock = () => {
  // Define the navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Milestones", path: "/milestones" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white rounded-full w-fit text-xl gap-1 flex flex-row justify-evenly p-2">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }: NavLinkClassNameProps) =>
            `px-4 py-2 rounded-full text-black hover:bg-black hover:text-white font-normal transition-colors duration-200 ${isActive ? "bg-blue-700 text-white" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};