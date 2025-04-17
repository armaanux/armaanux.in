import AstronautImg from "../assets/Astronaut.gif"
export const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[73vh]">
      <img src={AstronautImg} alt="" className="h-64" />
      <h1 className="md:text-lg text-white text-center w-11/12 md:w-1/2 ">
        Looks like this space is still brewing its first story! Stay tuned, exciting blogs are on the way.
        <br />In the meantime, dive into the rest of my portfolio, there's plenty to explore :)
      </h1>
    </div>
  )
}
