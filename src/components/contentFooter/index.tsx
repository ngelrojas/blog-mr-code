import React from 'react';
import MrCodeLogoLight from '../logo/lightLogo';
import MrCodeLogo from '../logo';
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { ContentFooterProps } from '../../types/utils.interface';

const ContentFooter: React.FC<ContentFooterProps> = ({ theme }) => {
  const renderLogo = () => {
    if (theme === 'light') {
      return <MrCodeLogoLight theme={theme} />;
    }
    return <MrCodeLogo theme={theme} />;
  };

  return (
    <footer className="relative pb-6 md:min-w-screen-md sm:min-w-screen-sm">
      <div className="footer-oval">
        <div
          className={`custom-shape-divider-top-1705452502 ${theme === 'light' ? 'bg-footer-light' : 'bg-footer-dark'}`}
        >
          <svg
            data-name="Layer 1"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={`${theme === 'light' ? 'shape-fill' : 'shape-fill-dark'}`}
            ></path>
          </svg>
        </div>

        {/*check code below because it's not working, I mean is not centered*/}
        <div className="relative">
          <div
            className={`absolute top-72 w-full md:w-11/12 pl-4 md:pl-40 ${theme === 'light' ? 'text-black' : 'text-white'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="grid grid-rows-2">
                <div className="justify-items-center">{renderLogo()}</div>
                <ul
                  className={`flex gap-4 md:gap-20 items-center ${theme === 'light' ? 'text-white' : 'text-white'}`}
                >
                  <li>
                    <a href="#">
                      <FaFacebook size={25} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaXTwitter size={20} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin size={25} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube size={35} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-between items-end justify-items-end">
                <form className="pt-4 md:pt-20 inline-flex float-right w-full ">
                  <input
                    className="text-blue-950 ml-4 md:ml-28 w-9/12 sm:w-1/3 mr-2 md:mr-6 px-2 md:px-4 py-1 md:py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Email"
                  />
                  <button className=" w-24 md:w-40 px-2 md:px-4 py-1 md:py-2 bg-blue-500 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Subscribe
                  </button>
                </form>
                <div
                  className={`pl-4 md:pl-28 w-full text-sm mt-2 ${theme === 'light' ? 'text-white' : 'text-white'}`}
                >
                  Get our newsletter weekly
                </div>
              </div>
            </div>
          </div>
          <div className="absolute grid top-96 w-full mt-20">
            <h1
              className={`text-center ${theme === 'light' ? 'text-white' : 'text-white'}`}
            >
              Copyright 2024
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContentFooter;
