import React from 'react';
import CardRelated from '../cardRelated';

type Theme = 'light' | 'dark';

interface ListRelatedProps {
  theme: Theme;
  author: any;
  content: any;
}

const ListRelated: React.FC<ListRelatedProps> = ({
  theme,
  author,
  content,
}) => {
  return (
    <div className="w-full flex justify-between">
      <CardRelated theme={theme} author={author} content={content} />
    </div>
  );
};

export default ListRelated;
