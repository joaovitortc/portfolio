import React from "react";
import SectionHeader from "./SectionHeader";
import Archive from "../icons/Archive";
import ProjectCard from "./ProjectCard";
import Skill from "./Skill";

function Projects() {
  return (
    <div
      id="projects"
      className="relative z-10 ml-3 mr-3 md:ml-16 md:mr-16 pt-4"
    >
      <SectionHeader
        icon={
        <div className="relative">
        <Archive height="28" width="28" />
        <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10 rounded-full blur shadow-lg"></span>
        </div>}
        title="My Projects"
        description={
          <div>
            Some of <span className="text-my_work_yellow">my projects</span> as
            a<span className="text-my_work_yellow"> student</span>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-10 2xl:grid-cols-3 content-center justify-items-center align-items-center">
        <ProjectCard
          title="KuKeen"
          description="Full-stack web application that allows 
          customers to purchase meal kits and administrators to manage the database."
          image="../projects/kukeen3.png"
          website="https://kukeen.onrender.com/"
          learnMore="https://github.com/joaovitortc/KuKeen/tree/main"
          tech={
            <div className="flex mt-1 mb-1 justify-center">
              <Skill name="EJS" src="/skills/ejs_400x400.png" />
              <Skill name="JavaScript" src="/skills/JS.svg" />
              <Skill
                name="Bootstrap"
                src="/skills/5_bootstrap.bbf5d3d59c.svg"
              />
              <Skill name="NodeJS" src="/skills/nodejs-icon.svg" />
              <Skill
                name="ExpressJS"
                src="/skills/expressjs_logo_icon_169185.png"
              />
              <Skill name="MongoDB" src="/skills/mongodb-icon-1.svg" />
            </div>
          }
        />
        <ProjectCard
          title="TravelGenie"
          description="
          A revolutionary mobile app focused on simplifying travel planning. Utilizing AI, TravelGenie generates personalized travel plans tailored to each user's interests and desired location."
          image="../projects/genie3.png"
          website=""
          learnMore="https://github.com/joaovitortc/TravelGenie"
          tech={
            <div className="flex mt-1 mb-1 justify-center">
              <Skill name="React Native" src="/skills/React-icon.png" />
              <Skill name="Expo" src="/skills/expo.png" />
              <Skill name="Firebase" src="/skills/firebase.png" />
              <Skill name="JavaScript" src="/skills/JS.svg" />
            </div>
          }
          add={
            <div className="relative flex text-white text-xs md:text-sm translate-y-2">
              <h6 className="text-my_work_yellow">Best Mobile App Implementation at EPHEC University's International Week - Belgium</h6>
            </div>
          }
        />
        <ProjectCard
          title="Lease Protec"
          description=" Ethereum blockchain solution for rental industry, ensuring
          transparent, secure lease agreements with digital
          processes for landlords and tenants."
          image="../projects/kukeen2.png"
          website=""
          learnMore="https://github.com/joaovitortc/lease-protect?tab=readme-ov-file"
          tech={
            <div className="flex mt-1 mb-1 justify-center">
              <Skill name="React" src="/skills/72_react.76a8d36b4b.svg" />
              <Skill name="NextJS" src="/skills/nextjs-logo.png" />
              <Skill name="JavaScript" src="/skills/JS.svg" />
              <Skill
                name="Solidity"
                src="/skills/Ethereum_logo_translucent.svg"
              />
              <Skill name="MetaMask" src="/skills/metamask.svg" />
              <Skill name="MongoDB" src="/skills/mongodb-icon-1.svg" />
              <Skill name="TailWind" src="/skills/Tailwind_CSS_Logo.png" />
            </div>
          }
          add={
            <div className="relative flex text-white text-xs md:text-sm translate-y-2">
              <h6 className="text-my_work_yellow">
                Seneca's Hackathon Finalist 2024
              </h6>
            </div>
          }
        />

        <ProjectCard
          title="AWS Web Chat"
          description="A real-time chat application using WebSocket technology on AWS Lambda and
           DynamoDB. Enables users to connect, send messages, and engage in real-time communication."
          image="../projects/awschat.png"
          website=""
          learnMore="https://github.com/joaovitortc/RealTimeChatApp"
          tech={
            <div className="flex mt-1 mb-1 justify-center">
              <Skill name="Python" src="/skills/Python.svg" />
              <Skill name="JavaScript" src="/skills/JS.svg" />
              <Skill name="NodeJS" src="/skills/aws-dynamodb.svg" />
              <Skill name="ExpressJS" src="/skills/aws-logo.svg" />
              <Skill name="ExpressJS" src="/skills/aws-lambda-1.svg" />
            </div>
          }
        />

        {/* <ProjectCard
          title="J.A.R.V.I.S."
          description="A voice-activated personal assistant that leverages the power of AI to 
          engage in conversations, answer questions, and evaluate responses."
          image="../projects/coming.png"
          website=""
          learnMore="https://github.com/joaovitortc/JARVIS"
          tech={
            <div className="flex mt-1 mb-1 justify-center">
              <Skill name="React" src="/skills/72_react.76a8d36b4b.svg" />
              <Skill name="JavaScript" src="/skills/JS.svg" />
              <Skill name="NodeJS" src="/skills/nodejs-icon.svg" />
              <Skill
                name="ExpressJS"
                src="/skills/expressjs_logo_icon_169185.png"
              />
            </div>
          }
          add={
            <div className="relative flex text-white text-md translate-y-1.5">
              <h6 className="text-my_work_yellow">UI Under Development</h6>
            </div>
          }
        /> */}
        <ProjectCard
          title="InkCraft Pro"
          description="An AI-powered website that allows users to generate custom tattoo designs based on their preferences.
          "
          image="../projects/inkcraft.png"
          website=""
          learnMore="https://github.com/joaovitortc/InkCraftPro"
          tech={
            <div className="flex mt-1 mb-1 justify-center">
              <Skill name="JavaScript" src="/skills/JS.svg" />
              <Skill name="NodeJS" src="/skills/nodejs-icon.svg" />
              <Skill
                name="ExpressJS"
                src="/skills/expressjs_logo_icon_169185.png"
              />
              <Skill
                name="Bootstrap"
                src="/skills/5_bootstrap.bbf5d3d59c.svg"
              />
            </div>
          }
        />

        <ProjectCard
          title="Portfolio"
          description="
          You are here! This site is built entirely with React.js and Framer Motion. It also features a form built with Express that allows you to send me a message. 
          "
          image="../projects/portfolio.png"
          website=""
          learnMore="https://github.com/joaovitortc/InkCraftPro"
          tech={
            <div className="flex mt-1 mb-1 justify-center">
              <Skill name="React" src="/skills/72_react.76a8d36b4b.svg" />
              <Skill name="NodeJS" src="/skills/nodejs-icon.svg" />
              <Skill name="ExpressJS" src="/skills/TypeScript.svg" />
              <Skill name="TailWind" src="/skills/Tailwind_CSS_Logo.png" />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
