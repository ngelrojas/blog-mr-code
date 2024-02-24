import React from 'react';
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SocialMediaProps } from '../../types/utils.interface.ts';

interface SocialNetworksProps {
  theme: string;
  socialMedia?: SocialMediaProps[];
}

const SocialNetworks: React.FC<SocialNetworksProps> = ({
  theme,
  socialMedia,
}) => {
  return (
    <div className="grid">
      <ul
        className={`flex gap-4 md:gap-5 items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}
      >
        <li>
          <a href={`${socialMedia?.[0].href}`}>
            <FaFacebook size={25} />
          </a>
        </li>
        <li>
          <a href={`${socialMedia?.[1].href}`}>
            <FaXTwitter size={20} />
          </a>
        </li>
        <li>
          <a href={`${socialMedia?.[2].href}`}>
            <FaLinkedin size={25} />
          </a>
        </li>
        <li>
          <a href={`${socialMedia?.[3].href}`}>
            <FaYoutube size={35} />
          </a>
        </li>
        <li>
          <div className="mr-code-player grid items-center">
            <audio id="my-audio">
              <source
                src="http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3"
                type="audio/mpeg"
              />
              <source
                src="http://jPlayer.org/audio/ogg/Miaow-07-Bubble.ogg"
                type="audio/ogg"
              />

              <a href="audiofile.mp3">audiofile.mp3</a>
            </audio>

            <div id="controls">
              <button id="play" className="-hidden flex justify-items-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </button>
              <button id="pause" className="hidden flex justify-items-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              </button>
            </div>
            <div id="progress">
              <div id="bar"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetworks;
