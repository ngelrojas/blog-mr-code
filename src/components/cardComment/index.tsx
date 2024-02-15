const CardComments = () => {
  return (
    <div className="comment-item my-5 w-10/12">
      <div className="comment-item-header">
        <img
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="h-16 w-16 rounded-full bg-gray-50 flex-none"
        />
        <div className="comment-item-header-data">
          <h1>John Doe</h1>
          <p>March 16, 2021</p>
        </div>
      </div>
      <div className="comment-item-content">
        <p>
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti
          dicta.
        </p>
      </div>
    </div>
  );
};

export default CardComments;
