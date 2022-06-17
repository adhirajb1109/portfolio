import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>
      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Next.js</span>
          &nbsp;as my Frontend Framework
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">JavaScript & TypeScript</span>
          &nbsp;as my main languages
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS </span>
          &nbsp;as my CSS framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Figma</span>
          &nbsp;as my designing tool
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Express.js</span>
          &nbsp;as my API framework
        </p>
      </div>
      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">Prisma</span>,{" "}
        <span className="text-white">PostgreSQL</span>,{" "}
        <span className="text-white">Python</span>,{" "}
        <span className="text-white">FastAPI</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
