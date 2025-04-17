import projectimg2 from "@/assets/3D Consultation.png";
import projectimg3 from "@/assets/NewRise v2.png";
import projectimg4 from "@/assets/Bidding Bot.png";
import notionlogo from "@/assets/notion-logo.svg";
import figmalogo from "@/assets/figma-logo.svg";

interface ProjectsProps {
  image: string;
  name: string;
  description: string;
  projectoverviewlink?: string;
  projectdesignlink?: string;
}

const projects: ProjectsProps[] = [
  {
    image: projectimg2,
    name: "3D Consultation Dashboard",
    description:
      "A desktop interface built for easy exploration of medical videos, categorized by body part, diagnosis, and viewing angle. The organized, tab-based layout makes navigation simple and improves content discoverability.",
    projectoverviewlink: "34",
    projectdesignlink: "",
  },
  {
    image: projectimg4,
    name: "Semi-Auto Freelancer Bidding Bot",
    description:
      "Spending too much time writing bids? This intelligent bidding system uses AI to write tailored, high-quality bids automatically. Deliver competitive offers faster, streamline your workflow, and win more projects with ease.",
    projectoverviewlink: "34",
    projectdesignlink: "",
  },
  {
    image: projectimg3,
    name: "NewRise Real Estate Desktop UI",
    description:
      "A clean, modern real estate platform designed in Figma, featuring fluid navigation, refined search filters, and a seamless user experience. Designed to make property browsing intuitive and engaging across all devices.",
    projectoverviewlink: "34",
    projectdesignlink: "",
  }
];

export const Projects = () => {
  return (
    <section
      id="testimonials"
      className="w-full px-5 md:px-20 space-y-12 container py-10 text-white"
    >
      <div className="flex-col justify-center items-center gap-6 flex pb-10">
        <div className="font-first text-xl md:text-4xl"> Projects</div>
        <div className="text-[#B3B3B3] text-lg text-center">
        Here's a glimpse of the work I'm proud of - projects that challenged me, inspired me, and made me a better designer.
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-3 lg:gap-6 md:mx-10 space-y-4 lg:space-y-6">
        {projects.map(({ image, name, description,
          projectoverviewlink, projectdesignlink }) => (
          <div
            key={name}
            className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{name}</h2>
              <p className="text-[#B4B4B4] mb-4">{description}</p>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={projectoverviewlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-row justify-center items-center text-center bg-white hover:bg-[#ffffffe3] text-black py-2 rounded-lg transition-colors duration-200"
                >
                  <img src={notionlogo} alt="Notion Logo" className="w-5 h-5 mr-2" />
                  Project Overview
                </a>
                <a
                  href={projectdesignlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-row justify-center items-center text-center bg-transparent hover:bg-accent-foreground text-white py-2 rounded-lg transition-colors duration-200 border-2"
                >
                  <img src={figmalogo} alt="Figma Logo" className="w-5 h-5 mr-2" />
                  View Design
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// const Timeiconsvg = () => {
//   return (
//     <svg
//       width="22"
//       height="22"
//       viewBox="0 0 32 32"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M7.51479 7.51467C5.55166 9.47777 4.32995 12.0608 4.05781 14.8237C3.78567 17.5866 4.47995 20.3584 6.02234 22.6668C7.56473 24.9752 9.85981 26.6773 12.5165 27.4833C15.1732 28.2892 18.0272 28.149 20.5921 27.0866C23.1571 26.0242 25.2743 24.1053 26.583 21.6568C27.8918 19.2084 28.3111 16.3819 27.7695 13.659C27.2279 10.9361 25.7589 8.4852 23.6128 6.72394C21.4668 4.96268 18.7764 4.00002 16.0001 4V6.66667M16.0001 16L8.00012 8M28.0001 16H25.3335M16.0001 25.3333V28M6.66679 16H4.00012"
//         stroke="white"
//         strokeWidth="3"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };