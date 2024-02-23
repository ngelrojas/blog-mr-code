import { Author } from '../../types/utils.interface';
import { useState } from 'react';
import GenericModal from '../genericModal';
import CommentForm from '../commentForm';

interface CardsCommentsProps {
  theme: string;
  author: Author;
}

const CardComments: React.FC<CardsCommentsProps> = ({ author, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="comment-item border p-3 rounded my-5 w-10/12">
      <div className="comment-item-header">
        <img
          src={author?.img}
          alt={author?.name}
          className="h-16 w-16 rounded-full bg-gray-50 flex-none"
        />
        <div className="comment-item-header-data">
          <h1>{author?.name}</h1>
          <p>{author?.date}</p>
        </div>
      </div>
      <div className="comment-item-content">
        <p>{author?.comment}</p>
      </div>
      <div className="comment-item-footer flex justify-end">
        <button className="text-blue-400" onClick={handleOpenModal}>
          Reply
        </button>
      </div>
      <GenericModal isOpen={isOpen} onClose={handleCloseModal} theme={theme}>
        <CommentForm theme={theme} />
      </GenericModal>
    </div>
  );
};

export default CardComments;
