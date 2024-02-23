import React, { useState } from 'react';
import CardRelated from '../cardRelated';
import {
  AuthorProps,
  ContentTypeI,
  ListRelatedProps,
} from '../../types/utils.interface';

const CarrouselRelated: React.FC<ListRelatedProps> = ({ theme, content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const cards = Array.isArray(content)
    ? content.map((pair: ContentTypeI, index: number) => (
        <CardRelated
          key={index}
          theme={theme}
          author={content[index].author as AuthorProps}
          content={pair}
        />
      ))
    : [];

  const displayCards = cards.slice(currentSlide * 3, currentSlide * 3 + 3);

  const totalSets = Math.ceil(cards.length / 3);

  const handleNext = () => {
    setAnimationClass('slide-out');
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % totalSets);
      setAnimationClass('slide-in');
    }, 500);
  };

  const handlePrev = () => {
    setAnimationClass('slide-out');
    setTimeout(() => {
      setCurrentSlide((currentSlide - 1 + totalSets) % totalSets);
      setAnimationClass('slide-in');
    }, 500);
  };

  return (
    <div className="flex flex-row">
      <div className="flex items-center">
        <button
          type="button"
          className="grid justify-items-center items-center py-4 text-white rounded-full w-20 h-20"
          onClick={handlePrev}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-blue-500 transition-all ease-in-out delay-150 duration-300 hover:pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className={`flex w-990 ${animationClass}`}>{displayCards}</div>
      <div className="flex items-center">
        <button
          type="button"
          className="grid justify-items-center items-center py-4 text-white rounded-full w-20 h-20"
          onClick={handleNext}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-blue-500 transition-all ease-in-out delay-150 duration-300 hover:pl-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarrouselRelated;
