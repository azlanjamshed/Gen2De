import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[#023047] rounded-3xl mx-5 md:mx-10 py-30 pb-10 mt-10 flex flex-col items-center text-center ">
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold px-4 md:px-8 py-10 font-[Share_Tech_Mono]">
          We design, We develop, You grow.
        </h1>

        <button className="mt-20  px-8 py-4 bg-[#023047] text-[#E0AA3E] text-lg md:text-xl rounded-full hover:bg-white hover:text-[#023047] transition duration-300 font-semibold font-[Josefin_Sans]">
          Manifesto
        </button>
      </div>
    </>
  );
};

export default Hero;
