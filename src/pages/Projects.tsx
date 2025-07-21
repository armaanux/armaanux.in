import projectimg2 from "@/assets/3D Consultation.png";
import projectimg3 from "@/assets/NewRise v2.png";
import projectimg4 from "@/assets/Bidding Bot.png";
import notionlogo from "@/assets/notion-logo.svg";
import figmalogo from "@/assets/figma-logo.svg";
import githublogo from "@/assets/github-logo.svg";

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
    projectoverviewlink: "https://armaanux.notion.site/3d-consultation?pvs=4",
    projectdesignlink: "https://www.figma.com/design/5Unsl6gDUBJxM6QYYFfNGK/3D-Consultation?node-id=0-1&t=yWriiOuag9QduujY-1",
  },
  {
    image: projectimg4,
    name: "Semi-Auto Freelancer Bidding Bot",
    description:
      "Spending too much time writing bids? This intelligent bidding system uses AI to write tailored, high-quality bids automatically. Deliver competitive offers faster, streamline your workflow, and win more projects with ease.",
    projectoverviewlink: "https://armaanux.notion.site/freelancer-bidding?pvs=4",
    projectdesignlink: "https://github.com/armaanux/freelancer-bidding-tool",
  },
  {
    image: projectimg3,
    name: "NewRise Real Estate Desktop UI",
    description:
      "A clean, modern real estate platform designed in Figma, featuring fluid navigation, refined search filters, and a seamless user experience. Designed to make property browsing intuitive and engaging across all devices.",
    projectoverviewlink: "https://armaanux.notion.site/newrise?pvs=4",
    projectdesignlink: "https://www.figma.com/design/zMEBwVDEmBLf1ezSgziVyy/NewRise?node-id=0-1&t=UghOIUlbjh6wSxNT-1",
  }
];

export const Projects = () => {
  return (
    <section
      id="testimonials"
      className="w-full px-5 md:px-20 space-y-12 py-10 text-white"
    >
      <div className="flex-col justify-center items-center gap-6 flex pb-10">
        <div className="font-first text-xl md:text-4xl bg-gradient-to-r bg-clip-text text-transparent 
            from-[#FFFFFF] via-[#CACACA] to-[#FFFFFF]
            animate-text tracking-tight">Projects</div>
        <div className="text-[#B3B3B3] text-lg text-center">
          Here's a glimpse of the work I'm proud of - projects that challenged me, inspired me, and made me a better designer.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10">
        {projects.map(({ image, name, description, projectoverviewlink, projectdesignlink }) => (
          <div
            key={name}
            className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-[500px] flex flex-col"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover flex-shrink-0" />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2 flex-shrink-0">{name}</h2>
              <p className="text-[#B4B4B4] mb-4 flex-grow text-sm leading-relaxed">{description}</p>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href={projectoverviewlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-row justify-center items-center text-center bg-white hover:bg-[#ffffffe3] text-black py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium text-nowrap"
                >
                  <img src={notionlogo} alt="Notion Logo" className="w-4 h-4 mr-2" />
                  Project Overview
                </a>
                <a
                  href={projectdesignlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-row justify-center items-center text-center bg-transparent hover:bg-white/10 text-white py-2.5 rounded-lg transition-colors duration-200 border-2 border-white/30 text-sm font-medium"
                >
                  {name === "Semi-Auto Freelancer Bidding Bot" ? (
                    <>
                      <img src={githublogo} alt="Github Logo" className="w-4 h-4 mr-2" />
                      Github
                    </>
                  ) : (
                    <>
                      <img src={figmalogo} alt="Figma Logo" className="w-4 h-4 mr-2" />
                      View Design
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};