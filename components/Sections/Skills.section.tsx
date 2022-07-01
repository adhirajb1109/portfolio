import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiPrisma,
  SiSupabase,
  SiNodedotjs,
  SiFastify,
  SiPostgresql,
  SiPython,
  SiFastapi
} from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className=" text-3xl font-bold text-white">Skills</p>
      <div className="responsive:overflow-x-auto responsive:overflow-y-auto responsive:whitespace-nowrap">
        <SiTypescript size="45" className="mr-6 mt-8 inline" />
        <SiReact size="45" className="mr-6 mt-8 inline" />
        <SiNextdotjs size="45" className="mr-6 mt-8 inline" />
        <SiTailwindcss size="45" className="mr-6 mt-8 inline" />
        <SiGraphql size="45" className="mr-6 mt-8 inline" />
        <SiPrisma size="45" className="mr-6 mt-8 inline" />
        <SiSupabase size="45" className="mr-6 mt-8 inline" />
        <SiNodedotjs size="45" className="mr-6 mt-8 inline" />
        <SiFastify size="45" className="mr-6 mt-8 inline" />
        <SiPostgresql size="45" className="mr-6 mt-8 inline" />
        <SiPython size="45" className="mr-6 mt-8 inline" />
        <SiFastapi size="45" className="mr-6 mt-8 inline" />
      </div>
    </div>
  );
};

export default Skills;
