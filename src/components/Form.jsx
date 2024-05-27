import React from 'react';

const Form = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Register{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Here
          </span>
        </h2>
      </div>
      <div className="flex justify-center mt-10 lg:mt-20">
        <div className="w-full sm:w-3/4 lg:w-1/2 bg-neutral-900 p-8 rounded-lg shadow-lg">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf35ZNOi6t5G_4wn3O_sj9sHhGQ1o89xABdSrmK_eRVknmiRw/viewform?embedded=true" width="640" height="959" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
  );
};

export default Form;
