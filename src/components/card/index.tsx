import React, { useState } from 'react';
import ModalWindow from '../modalWindow';
import CategoryTime from '../categoryTime';
import Author from '../author';
import DescriptionTitle from '../descriptionTitle';
import { CardPropsI } from '../../types/utils.interface.ts';

const Card: React.FC<CardPropsI> = ({ _posts, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fade-in-top rounded card-spaces mt-16 ${theme === 'light' ? 'border-cards-light bg-white text-black' : 'bg-cards border-cards text-white'}`}
      >
        <div className="mx-auto  px-5">
          <div className="mx-auto grid">
            <article className="flex flex-col">
              <div className="relative mt-4 flex flex-row items-center">
                <div className="text-sm leading-6 items-center grow">
                  <Author author={_posts.author} theme={theme} />
                  <CategoryTime categoryTime={_posts} theme={theme} />
                </div>

                <img
                  src={_posts.author.imageUrl}
                  alt=""
                  className="h-20 w-20 rounded-full bg-gray-50 flex-none"
                />
              </div>

              <DescriptionTitle desTitle={_posts} theme={theme} />

              <div className="container flex justify-between mt-7 mb-3">
                <button
                  type="button"
                  id={`card-post-${_posts.id.toString()}`}
                  className={`text-sm font-semibold leading-6 ${theme === 'light' ? 'text-light' : 'text-primary-dark'}`}
                  onClick={handleOpenModal}
                >
                  SUMMARY
                </button>
                <a
                  href={`/category/${_posts.category.slug}/${_posts.slug}`}
                  className={`text-sm font-semibold leading-6 ${theme === 'light' ? 'text-light' : 'text-primary-dark'}`}
                >
                  READ MORE
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={handleCloseModal}
        content={_posts}
        theme={theme}
      />
    </>
  );
};

export default Card;
