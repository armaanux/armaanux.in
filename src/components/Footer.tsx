import { LinkedinIcon } from "./Icons";
import { InstagramIcon } from "./Icons";
import { BehanceIcon } from "./Icons";
import { MailIcon } from "./Icons";
// import { FreelancerIcon } from "./Icons";

export const FooterIcons = [
  { id: 'linkedin', icon: <LinkedinIcon />, link: "https://www.linkedin.com/in/armaanxd" },
  { id: 'instagram', icon: <InstagramIcon />, link: "http://www.instagram.com/armaan.ux"  },
  { id: 'behance', icon: <BehanceIcon />, link: "https://www.behance.net/armaandesigns4u"  },
  { id: 'mail', icon: <MailIcon />, link: "mailto:armaandesigns4u@gmail.com"  },
  // { id: 'freelancer', icon: <FreelancerIcon /> },
];

export const Footer = () => {
  return (
    <footer id="footer">
      <section className="flex flex-col-reverse gap-5 md:flex-row bg-[#111111] text-white justify-between items-center px-12 py-8">
        <h3>
          &copy; 2025 Armaan Parvez
        </h3>
        <div className="flex flex-row justify-between items-center gap-4">
          {FooterIcons.map(({ id, icon, link }) => (
            <a href={link} target="_blank" key={id} className="icon">
              {icon}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};
