import { useEffect, useState } from 'react';
import Card from '../card';
import { ListCardProps, Post } from '../../types/utils.interface';
import PaginationBtn from '../paginationBtn';

const postsPerPage = 3;

const ListCard: React.FC<ListCardProps> = ({ __posts, theme }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from an API
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      // const data = await response.json();
      // setPosts(data);
      setPosts(__posts);
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="card-list">
      {currentPosts.map((post: Post) => (
        <Card _posts={post} theme={theme} key={post.id} />
      ))}

      <PaginationBtn
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        posts={posts}
      />
    </div>
  );
};
export default ListCard;
