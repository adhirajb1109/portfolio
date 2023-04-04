import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="products">
      <p className="text-3xl font-bold text-white">Products</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
          <div
            className="h-[9rem] w-[16rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Dreamweb</p>
              <p className="my-1">
                Build beautiful websites with Notion, Airtable and Google Sheets
              </p>
            </div>
          </div>
          <div
            className="h-[9rem] w-[16rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Dive</p>
              <p>
                Your one-stop solution for organizing your life. Be it your
                tasks, project, or startup.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
