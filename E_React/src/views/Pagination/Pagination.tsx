import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pagination.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Pagination: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-primary mb-3">My Blog</h1>
      <ul className="list-group mb-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentPosts.map(post => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))
        )}
      </ul>
      <PaginationNav
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

interface PaginationNavProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const PaginationNav: React.FC<PaginationNavProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPageGroup = Math.ceil(totalPages / 5);
  const currentPageGroup = Math.ceil(currentPage / 5);
  const startPage = (currentPageGroup - 1) * 5 + 1;
  const endPage = Math.min(currentPageGroup * 5, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {startPage > 1 && (
          <li className="page-item">
            <button onClick={() => paginate(startPage - 5)} className="page-link">
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        {endPage < totalPages && (
          <li className="page-item">
            <button onClick={() => paginate(startPage + 5)} className="page-link">
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
