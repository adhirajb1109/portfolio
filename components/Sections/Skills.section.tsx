import {
  BsArrowRightShort,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFastify,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiPython,
  SiFastapi,
} from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="mb-8 text-3xl font-bold text-white">Skills</p>
      <div className="overflow-x-auto overflow-y-auto whitespace-nowrap">
        <SiTypescript size="45" className="mr-6 inline" />
        <SiReact size="45" className="mr-6 inline" />
        <SiNextdotjs size="45" className="mr-6 inline" />
        <SiTailwindcss size="45" className="mr-6 inline" />
        <SiFastify size="45" className="mr-6 inline" />
        <SiPrisma size="45" className="mr-6 inline" />
        <SiPostgresql size="45" className="mr-6 inline" />
        <SiSupabase size="45" className="mr-6 inline" />
        <SiPython size="45" className="mr-6 inline" />
        <SiFastapi size="45" className="mr-6 inline" />
      </div>
    </div>
  );
};

export default Skills;
