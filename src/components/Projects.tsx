import React from "react";
import SectionHeader from "./SectionHeader";
import Archive from "../icons/Archive";
import GlowCard from "./GlowCard";
import ProjectCard from "./ProjectCard";
import ExpandArrowLink from "./ExpandArrow";
import Skill from "./Skill";

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
          description="Full-stack web application that allows 
          customers to purchase meal kits and administrators to manage the database."
          image="../projects/kukeen.png"
          website="https://cute-pear-abalone-vest.cyclic.app"
          learnMore="https://github.com/joaovitortc/KuKeen/tree/main"
          tech={
            <div className="flex mt-1 mb-1">
              <Skill
                name="EJS"
                src="https://pbs.twimg.com/profile_images/2199543684/ejs_400x400.png"
              />
              <Skill
                name="JavaScript"
                src="https://abrudz.github.io/logos/JS.svg"
              />
              <Skill
                name="Bootstrap"
                src="https://symbols.getvecta.com/stencil_25/5_bootstrap.bbf5d3d59c.svg"
              />
              <Skill
                name="NodeJS"
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              />
              <Skill
                name="ExpressJS"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
              />
              <Skill
                name="MongoDB"
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              />
            </div>
          }
        />
        <ProjectCard
          title="AWS Web Chat"
          description="A real-time chat application that leverages the power of AWS to provide a seamless user experience."
          image="../projects/awschat.png"
          website=""
          learnMore="https://github.com/joaovitortc/RealTimeChatApp"
          tech={
            <div className="flex mt-1 mb-1">
              <Skill
                name="Python"
                src="https://abrudz.github.io/logos/Python.svg"
              />
              <Skill
                name="JavaScript"
                src="https://abrudz.github.io/logos/JS.svg"
              />
              <Skill
                name="NodeJS"
                src="https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg"
              />
              <Skill
                name="ExpressJS"
                src="https://cdn.worldvectorlogo.com/logos/aws-logo.svg"
              />
              <Skill
                name="ExpressJS"
                src="https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg"
              />
            </div>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 pt-10">
        <GlowCard
          className="hover:shadow-my_work_yellow/90"
          glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
        >
          <div className="flex flex-col lg:flex-row itens-stretch w-full h-full">
            <img
              className="object-cover max-w-full mx-auto rounded-t-lg md:max-h-[400px] lg:h-[200px] xl:max-h-[500px]"
              src="../projects/lease-protect.jpg"
              alt=""
            />
            <div className="flex flex-col flex-grow justify-between p-4 leading-normal">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-my_work_yellow">
                Lease Protec <span className="text-white text-lg">-</span>{" "}
                <span className="text-lg">
                  Seneca's 2024 Hackathon Finalist
                </span>
              </h5>
              <p className="mb-1 pt-0 font-normal text-white dark:text-white/90">
                Ethereum blockchain solution for rental industry, ensuring
                transparent, secure lease agreements with streamlined digital
                processes for landlords and tenants.
              </p>
              <div className="mx-1">
                <div className="flex mt-1 mb-1">
                  <Skill
                    name="React"
                    src="https://symbols.getvecta.com/stencil_25/72_react.76a8d36b4b.svg"
                  />
                  <Skill name="NextJS" src="/logos/nextjs-logo.png" />
                  <Skill
                    name="JavaScript"
                    src="https://abrudz.github.io/logos/JS.svg"
                  />
                  <Skill
                    name="Solidity"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg"
                  />
                  <Skill
                    name="MetaMask"
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                  />
                  <Skill
                    name="MongoDB"
                    src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                  />
                  <Skill
                    name="TailWind"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
                  />
                  <Skill
                    name="MetaMask"
                    src="https://cdn.worldvectorlogo.com/logos/metamask.svg"
                  />
                  <Skill
                    name="Cloudinary"
                    src="https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg"
                  />
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between">
                  <ExpandArrowLink
                    content="Learn more"
                    href="https://github.com/joaovitortc/JARVIS"
                    className="before:bg-my_work_yellow "
                  />
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 @3xl:grid-cols-2">
        <ProjectCard
          title="J.A.R.V.I.S."
          description="A voice-activated personal assistant that leverages the power of AI to 
          engage in conversations, answer questions, and evaluate responses."
          image="../projects/kukeen.png"
          website=""
          learnMore="https://github.com/joaovitortc/JARVIS"
          tech={
            <div className="flex mt-1 mb-1">
              <Skill
                name="React"
                src="https://symbols.getvecta.com/stencil_25/72_react.76a8d36b4b.svg"
              />
              <Skill
                name="JavaScript"
                src="https://abrudz.github.io/logos/JS.svg"
              />
              <Skill
                name="NodeJS"
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              />
              <Skill
                name="ExpressJS"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
              />
            </div>
          }
        />
        <ProjectCard
          title="InkCraft Pro"
          description="An AI-powered website that allows users to generate custom tattoo designs based on their preferences.
          "
          image="../projects/inkcraft.png"
          website=""
          learnMore="https://github.com/joaovitortc/JARVIS"
          tech={
            <div className="flex mt-1 mb-1">
              <Skill
                name="JavaScript"
                src="https://abrudz.github.io/logos/JS.svg"
              />
              <Skill
                name="NodeJS"
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              />
              <Skill
                name="ExpressJS"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
              />
              <Skill
                name="Bootstrap"
                src="https://symbols.getvecta.com/stencil_25/5_bootstrap.bbf5d3d59c.svg"
              />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
