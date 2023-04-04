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
      </div>
    </div>
  );
};

export default About;
