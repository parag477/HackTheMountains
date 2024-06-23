import { CheckCircle2 } from "lucide-react";
import { prizesLevel } from "../constants";

const Prizes = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Prizes
      </h2>
      <div className="flex flex-wrap">
        {prizesLevel.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2 bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">{option.prize}</span>
              </p>
              <ul>
                {option.rewards.map((reward, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{reward}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight hover:text-slate-100 text-xl hover:bg-purple-800 border border-purple-800 rounded-lg transition duration-200"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;
