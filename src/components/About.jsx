import { CheckCircle2 } from "lucide-react";
import AboutImg from "../assets/about.jpg";
import { checklistItems, checklistItems2 } from "../constants";

const About = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        About{" "}
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          Us.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-2/4">
          <img src={AboutImg} alt="Coding" />
        </div>
        
        <div className="pt-12 w-full lg:w-2/4">

            <div className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">
                We are absolutely delighted to share the exciting news of the forthcoming, much-anticipated 4th season of HACK THE MOUNTAINS! This announcement comes on the heels of the resounding success of our previous hackathons, and we are poised to take things to an even more remarkable level in this new season.

                As we prepare for this thrilling event, we are thrilled to inform you that the 4th season will present participants with an array of unprecedented opportunities and challenges. The essence of HACK THE MOUNTAINS has always been about fostering creativity, innovation, and collaboration in the world of hacking and technology. This time around, we're raising the bar to bring you an unforgettable experience that will not only test your skills but also enable you to push your boundaries further than ever before.
                </h5>
              </div>
            </div>
        </div>


      </div>

    </div>
  );
};

export default About;
