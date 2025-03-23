import { useState } from 'react';
import { LinkedinIcon } from "./Icons";
import { InstagramIcon } from "./Icons";
import { BehanceIcon } from "./Icons";
import { WhatsappIcon } from "./Icons";
import { MailIcon } from "./Icons";
// import { FreelancerIcon } from "./Icons";
import { NavLink } from 'react-router-dom';

export const NavIcons = [
  { id: 'linkedin', icon: <LinkedinIcon />, link: "https://www.linkedin.com/in/armaanxd" },
  { id: 'instagram', icon: <InstagramIcon />, link: "http://www.instagram.com/armaan.ux"  },
  { id: 'behance', icon: <BehanceIcon />, link: "https://www.behance.net/armaandesigns4u"  },
  { id: 'whatsapp', icon: <WhatsappIcon />, link: "http://wa.me/918957949678"  },
  { id: 'mail', icon: <MailIcon />, link: "mailto:armaandesigns4u@gmail.com"  },
  // { id: 'freelancer', icon: <FreelancerIcon /> },
];

type NavLinkClassNameProps = {
  isActive: boolean;
};

interface NavbarProps {
  quote: string;
}

export const Navbar = ({ quote }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Milestone", path: "/milestone" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <navbar id="navbar">
      <section className="flex md:flex-row-reverse bg-transparent justify-between items-center px-4 md:px-14 py-10">
        {/* Left Side: Quote */}
        <h3 className="text-white text-sm md:text-base w-64">
          {quote}
        </h3>

        {/* Middle: Available for Work */}
        <div className="hidden md:flex bg-white/10 rounded-full w-fit flex-row items-center justify-evenly gap-4 px-4 py-2 text-white text-sm md:text-base">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Available for work
        </div>

        {/* Right Side: Hamburger Menu (Mobile) and Icons (Desktop) */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Icon (Mobile Only) */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>

          {/* Icons Container (Hidden on Mobile by Default) */}
          <div className="hidden md:flex md:flex-row gap-4">
            {NavIcons.map(({ id, icon, link }) => (
              <a href={link} target='_blank' key={id} className="icon">
                {icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu (Hidden on Desktop) */}
          <div className={`fixed z-50 top-0 right-0 h-screen w-64 bg-black backdrop-blur-md flex flex-col justify-center items-center gap-4 p-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
            {/* Close Button for Mobile Menu */}
            <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>

            {/* Navigation Links (Mobile Only) */}
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }: NavLinkClassNameProps) =>
                  `text-white p-1 ${isActive ? "bg-accent-foreground" : ""}`
                }
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </navbar>
  );
};