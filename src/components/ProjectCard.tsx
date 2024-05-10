import React from 'react'
import GlowCard from './GlowCard'
import ExpandArrowLink from './ExpandArrow';

function ProjectCard({title, description, image, website, learnMore} : 
    {title:string, description:string, image:string, website?:string, learnMore:string})
{
return (
    <GlowCard className="hover:shadow-my_work_yellow/90"
                glowClassName="from-[#ffdc8b] to-[#ffdc8b]">
        <div className="flex flex-col itens-stretch w-full h-full">
          <img
            className="object-cover max-w-full mx-auto rounded-t-lg md:max-h-[400px] lg:h-[200px] xl:max-h-[500px]"
            src={image}
            alt=""
          />
          <div className="flex flex-col flex-grow justify-between pt-4 leading-normal">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-my_work_yellow">
              {title}
            </h5>
            <p className="mb-1 pt-0 font-normal text-white dark:text-white/90">
            {description}
            </p>
            <div className="mt-auto">
            <div className="flex justify-between">
            <ExpandArrowLink content="Learn more" href={learnMore} className="before:bg-my_work_yellow " />
            {website && <ExpandArrowLink content="Visit website" href={website} className="before:bg-my_work_yellow " />}
            </div>
            </div>
          </div>
          </div>
        </GlowCard>
  )
}

export default ProjectCard;