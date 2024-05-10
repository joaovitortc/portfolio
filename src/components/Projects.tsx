import React from "react";
import clsx from "clsx";
import SectionHeader from "./SectionHeader";
import Archive from "../icons/Archive";
import GlowCard from "./GlowCard";
import ProjectCard from "./ProjectCard";
import ExpandArrowLink from "./ExpandArrow";

function Projects() {
  return (
    <div id="projects" className="relative z-10 ml-16 mr-16 pt-4">
      <SectionHeader
        icon={<Archive height="28" width="28" />}
        title="My Projects"
        description={
          <div>
            Some of <span className="text-my_work_yellow">my projects</span> as
            a full stack
            <span className="text-my_work_yellow"> developer</span>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 @3xl:grid-cols-2">
        <ProjectCard
          title="KuKeen"
          description="Full-stack web application designed to streamline the experience 
            of purchasing meal kits online. It offers two distinct user roles: customers and administrators. 
            Customers can easily sign up, log in, and browse a wide selection of meal kits, making purchases 
            with just a few clicks. On the other hand, administrators have access to a comprehensive set of 
            tools for managing the database, including creating, updating, and deleting meal kit listings."
          image="../projects/kukeen.png"
          website="https://cute-pear-abalone-vest.cyclic.app"
          learnMore="https://github.com/joaovitortc/KuKeen/tree/main"
        />
        <ProjectCard
          title="J.A.R.V.I.S."
          description="A voice-activated personal assistant that leverages the power of AI to 
          engage in conversations, answer questions, and perform tasks. 
          It is designed to be user-friendly."
          image="../projects/kukeen.png"
          website=""
          learnMore="https://github.com/joaovitortc/JARVIS"
        />
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 pt-10">
      <GlowCard className="hover:shadow-my_work_yellow/90"
                glowClassName="from-[#ffdc8b] to-[#ffdc8b]">
        <div className="flex flex-col lg:flex-row itens-stretch w-full h-full">
          <img
            className="object-cover max-w-full mx-auto rounded-t-lg md:max-h-[400px] lg:h-[200px] xl:max-h-[500px]"
            src="../projects/lease-protect.jpg"
            alt=""
          />
          <div className="flex flex-col flex-grow justify-between p-4 leading-normal">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-my_work_yellow">
            Lease Protec
            </h5>
            <p className="mb-1 pt-0 font-normal text-white dark:text-white/90">
            Groundbreaking solution revolutionizing the rental industry by leveraging 
          Ethereum blockchain technology. It ensures transparency and security in lease agreements while streamlining 
          the process for landlords and tenants. The platform digitizes and automates lease agreements, providing 
          maximum transparency while safeguarding privacy. 
          It minimizes delays and offers easy access for all parties involved.
            </p>
            <div className="mt-auto">
            <div className="flex justify-between">
            <ExpandArrowLink content="Learn more" href="https://github.com/joaovitortc/JARVIS" className="before:bg-my_work_yellow " />

            </div>
            </div>
          </div>
          </div>
        </GlowCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 @3xl:grid-cols-2">
        <ProjectCard
          title="AWS Web Chat"
          description="A real-time chat application that leverages the power of AWS to provide a seamless user experience."
          image="../projects/awschat.png"
          website=""
          learnMore="https://github.com/joaovitortc/RealTimeChatApp"
        />
        <ProjectCard
          title="InkCraft Pro"
          description="An AI-powered website that allows users to generate custom tattoo designs based on their preferences.
          "
          image="../projects/inkcraft.png"
          website=""
          learnMore="https://github.com/joaovitortc/JARVIS"
        />
        
      </div>
    </div>
  );
}

export default Projects;
