import React, { useContext, useEffect, useRef } from 'react';
import { WebSiteLayout } from '../../layouts/webSite';
// import { useParams } from "react-router-dom";
import Author from '../../components/author';
import CategoryTime from '../../components/categoryTime';
import { ThemeContext } from '../../themeContext';
import CarrouselRelated from '../../components/carrouselRelated';
import CommentForm from '../../components/commentForm';
import CardComments from '../../components/cardComment';
import SocialNetworks from '../../components/socialNetworks';
// import AsideContent from '../../components/asideContent';

//TODO: in the commentForm, I need pass the url to go to the backend, in each commentForm.
//TODO: the carrousel component should be a responsive component,
// the component aside is disable and chatbot component is disable
// SUGGESTION: the arrows of the carrousel should be up or down, when is in mobile

const currentAuthor = {
  name: 'John Doe Current',
  role: 'Software Engineer',
  href: 'https://www.johndoe.com',
  imageUrl:
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  socialMedia: [
    {
      href: 'https://www.facebook.com/johndoe',
      name: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/johndoe',
      name: 'Instagram',
    },
    {
      href: 'https://www.twitter.com/johndoe',
      name: 'Twitter',
    },
    {
      href: 'https://www.likedin.com/johndoe',
      name: 'LinkedIn',
    },
  ],
};

const currentContent = {
  title: 'Boost your conversion rate, in the era of CURRENT CONTENT',
  bannerImg: 'https://picsum.photos/seed/picsum/700/300',
  description:
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n' +
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n' +
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n' +
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n' +
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n' +
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n' +
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n' +
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.\n',
};

const categoryTime = {
  date: 'Mar 16, 2021',
  datetime: '2020-03-10',
  category: { title: 'React-JS', slug: 'react-js' },
};

const relatedPost = [
  {
    title: 'Boost your conversion rate, in the era of AI MORE 1',
    bannerImg: 'https://picsum.photos/seed/picsum/700/300',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    summary: '',
    href: 'https://www.johndoe.com',
    author: {
      name: 'John Doe 1',
      role: 'Software Engineer',
      href: 'https://www.johndoe.com',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Boost your conversion rate, in the era of AI MORE 2',
    bannerImg: 'https://picsum.photos/seed/picsum/700/300',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    summary: '',
    href: 'https://www.johndoe.com',
    author: {
      name: 'John Doe 2',
      role: 'Software Engineer 2',
      href: 'https://www.johndoe.com',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Boost your conversion rate, in the era of AI MORE 3',
    bannerImg: 'https://picsum.photos/seed/picsum/700/300',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    summary: '',
    href: 'https://www.johndoe.com',
    author: {
      name: 'John Doe 3',
      role: 'Software Engineer',
      href: 'https://www.johndoe.com',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Boost your conversion rate, in the era of AI MORE 4',
    bannerImg: 'https://picsum.photos/seed/picsum/700/300',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    summary: '',
    href: 'https://www.johndoe.com',
    author: {
      name: 'John Doe 4',
      role: 'Software Engineer',
      href: 'https://www.johndoe.com',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Boost your conversion rate, in the era of AI MORE 5',
    bannerImg: 'https://picsum.photos/seed/picsum/700/300',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    summary: '',
    href: 'https://www.johndoe.com',
    author: {
      name: 'John Doe 5',
      role: 'Software Engineer',
      href: 'https://www.johndoe.com',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const comments = [
  {
    name: 'John Doe 1',
    date: 'March 16, 2021',
    img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    comment:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    nestedComments: [
      {
        name: 'John Doe 1 nested',
        date: 'March 16, 2021',
        img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        comment:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      },
      {
        name: 'John Doe 2 nested',
        date: 'March 16, 2020',
        img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        comment:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      },
    ],
  },
  {
    name: 'John Doe 2',
    date: 'March 16, 2021',
    img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    comment:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    nestedComments: [
      {
        name: 'John Doe 2 nested',
        date: 'March 16, 2021',
        img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        comment:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      },
    ],
  },
  {
    name: 'John Doe 3',
    date: 'March 16, 2021',
    img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    comment:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
];

const Description: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error('useThemeContext must be used within a ThemeProvider');
  const { theme } = themeContext;
  // const { slug, description } = useParams();
  const postRelatedRef = useRef<HTMLDivElement | null>(null);
  const asideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentPostRelatedRef = postRelatedRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (asideRef.current) {
          if (entry.isIntersecting) {
            asideRef.current.classList.add(
              'hidden',
              'transition',
              'ease-in-out',
              'duration-700',
            );
          } else {
            asideRef.current.classList.remove(
              'hidden',
              'transition',
              'ease-in-out',
              'duration-700',
            );
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (currentPostRelatedRef) {
      observer.observe(currentPostRelatedRef);
    }

    return () => {
      if (currentPostRelatedRef) {
        observer.unobserve(currentPostRelatedRef);
      }
    };
  }, [postRelatedRef, asideRef]);

  return (
    <WebSiteLayout>
      <div className="container pt-28">
        <div className="flex flex-row">
          <div className="mx-auto max-w-2xl py-5 sm:py-10 lg:px-12 basis-1/2">
            <div className="relative mt-4 flex flex-row items-center">
              <div className="text-sm leading-6 items-center grow">
                <Author author={currentAuthor} theme={theme} />
                <CategoryTime categoryTime={categoryTime} theme={theme} />
              </div>

              <img
                src={currentAuthor.imageUrl}
                alt=""
                className="h-16 w-16 rounded-full bg-gray-50 flex-none"
              />
            </div>

            <div className="mrcode-icon-social-networks py-5">
              <SocialNetworks
                socialMedia={currentAuthor.socialMedia}
                theme={theme}
              />
            </div>

            <div
              className={`description container py-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              <div className="description-title py-4">
                <h1>{currentContent.title}</h1>
              </div>
              <div className="description-banner py-4">
                <img
                  src={currentContent.bannerImg}
                  alt={currentContent.title}
                  className="rounded aspect-custom w-full h-96 object-cover object-center"
                />
              </div>
              <div className="description-content py-4">
                <p>{currentContent.description}</p>
              </div>
            </div>
          </div>

          <div ref={asideRef} className="flex justify-end">
            {/*<AsideContent theme={theme} />*/}
          </div>
        </div>

        <div
          ref={postRelatedRef}
          className={`post-related-mrcode w-full ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          <div className="carousel-post-mrcode py-4 flex md:flex-col sm:flex-row">
            <div className="mx-5 grid justify-center md:w-auto sm:w-auto sm:justify-items-center">
              <h1 className="ml-20 pl-2 my-4 md:w-94 md:flex md:justify-start sm:w-62">
                Related Post
              </h1>
              <CarrouselRelated theme={theme} content={relatedPost} />
            </div>
          </div>
          <section className="comments-mrcode w-full my-20">
            <CommentForm theme={theme} />

            <div className="comment-list py-4 flex justify-center">
              <div className="comment-list-wrapper flex flex-col w-8/12">
                <div className="comment-list-item py-20 flex flex-col justify-center">
                  <h1 className="">Comments</h1>

                  <div className="comment-item-nested-list my-3 w-10/12">
                    {comments.map((author, index) => (
                      <div key={index}>
                        <CardComments author={author} theme={theme} />
                        {author.nestedComments &&
                          author.nestedComments.map(
                            (nestedComment, nestedIndex) => (
                              <div
                                key={nestedIndex}
                                className="comment-item-nested border-l-2 rounded-l border-l-blue-500  ml-8 w-10/12"
                              >
                                <CardComments
                                  author={nestedComment}
                                  theme={theme}
                                />
                              </div>
                            ),
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </WebSiteLayout>
  );
};

export default Description;
