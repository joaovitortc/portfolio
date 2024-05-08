import React from "react";
import AnimatedText from "./AnimatedText";
import Socials from "./Socials";

const Welcome: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 py-6 text-white sm:ml-10 md:ml-20">
      <h1 className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh] font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-6xl p-4 pl-0">
        João Vitor Cunha <span className="wave">👋</span>
      </h1>
      <div className="flex mt-3 mb-1">
        Open to Work{" "}
        <span className="relative flex h-2 w-2 self-center mx-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>{" "}
         / &#8205; <AnimatedText />
      </div>
      <p className="max-w-3xl">
      Motivated Computer Programming student with a passion for problem-solving and a drive to innovate. 
      Eager to learn, grow, and make a positive impact through technology.
      </p>
      <Socials />
    </div>
  );
};

export default Welcome;
