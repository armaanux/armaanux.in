import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "- Crystal K.",
    userName: "Papua New Guinea",
    comment: "One of the best graphic designers I've worked with. Armaan delivered what we wanted to our specifications, and took the time to ensure he understood what we needed. Armaan is detail-oriented, crystal-clear in his communication, and has a willingess that's hard to find these days to deliver to expectations. I never had any issues asking for multiple changes to our design and always received enthusiastic responses from Armaan showing how keen he was to work with his clients, which ultimately made the whole experience and collaboration stress-free and wonderful. If you're looking for an experienced designer, don't hestitate to engage Armaan; you won't be dissapointed!",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "- S A.",
    userName: "United Kingdom",
    comment:
      "Armaan is very professional and attentive. He takes pride in his work and goes that extra mile to make sure you are satisfied with the final result. Armaan teams up with you to make sure you succeed. I will be happy to work with him again.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "- Saghi M.",
    userName: "United States of America",
    comment:
      "Armaan was very conscientious about completing the project on time and maintained good communication. He asked for feedback and provided recommendations. He was flexible in making changes to the project and delivered on time. Recommend him completely.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "- Daniele P.",
    userName: "Italy",
    comment:
      "Armaan is the best graphic artist I have ever met, very fast, professional and works with quality. I recommend it to everyone, truly impeccable. GREAT!! +++++ Bravo!!! complimenti!!! TOP!!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "- Arjun",
    userName: "India",
    comment:
      "Armaan is very clear with has to be done and it shows in the services he provides! He's got a hustler's attitude which i admire. Got the job done in half a day. Thank you armaan for your service!",
  }
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full px-20 space-y-5"
    >
      <h1 className="text-2xl md:text-3xl inline font-heading text-black dark:text-white">Testimonials</h1>
      <p>Here's what some awesome people I've worked with in the past have to say about me!</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className=" md:break-inside-avoid overflow-hidden"
            >

              <CardHeader>⭐⭐⭐⭐⭐</CardHeader>
              <CardContent>{comment}</CardContent>
              <CardFooter className="flex flex-row justify-end items-center gap-4">
                <div className="flex flex-col items-end">
                  <CardTitle className="text-lg p-0">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
