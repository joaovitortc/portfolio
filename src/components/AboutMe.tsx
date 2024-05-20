import React from "react";
import Accounts from "../icons/accounts";
import GlowCard from "./GlowCard";
import SectionHeader from "./SectionHeader";
import Socials from "./Socials";

function AboutMe() {
  return (
    <div id="about" className="relative z-10 ml-3 mr-3 md:ml-16 md:mr-16 pt-4">
      <SectionHeader
        icon={
          <div className="relative">
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10 rounded-full blur shadow-lg"></span>
          </div>
        }
        title="About Me"
        description={
          <div>
            I&apos;m a{" "}
            <span className="text-about_me_green">software developer</span> with
            a passion for creating{" "}
            <span className="text-about_me_green">impactful solutions</span>
          </div>
        }
      />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
              João Vitor Topanotti da Cunha
            </h3>
            <p className="text-base leading-7 text-about_me_green">
              Full-stack Developer
            </p>
            <p className="mt-4 text-lg text-gray-500">
              I am deeply immersed in the intricate world of technology, constantly seeking to expand my knowledge and 
              refine my skills. 
            </p>
            <p className="mt-4 text-lg text-gray-500">
            My journey is defined by a relentless pursuit of excellence and a boundless curiosity that drives me to explore new horizons and embrace emerging trends. 

            </p>
          </div>
          <div className="flex-none mx-auto">
            <img
              className="rounded-full object-cover"
              src="/me.jpeg"
              alt=""
              height={208}
              width={208}
            />
          </div>
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div className="flex-grow">
              <div>
                <h4 className="text-about_me_green mb-1">| Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap flex-col gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Portuguese</p> -{" "}
                      <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> -{" "}
                      <p className="text-gray-500">Fluent</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Spanish</p> -{" "}
                      <p className="text-gray-500">Intermediate</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">French</p> -{" "}
                      <p className="text-gray-500">Beginner</p>
                    </div>
                  </div>
                </div>
              </div>
              <Socials />
            </div>
            <div>
              <GlowCard
                className="hover:shadow-about_me_green/90"
                glowClassName="from-[#6bc072] to-[#6bc072]"
              >
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <img
                      className="rounded-2xl object-fill"
                      src="/seneca.png"
                      alt=""
                      width={144}
                      height={144}
                    />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                      Computer Programming and Analysis
                    </h3>
                    <p className="text-base leading-7 text-about_me_green">
                      Seneca Polytechnic
                    </p>
                    <br />

                    <p className="text-sm font-semibold leading-8 tracking-tight text-white">
                      GPA: <span className="text-about_me_green">4.0</span>/4.0
                    </p>
                    <div>
                      <p className="text-sm font-semibold leading-8 tracking-tight text-white">
                        <i id="trophy" className="fa fa-trophy"></i> President's
                        Honor's List (
                        <span className="text-about_me_green">3x</span>)
                      </p>
                      <p className="ml-4 text-gray-500 text-xs p-0">
                        Recognition of outstanding academic achievement
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
