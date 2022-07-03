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
  SiFastapi,
} from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className=" text-3xl font-bold text-white">Skills</p>
      <div className="responsive:overflow-x-auto responsive:overflow-y-auto responsive:whitespace-nowrap">
        <a href="https://www.typescriptlang.org/">
          <SiTypescript size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://reactjs.org/">
          <SiReact size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://nextjs.org/">
          <SiNextdotjs size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://tailwindcss.com/">
          <SiTailwindcss size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://graphql.org/">
          <SiGraphql size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://www.prisma.io/">
          <SiPrisma size="45" className="mr-6 mt-8 inline" />
        </a>{" "}
        <a href="https://www.supabase.com/">
          <SiSupabase size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://nodejs.org">
          <SiNodedotjs size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://fastify.io/">
          <SiFastify size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://www.postgresql.org/">
          <SiPostgresql size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://www.python.org/">
          <SiPython size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://fastapi.tiangolo.com/">
          <SiFastapi size="45" className="mr-6 mt-8 inline" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
