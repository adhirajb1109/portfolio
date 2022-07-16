import type { NextComponentType } from "next";
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

const Skills: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills</p>
      <div className="touch:overflow-x-auto touch:overflow-y-auto touch:whitespace-nowrap">
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTypescript size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiReact size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <SiNextdotjs size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTailwindcss size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://graphql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGraphql size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPrisma size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://www.supabase.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiSupabase size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
          <SiNodedotjs size="45" className="mr-6 mt-8 inline" />
        </a>
        <a href="https://fastify.io/" target="_blank" rel="noopener noreferrer">
          <SiFastify size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPostgresql size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPython size="45" className="mr-6 mt-8 inline" />
        </a>
        <a
          href="https://fastapi.tiangolo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFastapi size="45" className="mr-6 mt-8 inline" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
