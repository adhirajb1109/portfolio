import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>
      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon
          icon={<AiOutlineGithub />}
          url="https://github.com/adhirajb1109"
        />
        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/adhirajb1109"
        />
        <Icon icon={<MdEmail />} url="mailto:adhirajb1109@gmail.com" />
        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/31l2fev6wn2mtzclbpvzxis3x77q"
        />
      </div>
    </div>
  );
};

export default Contact;
