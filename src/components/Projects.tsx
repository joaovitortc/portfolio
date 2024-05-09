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
            website=""
            learnMore=""
        />

        
      </div>
    </div>
  );
}

export default Projects;
