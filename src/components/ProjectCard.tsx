import React from 'react'
import GlowCard from './GlowCard'
import ExpandArrowLink from './ExpandArrow';

function ProjectCard({title, description, image, website, learnMore} : 
    {title:string, description:string, image:string, website:string, learnMore:string})
{
return (
    <GlowCard className="hover:shadow-my_work_yellow/90"
                glowClassName="from-[#ffdc8b] to-[#ffdc8b]">
        <div className="flex flex-col items-center w-full h-full">
          <img
            className="object-cover w-full rounded-t-lg min-h-[150px] min-w-[330px] h-auto rounded-none rounded-s-lg"
            src={image}
            alt=""
          />
          <div className="flex flex-col justify-between p-6 leading-normal">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-my_work_yellow">
              {title}
            </h5>
            <p className="mb-3 font-normal text-white dark:text-white/90">
            {description}
            </p>
            <div className="flex justify-between">
            {website || <ExpandArrowLink content="Visit website" href={website} className="before:bg-my_work_yellow " />}
            <ExpandArrowLink content="Learn more" href={learnMore} className="before:bg-my_work_yellow " />
            </div>
          </div>
          </div>
        </GlowCard>
  )
}

export default ProjectCard;