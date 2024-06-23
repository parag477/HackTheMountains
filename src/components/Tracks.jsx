import { tracks } from "../constants";

const Tracks = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Tra
          <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
            cks
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {tracks.map((track, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-slate-200 text-purple-700 justify-center items-center rounded-full">
                {track.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{track.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {track.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
