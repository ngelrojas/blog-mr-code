import React, { useState } from 'react';

interface CommentFormProps {
  theme: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ theme }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const commentValue = formData.get('comment-box');
    if (typeof commentValue === 'string') {
      setComment(commentValue);
    }
    console.log(comment);
  };

  return (
    <div
      className={`wrapper-comment-box py-4 flex justify-center ${theme === 'light' ? 'text-black' : 'text-black'}`}
    >
      <form
        action=""
        className="flex flex-col basis-1/2"
        onSubmit={handleSubmit}
      >
        <textarea
          name="comment-box"
          id="comment-box"
          rows={6}
          className="my-2 comment-box p-2 rounded border border-gray-200"
          placeholder="Comment here"
        ></textarea>
        <div className="comment-data flex md:flex-row sm:flex-col">
          <input
            type="email"
            id="email"
            className="basis-1/2 my-2 p-1 rounded border border-gray-200"
            placeholder="Email"
          />
          <input
            type="text"
            id="first-name"
            className="basis-1/2 my-2 p-1 md:mx-2 rounded border border-gray-200"
            placeholder="First Name"
          />
          <input
            type="text"
            id="last-name"
            className="basis-1/2 my-2 p-1 rounded border border-gray-200"
            placeholder="Last Name"
          />
        </div>
        <button
          type="submit"
          className="my-2 p-1 rounded border border-gray-200 bg-blue-400 text-white"
        >
          Comment
        </button>
      </form>
    </div>
  );
};
export default CommentForm;
