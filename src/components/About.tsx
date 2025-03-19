import avatar from '../assets/avatar.png';
// import { AboutSVG } from './Icons';
// import { Testimonials } from './Testimonials';
export const About = () => {
  return (
    <section id="about" className="py-14 pt-0 sm:py-32 px-10 md:px-48 flex flex-col items-center justify-center text-white">
      <div className='flex flex-col-reverse md:flex-row gap-10 items-center justify-center py-28'>
        <div className="space-y-6">
          <div className="space-y-6 text-justify font-[350]">
            <p>
              I'm Armaan Parvez, a 22-year-old UI/UX Designer based in Lucknow, India. My job? To create designs that not only look great but actually work because let's be real, what's the point of something pretty if it doesn't function? Whether it's a website, an app, a logo, or a complete brand makeover, I make sure every design is a perfect balance of form and function.
            </p>
            <p>
            I've been designing for 4 years, and while I'm also surviving my 4th year of Computer Science at BBDEC Lucknow, it's design that gets me out of bed in the morning (or at least keeps me from hitting snooze for the 10th time). Freelancing lets me dive into exciting projects, challenge myself, and learn something new every time plus, it's a great excuse to avoid that 'real job' life.
            </p>
            <p>
            I've done it all - logos, apps, websites but my sweet spot is creating designs that are clean, pixel-perfect, and user-friendly. Because it's not just about making things look good, it's about making sure they actually work for the people using them.
            </p>

            <p>
              When I'm not designing, you'll probably find me binge-watching movies and shows, gaming (because who can resist?), or traveling to new places.
            </p>
            <p>
              That's enough about me for now! Got a project that needs a bit of creativity? Let's chat - no pressure, just a friendly conversation. I'd be happy to help bring your vision to life!            </p>
          </div>
        </div>

        <img src={avatar} alt="Armaan Parvez" width={300} />

      </div>
      <hr className="border-dotted border-t-2 border-gray-400 my-20 w-5/12" />
      <div className="space-y-12">
        <div className="flex-col justify-center items-center gap-6 flex py-10">
          <div className="font-first text-xl md:text-4xl">SERVICES</div>
          <div className="text-[#B3B3B3] text-lg">
            I offer a range of design solutions from sleek UI/UX to in-depth user research.
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 justify-center items-start">
          <ServiceCard icon={SVGIcons.uiux} title="User Interface and Experience" description="I blend art and function to craft interfaces that look stunning and feel intuitive. Every design is a mix of creativity and usability, ensuring your users have a delightful experience." />
          <ServiceCard icon={SVGIcons.wireframing} title="Wireframing and Prototyping" description="Before the final masterpiece, we start with a blueprint. I create clear, detailed wireframes & interactive prototypes that map out the user journey & set the stage for flawless design." />
          <ServiceCard icon={SVGIcons.redesign} title="Website and App Redesign" description="Time for a digital refresh? I revamp outdated websites and apps with modern aesthetics and smoother navigation, transforming them into engaging, user-friendly platforms." />
          <ServiceCard icon={SVGIcons.research} title="User Research and Testing" description="Know your audience inside and out. I dive deep into user insights and testing, fine-tuning designs based on real feedback to ensure every element hits the mark." />
          <ServiceCard icon={SVGIcons.motion} title="Motion Design and Interaction" description="Add a little sparkle to your digital experience. I bring designs to life with dynamic animations and interactive elements that captivate users and elevate every click and scroll." />
        </div>
      </div>
      <hr className="border-dotted border-t-2 border-gray-400 my-20 w-5/12" />
      <div className=' relative text-white space-y-12'>
        <div className="flex-col justify-center items-center gap-6 flex py-10">
          <div className="font-first text-xl md:text-4xl">How I work?</div>
          <div className="text-[#B3B3B3] text-lg">My design process? Simple, yet powerful ~
          </div>
        </div>
        <div className=" flex-col justify-start items-start gap-9 inline-flex ">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#abbdf2] text-[35px] font-waiting">Listen</div>
            <div className="self-stretch text-[#ffff]  leading-[33px] font-[350]">For me, every great design starts with a conversation. I'll take the time to really understand your vision, goals, and what you need. It's not about rushing in. It's about figuring out how to make your project shine (and maybe doing a little doodling in my sketchbook if inspiration hits).</div>
          </div>
          <div className="self-stretch h-[0px] border border-[#444444]"></div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#abbdf2] text-[35px] font-waiting">Brainstorm</div>
            <div className="self-stretch text-[#ffff] font-[350] leading-[33px]">Before jumping into the digital side of things, I grab my trusty sketchbook. This is where rough ideas start to take shape, whether it's wireframes or logo concepts. Honestly, my sketchbook doesn't get much attention otherwise, so it's a special moment for both of us.</div>
          </div>
          <div className="self-stretch h-[0px] border border-[#444444]"></div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#abbdf2] text-[35px] font-waiting">Design</div>
            <div className="self-stretch text-[#ffff] font-[350] leading-[33px]">With the sketches as a guide, I bring your ideas to life on screen. This is where the magic happens - designs take form, feedback sharpens them, and together, we create something that's not only beautiful but also works perfectly.</div>
          </div>
          <div className="self-stretch h-[0px] border border-[#444444]"></div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#abbdf2] text-[35px] font-waiting">Deliver</div>
            <div className="self-stretch text-[#ffff] font-[350] leading-[33px]">Once you're excited about the result, I wrap everything up and send it your way. There's nothing better than seeing a happy client (and maybe treating myself to a coffee after a job well done).</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Icons Component
const SVGIcons = {
  uiux: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_21_370)">
        <path fillRule="evenodd" clipRule="evenodd" d="M35 15H25C24.337 15 23.7011 15.2634 23.2322 15.7322C22.7634 16.2011 22.5 16.837 22.5 17.5V42.5C22.5 43.163 22.7634 43.7989 23.2322 44.2678C23.7011 44.7366 24.337 45 25 45H35C35.663 45 36.2989 44.7366 36.7678 44.2678C37.2366 43.7989 37.5 43.163 37.5 42.5V17.5C37.5 16.837 37.2366 16.2011 36.7678 15.7322C36.2989 15.2634 35.663 15 35 15ZM25 10C23.0109 10 21.1032 10.7902 19.6967 12.1967C18.2902 13.6032 17.5 15.5109 17.5 17.5V42.5C17.5 44.4891 18.2902 46.3968 19.6967 47.8033C21.1032 49.2098 23.0109 50 25 50H35C36.9891 50 38.8968 49.2098 40.3033 47.8033C41.7098 46.3968 42.5 44.4891 42.5 42.5V17.5C42.5 15.5109 41.7098 13.6032 40.3033 12.1967C38.8968 10.7902 36.9891 10 35 10H25Z" fill="url(#paint0_linear_21_370)" />
        <path d="M15 18.6499L8.7325 17.6049C7.65836 17.4259 6.55813 17.483 5.50829 17.7722C4.45844 18.0614 3.48416 18.5757 2.65316 19.2795C1.82215 19.9832 1.15435 20.8594 0.696179 21.8473C0.238004 22.8352 0.000441117 23.9109 2.57074e-07 24.9999V37.2924C-0.000284948 38.3818 0.236744 39.4581 0.694603 40.4466C1.15246 41.4351 1.82016 42.3119 2.65125 43.0162C3.48234 43.7205 4.45688 44.2353 5.50708 44.5247C6.55729 44.8142 7.65794 44.8714 8.7325 44.6924L15 43.6449V38.5774L7.91 39.7574C7.55222 39.8169 7.18579 39.7978 6.83612 39.7015C6.48645 39.6052 6.16193 39.4339 5.88507 39.1996C5.60821 38.9654 5.38564 38.6736 5.2328 38.3447C5.07997 38.0158 5.00053 37.6576 5 37.2949V25.0024C4.9998 24.6393 5.07871 24.2805 5.23123 23.951C5.38374 23.6214 5.60621 23.3291 5.88316 23.0943C6.16011 22.8594 6.48489 22.6877 6.83492 22.5911C7.18494 22.4945 7.55181 22.4753 7.91 22.5349L15 23.7174V18.6499ZM45 18.6499L51.2675 17.6049C52.3416 17.4259 53.4419 17.483 54.4917 17.7722C55.5416 18.0614 56.5158 18.5757 57.3468 19.2795C58.1778 19.9832 58.8456 20.8594 59.3038 21.8473C59.762 22.8352 59.9996 23.9109 60 24.9999V37.2924C60.0003 38.3818 59.7633 39.4581 59.3054 40.4466C58.8475 41.4351 58.1798 42.3119 57.3488 43.0162C56.5177 43.7205 55.5431 44.2353 54.4929 44.5247C53.4427 44.8142 52.3421 44.8714 51.2675 44.6924L45 43.6449V38.5774L52.09 39.7574C52.4478 39.8169 52.8142 39.7978 53.1639 39.7015C53.5135 39.6052 53.8381 39.4339 54.1149 39.1996C54.3918 38.9654 54.6144 38.6736 54.7672 38.3447C54.92 38.0158 54.9995 37.6576 55 37.2949V25.0024C55.0002 24.6393 54.9213 24.2805 54.7688 23.951C54.6163 23.6214 54.3938 23.3291 54.1168 23.0943C53.8399 22.8594 53.5151 22.6877 53.1651 22.5911C52.8151 22.4945 52.4482 22.4753 52.09 22.5349L45 23.7174V18.6499Z" fill="url(#paint1_linear_21_370)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_21_370" x1="17.5" y1="30" x2="42.5" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ABBDF2" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
        <linearGradient id="paint1_linear_21_370" x1="0" y1="31.1486" x2="60" y2="31.1486" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ABBDF2" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
        <clipPath id="clip0_21_370">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  wireframing: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.7501 30H13.0801C12.5298 30.9532 11.6803 31.6982 10.6634 32.1194C9.64653 32.5406 8.51907 32.6145 7.4559 32.3296C6.39274 32.0448 5.45328 31.417 4.78323 30.5438C4.11319 29.6706 3.75 28.6007 3.75 27.5C3.75 26.3993 4.11319 25.3294 4.78323 24.4562C5.45328 23.583 6.39274 22.9552 7.4559 22.6704C8.51907 22.3855 9.64653 22.4594 10.6634 22.8806C11.6803 23.3018 12.5298 24.0468 13.0801 25H18.7501V12.5C18.7501 11.1739 19.2769 9.90215 20.2146 8.96447C21.1523 8.02678 22.424 7.5 23.7501 7.5H43.7501C45.0762 7.5 46.348 8.02678 47.2857 8.96447C48.2233 9.90215 48.7501 11.1739 48.7501 12.5V47.5C48.7501 48.8261 48.2233 50.0979 47.2857 51.0355C46.348 51.9732 45.0762 52.5 43.7501 52.5H23.7501C22.424 52.5 21.1523 51.9732 20.2146 51.0355C19.2769 50.0979 18.7501 48.8261 18.7501 47.5V30ZM23.7501 30V47.5H43.7501V12.5H23.7501V25H29.4201C29.9705 24.0468 30.8199 23.3018 31.8368 22.8806C32.8537 22.4594 33.9812 22.3855 35.0443 22.6704C36.1075 22.9552 37.047 23.583 37.717 24.4562C38.3871 25.3294 38.7503 26.3993 38.7503 27.5C38.7503 28.6007 38.3871 29.6706 37.717 30.5438C37.047 31.417 36.1075 32.0448 35.0443 32.3296C33.9812 32.6145 32.8537 32.5406 31.8368 32.1194C30.8199 31.6982 29.9705 30.9532 29.4201 30H23.7501Z" fill="url(#paint0_linear_21_390)" />
      <defs>
        <linearGradient id="paint0_linear_21_390" x1="3.75" y1="30" x2="48.7501" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ABBDF2" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
      </defs>
    </svg>
  ),
  redesign: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4 6V15.6H39.6V6H44.4V15.6H54V20.4H44.4V39.6H54V44.4H44.4V54H39.6V44.4H20.4V54H15.6V44.4H6V39.6H15.6V20.4H6V15.6H15.6V6H20.4ZM20.4 20.4V39.6H39.6V20.4H20.4Z" fill="url(#paint0_linear_21_378)" />
      <defs>
        <linearGradient id="paint0_linear_21_378" x1="6" y1="30" x2="54" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ABBDF2" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
      </defs>
    </svg>
  ),
  research: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 42.6249V17.9999C25.7917 16.9999 23.9792 16.2499 22.0625 15.7499C20.1458 15.2499 18.2083 14.9999 16.25 14.9999C14.75 14.9999 13.26 15.1458 11.78 15.4374C10.3 15.7291 8.87333 16.1666 7.5 16.7499V41.4999C8.95833 40.9999 10.4067 40.6249 11.845 40.3749C13.2833 40.1249 14.7517 39.9999 16.25 39.9999C18.2083 39.9999 20.115 40.2191 21.97 40.6574C23.825 41.0958 25.6683 41.7516 27.5 42.6249ZM2.5 45.3749V15.2499C2.5 14.7916 2.615 14.3541 2.845 13.9374C3.075 13.5208 3.41833 13.2083 3.875 12.9999C5.79167 11.9999 7.79167 11.2499 9.875 10.7499C11.9583 10.2499 14.0833 9.99994 16.25 9.99994C19.3333 9.99994 21.9583 10.3541 24.125 11.0624C26.2917 11.7708 28.625 12.8541 31.125 14.3124C31.5833 14.5624 31.9275 14.8541 32.1575 15.1874C32.3875 15.5208 32.5017 15.9583 32.5 16.4999V42.6249C34.3333 41.7499 36.1775 41.0933 38.0325 40.6549C39.8875 40.2166 41.7933 39.9983 43.75 39.9999C45.25 39.9999 46.7192 40.1249 48.1575 40.3749C49.5958 40.6249 51.0433 40.9999 52.5 41.4999V13.9374C52.5 13.2291 52.74 12.6349 53.22 12.1549C53.7 11.6749 54.2933 11.4358 55 11.4374C55.7067 11.4391 56.3008 11.6791 56.7825 12.1574C57.2642 12.6358 57.5033 13.2291 57.5 13.9374V45.3749C57.5 46.3333 57.0933 47.0624 56.28 47.5624C55.4667 48.0624 54.6233 48.0833 53.75 47.6249C52.2083 46.7916 50.5942 46.1458 48.9075 45.6874C47.2208 45.2291 45.5017 44.9999 43.75 44.9999C41.7083 44.9999 39.7192 45.3024 37.7825 45.9074C35.8458 46.5124 34.0017 47.3558 32.25 48.4374C31.9167 48.6458 31.5525 48.8024 31.1575 48.9074C30.7625 49.0124 30.3767 49.0641 30 49.0624C29.6233 49.0608 29.2383 49.0091 28.845 48.9074C28.4517 48.8058 28.0867 48.6491 27.75 48.4374C26 47.3541 24.1567 46.5108 22.22 45.9074C20.2833 45.3041 18.2933 45.0016 16.25 44.9999C14.5 44.9999 12.7817 45.2291 11.095 45.6874C9.40833 46.1458 7.79333 46.7916 6.25 47.6249C5.375 48.0833 4.53167 48.0624 3.72 47.5624C2.90833 47.0624 2.50167 46.3333 2.5 45.3749ZM38.75 32.3749V9.31244C38.75 8.77078 38.9067 8.28078 39.22 7.84244C39.5333 7.40411 39.9392 7.10244 40.4375 6.93744L43.8125 5.81244C44.3958 5.60411 44.9483 5.69828 45.47 6.09494C45.9917 6.49161 46.2517 7.00161 46.25 7.62494V30.6874C46.25 31.2291 46.0942 31.7191 45.7825 32.1574C45.4708 32.5958 45.0642 32.8974 44.5625 33.0624L41.1875 34.1874C40.6042 34.3958 40.0517 34.3024 39.53 33.9074C39.0083 33.5124 38.7483 33.0016 38.75 32.3749Z" fill="url(#paint0_linear_21_396)" />
      <defs>
        <linearGradient id="paint0_linear_21_396" x1="2.5" y1="27.3837" x2="57.5" y2="27.3837" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ABBDF2" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
      </defs>
    </svg>
  ),
  motion: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 32.5H7.5C6.125 32.5 5 31.375 5 30C5 28.625 6.125 27.5 7.5 27.5H17.5C18.875 27.5 20 28.625 20 30C20 31.375 18.875 32.5 17.5 32.5ZM15 20C15 18.625 13.875 17.5 12.5 17.5H10C8.625 17.5 7.5 18.625 7.5 20C7.5 21.375 8.625 22.5 10 22.5H12.5C13.875 22.5 15 21.375 15 20ZM55 30C55 36.9 49.4 42.5 42.5 42.5H10C8.625 42.5 7.5 41.375 7.5 40C7.5 38.625 8.625 37.5 10 37.5H32.5C31.45 36.05 30.625 34.35 30.25 32.5H25C23.625 32.5 22.5 31.375 22.5 30C22.5 28.625 23.625 27.5 25 27.5H30.25C30.625 25.65 31.45 23.95 32.5 22.5H20C18.625 22.5 17.5 21.375 17.5 20C17.5 18.625 18.625 17.5 20 17.5H42.5C49.4 17.5 55 23.1 55 30ZM50 30C50 25.875 46.625 22.5 42.5 22.5C38.375 22.5 35 25.875 35 30C35 34.125 38.375 37.5 42.5 37.5C46.625 37.5 50 34.125 50 30Z" fill="url(#paint0_linear_21_384)" />
      <defs>
        <linearGradient id="paint0_linear_21_384" x1="5" y1="30" x2="55" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ABBDF2" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode; // SVG icons are React nodes
  title: string; // Title is a string
  description: string; // Description is a string
}

// ServiceCard Component with TypeScript types
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className=" p-6 md:p-8 bg-black/25 rounded-[10px]  shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16)] border border-[#222222] flex flex-col justify-start items-start gap-4 md:gap-6 h-full w-full">
    <div className="self-stretch justify-start items-center gap-5 inline-flex">
      <div data-svg-wrapper>{icon}</div>
      <div className="text-[#abbdf2] text-lg md:text-xl font-normal leading-7">{title}</div>
    </div>
    <div className="self-stretch text-[#ffff] font-normal">
      {description}
    </div>
  </div>
);
// Main Component
export default function Services() {
  return (
    <div className="h-[1011px] flex-col justify-center items-center gap-[150px] inline-flex">
      <div className="flex-col justify-start items-center gap-[60px] flex">
        <div className="h-[117px] flex-col justify-center items-center gap-10 flex">
          <div className="text-white text-[40px] font-normal font-['FIRST'] uppercase">SERVICES</div>
          <div className="self-stretch text-center text-[#b3b3b3] text-[22px] font-[350] font-['Urbanist'] leading-[33px]">
            I offer a range of design solutions from sleek UI/UX to in-depth user research.
          </div>
        </div>
        <div className="w-[1370px]">
          <ServiceCard icon={SVGIcons.uiux} title="User Interface & Experience" description="I blend art and function to craft interfaces that look stunning and feel intuitive. Every design is a mix of creativity and usability, ensuring your users have a delightful experience." />
          <ServiceCard icon={SVGIcons.wireframing} title="Wireframing & Prototyping" description="Before the final masterpiece, we start with a blueprint. I create clear, detailed wireframes & interactive prototypes that map out the user journey & set the stage for flawless design." />
          <ServiceCard icon={SVGIcons.redesign} title="Website & App Redesign" description="Time for a digital refresh? I revamp outdated websites and apps with modern aesthetics and smoother navigation, transforming them into engaging, user-friendly platforms." />

          <ServiceCard icon={SVGIcons.research} title="User Research & Testing" description="Know your audience inside and out. I dive deep into user insights and testing, fine-tuning designs based on real feedback to ensure every element hits the mark." />
          <ServiceCard icon={SVGIcons.motion} title="Motion Design & Interaction" description="Add a little sparkle to your digital experience. I bring designs to life with dynamic animations and interactive elements that captivate users and elevate every click and scroll." />
        </div>
      </div>
      <div data-svg-wrapper>
        <svg width="820" height="2" viewBox="0 0 820 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H820" stroke="#F1F1F1" strokeWidth="0.5" strokeDasharray="1 5" />
        </svg>
      </div>
    </div>
  );
}
