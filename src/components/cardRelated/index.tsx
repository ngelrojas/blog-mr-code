import Author from '../author';
import React from 'react';
import { AuthorProps, ContentTypeI } from '../../types/utils.interface';

type Theme = 'light' | 'dark';

interface CardRelatedProps {
  theme: Theme;
  author: AuthorProps;
  content: ContentTypeI;
}

const CardRelated: React.FC<CardRelatedProps> = ({
  theme,
  author,
  content,
}) => {
  return (
    <div
      className={`related-card-mrcode mx-1 border sm:w-auto w-4/12 sm:my-2 rounded p-1 ${theme === 'light' ? 'bg-gray-50' : 'bg-cards'}`}
    >
      <div className="card-header flex justify-between p-1">
        <div className="author">
          <Author author={author} theme={theme} />
        </div>
        <div className="image-author">
          <img
            src={author?.imageUrl}
            alt={author?.name}
            className="h-10 w-10 rounded-full bg-gray-50 flex-none"
          />
        </div>
      </div>

      <div className="card-banner my-2">
        <img
          src={content?.bannerImg}
          alt={content?.title}
          className="w-full h-40 rounded"
        />
      </div>
      <div
        className={`card - content my-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
      >
        <h1>
          <a href="#">{content?.title}</a>
        </h1>
      </div>
    </div>
  );
};

export default CardRelated;
