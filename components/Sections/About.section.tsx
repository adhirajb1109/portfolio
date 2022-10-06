import type { NextComponentType } from "next";

import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Adhiraj Bhatia</p>
        <p className="mt-2 text-lg text-gray-300">
          A teen developer building unique and impactful products
        </p>
        <p className="mt-4 text-gray-400">
          <span>
            Passionate about tech, space, and building products with a purpose
          </span>
        </p>
        <Link href="https://blog.adhiraj.site/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
