import type { NextPage } from "next";

import Image from "next/image";
import { useRouter } from "next/router";

const ErrorPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col justify-center ">
        <Image
          src="/assets/404.svg"
          width="800"
          height="400"
          alt="404 illustration"
        />
        <div className="flex w-full flex-col items-center justify-center">
          <p className="font-jost text-2xl font-bold text-neutral-50 sm:text-3xl">
            Whoops! Lost in Space?
          </p>
          <p className="text-md text-center font-sen font-medium text-neutral-100 sm:text-lg mt-2">
            The page you&apos;re looking for isn&apos;t found :( <br />
            We suggest you to go back home
          </p>
          <button
            className="text-md mt-6 rounded-md bg-white px-4 py-2 font-jost font-medium text-black duration-100 hover:bg-neutral-100 hover:text-zinc-900 sm:px-6 sm:py-3 sm:text-lg"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
