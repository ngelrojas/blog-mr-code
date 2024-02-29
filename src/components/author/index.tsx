import React from 'react';
import { AuthorPropsI } from '../../types/utils.interface';

const Author: React.FC<AuthorPropsI> = ({ author, theme }) => {
  return (
    <div className="relative">
      <p
        className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}
      >
        <a href={author?.href}>
          <span className="absolute inset-0" />
          {author?.name}
        </a>
      </p>
      <p className={`${theme === 'light' ? 'text-black' : 'text-gray-400'}`}>
        {author?.role}
      </p>
    </div>
  );
};
export default Author;
