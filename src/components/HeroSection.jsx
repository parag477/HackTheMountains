import htmImg from "../assets/htm.jpg";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">

      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        CREATE
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          COLLABORATE{"\n"}
        </span>
        COMMUNICATE
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      HYBRID MODE | DATE : TBD 2024 | VENUE : Gurugram, India
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md"
        >
          Register Now!
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Discord
        </a>
      </div>
      <div className="flex mt-10 justify-center">
      <img src={htmImg} alt="Coding" />
      </div>
    </div>
  );
};

export default HeroSection;
