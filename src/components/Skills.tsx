import React, { useState } from "react";
import clsx from "clsx";
import { useAnimationControls, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import BookOpen from "../icons/BookOpen";
import { skillsLogos, skillsTitles } from "../modules/skills";

const skills = [
    { skill: 'Languages', buttonClassNames: 'rounded-tl-full', textClassNames: '-translate-x-1 ' },
    { skill: 'Front', buttonClassNames: 'rounded-tr-full', textClassNames: 'translate-x-4 translate-y-1' },
    { skill: 'Back', buttonClassNames: 'rounded-bl-full', textClassNames: 'translate-x-9 -translate-y-2' },
    { skill: 'Tools', buttonClassNames: 'rounded-br-full', textClassNames: 'translate-x-4 -translate-y-3' },
  ];

function Skills() {
  const [activeSkill, setActiveSkill] = useState("Languages");
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start("hidden");
    await controls.start("visible");
  };

  return (
    <div id="skills" className="relative z-10 ml-3 mr-3 md:ml-16 md:mr-16 pt-4">
      <SectionHeader
        icon={<BookOpen height="28" width="28" />}
        title="Skills"
        description={
          <div>
            <span className="text-skills_purple">Explore </span> my skill set
            and see how I can contribute to <span className="text-skills_purple">your project</span>
          </div>
        }
      />

     <div className="@container">
      <div className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8">
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold @2xl:ml-[32px] text-white">{skillsTitles[activeSkill]}</h2>
        </div>
        <div className="skills-picker w-[325px] m-[10px] h-[325px] col-span-3 row-span-3 place-self-center isolate">
          <div className="rounded-full inset-6 absolute grid grid-cols-2 p-2 gap-2 rotate-45">
            {skills.map((skill) => (
              <button onClick={handleChangeSkill} key={skill.skill} className={clsx('rounded-[500px] skills-buttons', skill.buttonClassNames, activeSkill === skill.skill && 'skills-buttons-active')}>
                <p className={clsx('text-2xl text-white font-semibold tracking-wide w-min -rotate-45', skill.textClassNames)}>
                  {skill.skill}
                  <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === skill.skill ? 'h-[18px]' : 'h-[2px]')}></span>
                </p>
              </button>
            ))}
          </div>
        </div>
        {skillsLogos[activeSkill].map((skill, index) => {
          if (!skill.name) return <div key={index} className="h-[115px] w-24" />;

          return (
            <motion.div 
            key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col"
            initial={{opacity:0, translateY:50, translateX:50}}
            animate={{opacity:1, translateY:0, translateX:0}}
            transition={{duration:0.5, delay:0.1 * index}}
            >
              <div className="mt-auto">
                <img
                  src={skill.image}
                  className="object-contain rounded-md m-auto"
                  alt=""
                  height={64}
                  width={64}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
                <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">{skill.name}</h3>
              </div>
            </motion.div>
          );
        })}
       </div>
      </div>
    </div>
  );
}

export default Skills;
