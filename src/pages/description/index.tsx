import React, {useContext, useEffect, useRef} from "react";
// import { useParams } from "react-router-dom";
import Author from "../../components/author";
import CategoryTime from "../../components/categoryTime";
import {ThemeContext} from "../../themeContext";
import {FaFacebook, FaLinkedin, FaXTwitter, FaYoutube} from "react-icons/fa6";

import CarrouselRelated from "../../components/carrouselRelated";

// TODO: create a description page
// no permanent interface
// const theme = 'light';
const currentAuthor = {
    name: 'John Doe Current',
    role: 'Software Engineer',
    href: 'https://www.johndoe.com',
    imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const currentContent = {
    title: 'Boost your conversion rate, in the era of CURRENT CONTENT',
    bannerImg: 'https://picsum.photos/seed/picsum/700/300',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
}

const author = [
    {
    name: 'John Doe 1',
    role: 'Software Engineer',
    href: 'https://www.johndoe.com',
    imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'John Doe 2',
        role: 'Software Engineer',
        href: 'https://www.johndoe.com',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'John Doe 3',
        role: 'Software Engineer',
        href: 'https://www.johndoe.com',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'John Doe 4',
        role: 'Software Engineer',
        href: 'https://www.johndoe.com',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'John Doe 5',
        role: 'Software Engineer 5',
        href: 'https://www.johndoe.com',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const categoryTime = {
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'React-JS', slug: 'react-js' }

}

const content = [
    {
        title: 'Boost your conversion rate, in the era of AI MORE 1',
        bannerImg: 'https://picsum.photos/seed/picsum/700/300',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    },
    {
        title: 'Boost your conversion rate, in the era of AI MORE 2',
        bannerImg: 'https://picsum.photos/seed/picsum/700/300',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    },
    {
        title: 'Boost your conversion rate, in the era of AI MORE 3',
        bannerImg: 'https://picsum.photos/seed/picsum/700/300',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    },
    {
        title: 'Boost your conversion rate, in the era of AI MORE 4',
        bannerImg: 'https://picsum.photos/seed/picsum/700/300',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    },
    {
        title: 'Boost your conversion rate, in the era of AI MORE 5',
        bannerImg: 'https://picsum.photos/seed/picsum/700/300',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    },
]

// TODO: 1 fix the aside, because when down the page the aside cover the the post related. => DONE
// TODO: 3 create a carrousel for the post related. => DONE
// TODO: 4 then continue creating the comments section.
// TODO: 5 refactor aside to a component.
const Description:React.FC = () => {
    const themeContext = useContext(ThemeContext);
    if(!themeContext) throw new Error('useThemeContext must be used within a ThemeProvider');
    const {theme} = themeContext;
    // const { slug, description } = useParams();
    const postRelatedRef = useRef<HTMLDivElement | null>(null);
    const asideRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (asideRef.current) {
                    if (entry.isIntersecting) {
                        asideRef.current.classList.add('hidden', 'transition', 'ease-in-out', 'duration-700');
                    } else {
                        asideRef.current.classList.remove('hidden', 'transition', 'ease-in-out', 'duration-700');
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        if (postRelatedRef.current) {
            observer.observe(postRelatedRef.current);
        }

        return () => {
            if (postRelatedRef.current) {
                observer.unobserve(postRelatedRef.current);
            }
        };
    }, []);

    return(
        <div className="container pt-28">
            <div className="flex flex-row">

                <div className="mx-auto max-w-2xl py-5 sm:px-10 lg:px-12 basis-1/2">

                    <div className="relative mt-4 flex flex-row items-center">
                        <div className="text-sm leading-6 items-center grow">
                            <Author author={currentAuthor} theme={theme}/>
                            <CategoryTime categoryTime={categoryTime} theme={theme}/>
                        </div>

                        <img src={currentAuthor.imageUrl} alt=""
                             className="h-16 w-16 rounded-full bg-gray-50 flex-none"/>
                    </div>

                    <div className="mrcode-icon-social-networks py-5">
                        <div className="grid">
                            <ul className={`flex gap-4 md:gap-5 items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                <li><a href="/facebook"><FaFacebook size={25}/></a></li>
                                <li><a href="/twitter"><FaXTwitter size={20}/></a></li>
                                <li><a href="/linkedin"><FaLinkedin size={25}/></a></li>
                                <li><a href="/youtube"><FaYoutube size={35}/></a></li>
                                <li>
                                    <div className="mr-code-player grid items-center">
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

                                            <button id="play" className="-hidden flex justify-items-center">
                                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                     className={`w-6 h-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                                                </svg>

                                            </button>
                                            <button id="pause" className="hidden flex justify-items-center">
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
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="description container py-5">
                        <div className="description-title py-4">
                            <h1>{currentContent.title}</h1>
                        </div>
                        <div className="description-banner py-4">
                            <img src={currentContent.bannerImg} alt={currentContent.title} className="rounded"/>
                        </div>
                        <div className="description-content py-4">
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                        </div>
                        <div className="description-banner py-4">
                            <img src={currentContent.bannerImg} alt={currentContent.title} className="rounded"/>
                        </div>
                        <div className="description-content py-4">
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                            <p>{currentContent.description}</p>
                        </div>

                    </div>
                </div>

                <div className="flex justify-end">
                    <aside ref={asideRef} className="fixed z-50 basis-1/6 w-1/6">
                            <div className="py-5 border-b aside-header">
                                <a href="/home">
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="aside-content">
                                <h1 className="py-3 text-2xl"><p className="underline">Content</p></h1>
                                <ul className="ml-2">
                                    <li className="border-l-2 border-l-gray-500 pl-1 my-2 hover:text-blue-400 hover:border-l-blue-500">
                                        <a href="#"
                                           className="transition-all ease-in-out delay-150 duration-300 hover:pl-2">This
                                            is
                                            a title a little large what you think more lettes one</a></li>
                                    <li className="border-l-2 border-l-gray-500 pl-1 my-2 hover:text-blue-400 hover:border-l-blue-500">
                                        <a href="#"
                                           className="transition-all ease-in-out delay-150 duration-300 hover:pl-2">This
                                            is
                                            a title a little large what you think more letters?</a></li>
                                    <li className="border-l-2 border-l-gray-500 pl-1 my-2 hover:text-blue-400 hover:border-l-blue-500">
                                        <a href="#"
                                           className="transition-all ease-in-out delay-150 duration-300 hover:pl-2">Three
                                            title</a></li>
                                </ul>
                            </div>
                            <div className="my-5 aside-footer">
                                <h1>player</h1>
                            </div>
                        </aside>
                </div>

            </div>
            <div ref={postRelatedRef} className="post-related-mrcode w-full">
                <div className="carousel-post-mrcode py-4 flex flex-col">
                    <h1 className="ml-7 my-4">Post Related</h1>
                    <div className="mx-5 grid justify-center">
                        <CarrouselRelated theme={theme} author={author} content={content}/>
                    </div>
                </div>
                <section className="comments-mrcode">

                    <div className="comment-editor py-4">
                        comment editor
                    </div>

                    <div className="comment-list py-4">
                        comment list
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Description;