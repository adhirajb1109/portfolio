import type { NextComponentType } from "next";

import {
  FaDiscord,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>
      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<MdEmail />} url="mailto:adhirajb1109@gmail.com" />
        <Icon
          icon={<AiOutlineGithub />}
          url="https://github.com/adhirajb1109"
        />
        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/adhirajb1109"
        />
        <Icon
          icon={<FaDiscord />}
          url="https://discord.com/users/876685465183473675"
        />
      </div>
    </div>
  );
};

export default Contact;
