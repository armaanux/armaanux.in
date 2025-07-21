import HeroShape from "./HeroShape";

// import { About } from "./About";
// import heroimg from "@/assets/hero_hexagon.png"




export const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center px-36 gap-5 md:gap-20 md:py-26">
        {/* <img src={heroimg} alt="" /> */}
        <div className="hidden xl:block">

        <HeroShape />
        </div>
        
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl font-normal md:text-2xl text-[#abbdf2] md:w-10/12">
            Hey, I'm Armaan
          </p>
          <main className="text-3xl md:text-7xl pb-4">
            <h1 className="inline font-first text-white">
              UI/UX DESIGNER
            </h1>
          </main>
          <p className=" text-sm md:text-xl py-3 pr-4 md:text-nowrap text-[#cccccc] bg-gradient-to-r from-transparent to-white/10 rounded-full font-normal">
            I design intuitive, user-friendly digital experiences by turning complex ideas into simple solutions.
          </p>
        </div>

      </section>
      {/* <div className="flex flex-row items-center justify-center gap-5 font-[350] text-white py-5 md:py-0">
        Scroll Down <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.64751 5.8525C8.75284 5.95797 8.81201 6.10094 8.81201 6.25C8.81201 6.39906 8.75284 6.54203 8.64751 6.6475L4.89751 10.3975C4.79204 10.5028 4.64907 10.562 4.50001 10.562C4.35094 10.562 4.20798 10.5028 4.10251 10.3975L0.352506 6.6475C0.297241 6.596 0.252915 6.5339 0.222171 6.4649C0.191427 6.3959 0.174896 6.32142 0.173563 6.24589C0.172231 6.17036 0.186124 6.09534 0.214415 6.0253C0.242705 5.95526 0.284814 5.89164 0.338228 5.83822C0.391642 5.78481 0.455268 5.7427 0.525309 5.71441C0.59535 5.68612 0.670371 5.67222 0.745898 5.67356C0.821425 5.67489 0.895911 5.69142 0.964911 5.72216C1.03391 5.75291 1.09601 5.79724 1.14751 5.8525L3.93751 8.6425V1C3.93751 0.850816 3.99677 0.707742 4.10226 0.602252C4.20775 0.496763 4.35082 0.4375 4.50001 0.4375C4.64919 0.4375 4.79226 0.496763 4.89775 0.602252C5.00324 0.707742 5.06251 0.850816 5.06251 1V8.6425L7.85251 5.8525C7.95798 5.74716 8.10094 5.68799 8.25001 5.68799C8.39907 5.68799 8.54204 5.74716 8.64751 5.8525Z" fill="white" />
        </svg>
      </div> */}
      {/* <About /> */}
    </>
  );
};


