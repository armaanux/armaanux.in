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
    <nav className="bg-white/10 rounded-full w-fit text-xl flex flex-row justify-evenly gap-4 p-2">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }: NavLinkClassNameProps) =>
            `p-3 rounded-full text-white hover:bg-accent-foreground transition-colors duration-200 ${isActive ? "bg-accent-foreground" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};