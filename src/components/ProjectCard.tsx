import React from "react";
import GlowCard from "./GlowCard";
import ExpandArrowLink from "./ExpandArrow";

function ProjectCard({
  title,
  description,
  image,
  website,
  learnMore,
  tech,
  add
}: {
  title: string;
  description: string;
  image: string;
  website?: string;
  learnMore: string;
  tech: React.ReactNode;
  add?: React.ReactNode
}) {
  return (
    <GlowCard
      className="hover:shadow-my_work_yellow/90 w-[350px] h-[500px] sm:w-[400px] xl:w-[450px] xl:h-[530px] ml-4 mr-4 mb-8"
      glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
    >
      <div className="flex flex-col itens-stretch w-full h-full">
      <div className="relative w-full h-[200px] xl:h-[230px]">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        src={image}
        alt=""
      />
    </div>
        <div className="flex flex-col flex-grow justify-between pt-4 leading-normal">
          <div className="flex flex-row">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-my_work_yellow">
            {title}
          </h5>
          {add ? <h6 className="ml-auto mr-1">
            {add}
          </h6> : null}
          </div>
         
          <p className="mb-1 pt-0 font-normal text-white dark:text-white/90">
            {description}
          </p>
          <div className="mt-6 justify-center">{tech}</div>
          <div className="mt-auto">
            <div className="flex justify-between">
              <ExpandArrowLink
                content="Learn more"
                href={learnMore}
                className="before:bg-my_work_yellow "
              />
              {website && (
                <ExpandArrowLink
                  content="Visit website"
                  href={website}
                  className="before:bg-my_work_yellow "
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

export default ProjectCard;
