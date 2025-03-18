import { NavLink } from "react-router-dom";

type NavLinkClassNameProps = {
  isActive: boolean;
};

export const Navdock = () => {
  // Define the navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Milestone", path: "/milestone" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white rounded-full w-fit text-xl flex flex-row justify-evenly gap-4 p-2">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }: NavLinkClassNameProps) =>
            `p-3 rounded-full text-black hover:bg-blue-700 hover:text-white font-thin transition-colors duration-200 ${isActive ? "bg-blue-500 text-white" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};