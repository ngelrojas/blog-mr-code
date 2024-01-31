import React from 'react';
import Author from "../author";
import { ModalProps } from "../../types/utils.interface";

//TODO: begin mode dark for this component
const ModalWindow: React.FC<ModalProps> = ({ isOpen, onClose, content, theme }) => {

    return (
        <div
            aria-modal="true"
            className={`fixed z-50 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
            aria-labelledby="modal-title"
            role="dialog"
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
                <div
                    className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-3/4">
                    {/*modal header*/}
                    <div className={`border-b px-6 py-5 sm:px-8 sm:flex sm:flex-initial ${theme === 'light' ? 'bg-white' : 'bg-pages'}`}>
                        <button type="button" onClick={onClose}>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                            </svg>
                        </button>
                    </div>
                    {/* Modal content */}
                    <div className={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${theme === 'light' ? 'bg-white' : 'bg-pages'}`}>
                        <div className="sm:flex sm:items-start">
                            <div className="flex flex-col mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                                <div className="relative mt-4 flex flex-row items-center">
                                    <div className="text-sm leading-6 items-center grow">
                                        <Author author={content.author} theme={theme}/>
                                    </div>

                                    <img src={content.author.imageUrl} alt={content.author}
                                         className="h-20 w-20 rounded-full bg-gray-50 flex-none"/>
                                </div>
                                <div className="group relative mt-3 mb-3">
                                    <h3 className={`mt-3 text-lg font-semibold leading-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                        <p>
                                            <span className="absolute inset-0"/>
                                            {content.title}
                                        </p>
                                    </h3>
                                </div>
                                <div className="mt-3 mb-3">
                                    <audio id="my-audio">
                                        <source
                                            src="http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3"
                                            type="audio/mpeg"/>
                                        <source
                                            src="http://jPlayer.org/audio/ogg/Miaow-07-Bubble.ogg"
                                            type="audio/ogg"/>

                                        <a href="audiofile.mp3">audiofile.mp3</a>
                                    </audio>

                                    <div id="controls">

                                        <button id="play" className="-hidden">
                                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                            </svg>

                                        </button>
                                        <button id="pause" className="hidden">
                                            <svg fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
                                            </svg>

                                        </button>
                                    </div>
                                    <div id="progress">
                                        <div id="bar"></div>
                                    </div>
                                </div>
                                <div className="content-center mt-3 mb-3">
                                    <img src={content.bannerImg} alt={content.title} className="rounded"/>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{content.summary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div className={`px-4 py-3 sm:px-6 flex justify-between ${theme === 'light' ? 'bg-white' : 'bg-pages'}`}>
                        <a
                            href={content.href}
                            className="ml-4 text-sm font-semibold leading-5 text-blue-500"
                        >
                            READ MORE
                        </a>
                        <button
                            type="button"
                            className="mr-2 text-sm font-semibold leading-5 text-blue-500"
                            onClick={onClose}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
