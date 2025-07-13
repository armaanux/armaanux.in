import papua from "@/assets/papua-new-gineua.png"
import unitedkingdom from "@/assets/united-kingdom.png"
import italy from "@/assets/italy.png"
import star from "@/assets/Star.png"


interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [


  {
    image: "https://github.com/shadcn.png",
    name: "- S Ali",
    userName: unitedkingdom,
    comment:
      "Armaan is very professional and attentive. He takes pride in his work and goes that extra mile to make sure you are satisfied with the final result. Armaan teams up with you to make sure you succeed. I will be happy to work with him again.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "- Crystal K.",
    userName: papua,
    comment: "One of the best graphic designers I've worked with. Armaan delivered what we wanted to our specifications, and took the time to ensure he understood what we needed. Armaan is detail-oriented, crystal-clear in his communication, and has a willingess that's hard to find these days to deliver to expectations. I never had any issues asking for multiple changes to our design and always received enthusiastic responses from Armaan showing how keen he was to work with his clients, which ultimately made the whole experience and collaboration stress-free and wonderful. If you're looking for an experienced designer, don't hestitate to engage Armaan; you won't be dissapointed!",
  },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "- Saghi M.",
  //   userName: unitedstates,
  //   comment:
  //     "Armaan was very conscientious about completing the project on time and maintained good communication. He asked for feedback and provided recommendations. He was flexible in making changes to the project and delivered on time. Recommend him completely.",
  // },

  {
    image: "https://github.com/shadcn.png",
    name: "- Daniele P.",
    userName: italy,
    comment:
      "Armaan is the best graphic artist I have ever met, very fast, professional and works with quality. I recommend it to everyone, truly impeccable. GREAT!! +++++ Bravo!!! complimenti!!! TOP!!",
  },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "- Arjun",
  //   userName: india,
  //   comment:
  //     "Armaan is very clear with has to be done and it shows in the services he provides! He's got a hustler's attitude which i admire. Got the job done in half a day. Thank you armaan for your service!",
  // }
];
export const Milestones = () => {
  return (
    <div className='relative flex flex-col justify-center items-center text-white px-5 md:px-48 space-y-12'>
      <div className="flex-col justify-center items-center gap-6 flex py-10">
        <div className="font-first text-xl md:text-4xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-[#FFFFFF]  via-[#CACACA] to-[#FFFFFF]
            animate-text tracking-tight">Milestones</div>
        <div className="text-[#B3B3B3] text-lg text-center">My design journey was a mix of trial, error, and a whole lot of learning. Here's how it really went down.
        </div>
      </div>
      <div className=" flex-col justify-start items-start gap-14 inline-flex">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-[#abbdf2] text-2xl md:text-[35px] font-waiting">Getting Started</div>
          <div className="self-stretch text-[#ffff] font-[350]">I began by watching YouTube tutorials and taking Udemy courses. I experimented with everything—logos, PPTs, PDFs, and even book formatting—to learn what good design is all about.</div>
        </div>
        <div className="self-stretch h-[0px] border border-[#979797]"></div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-[#abbdf2] text-2xl md:text-[35px] font-waiting">The Early Hustle</div>
          <div className="self-stretch text-[#ffff] font-[350]">Landing my first freelance project took two months of hard work. I sent out countless proposals, made plenty of changes, and learned from every mistake. Those early days were tough but taught me the value of sticking with it.</div>
        </div>
        <div className="self-stretch h-[0px] border border-[#979797]"></div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-[#abbdf2] text-2xl md:text-[35px] font-waiting">Building Credibility</div>
          <div className="self-stretch text-[#ffff] font-[350]">With no reviews or past work, I jumped into Freelancer contests right from the start. Competing with thousands of designers pushed me to fix my mistakes and pick up new skills. In six months, I entered many contests and won at least 10, which helped build the credibility I needed to grow my profile.</div>
        </div>
        <div className="self-stretch h-[0px] border border-[#979797]"></div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-[#abbdf2] text-2xl md:text-[35px] font-waiting">Where I Am Today</div>
          <div className="self-stretch text-[#ffff] font-[350]">Today, I'm a Verified and Preferred Freelancer on Freelancer.com, ranked in the Top 2% for UI design. Every project, contest, and bit of feedback has helped me improve. I'm still learning and excited about what comes next. <br />
            Thanks for being part of my journey—there's still a lot more to come!</div>
        </div>
      </div>

      <hr className="border-dotted border-t-2 border-gray-400 my-20 w-5/12" />
      <section
        id="testimonials"
        className="w-full pb-24 space-y-12"
      >
        <div className="flex-col justify-center items-center gap-6 flex py-10">
          <div className="font-first text-xl md:text-4xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-[#FFFFFF]  via-[#CACACA] to-[#FFFFFF]
            animate-text tracking-tight">Testimonials</div>
          <div className="text-[#B3B3B3] text-lg">Here's what some awesome people I've worked with in the past have to say about me!
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
          {testimonials.map(
            ({ name, userName, comment }: TestimonialProps) => (
              <div
                key={userName}
                className=" md:break-inside-avoid overflow-hidden bg-[#11111159] p-5 rounded-md space-y-2"
              >
                <div className="pb-2 flex flex-row gap-1"><img src={star} /><img src={star} /><img src={star} /><img src={star} /><img src={star} /></div>
                <div className="pb-2 font-[350]">{comment}</div>
                <div className="flex flex-row justify-between items-center gap-4">
                  <div className="text-lg p-0">{name}</div>
                  <img src={userName} />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  )
}
