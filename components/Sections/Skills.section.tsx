import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="font-sen my-16 px-3 text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>
      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">TypeScript</span>
          &nbsp;as my Main Language
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Next.js</span>
          &nbsp;as my Frontend Framework
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS </span>
          &nbsp;as my CSS Framework
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Express.js</span>
          &nbsp;as my Backend Framework
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Prisma</span>
          &nbsp;as my ORM
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">PostgreSQL</span>
          &nbsp;as my Database
        </p>
      </div>
      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">Python</span>,{" "}
        <span className="text-white">FastAPI</span>,{" "}
        <span className="text-white">Deta</span>,{" "}
        <span className="text-white">Supabase</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
