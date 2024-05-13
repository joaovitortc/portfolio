import React from 'react';

interface SkillProps {
    name: string;
    src: string;
}

const Skill: React.FC<SkillProps> = ({ name, src }) => {
    return (
        <div className="mx-1">
           <img
                  src={src}
                  className="object-contain rounded-md m-auto"
                  alt=""
                  style={{
                    width: 42,
                    height: 42,
                  }}
                />
                
        </div>
    );
};

export default Skill;