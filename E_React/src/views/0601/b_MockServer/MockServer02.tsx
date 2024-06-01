import React, { useEffect, useRef, useState } from 'react'
import api from './services/api';

interface Post {
  id: number;
  title: string;
  author: string;
}

export default function MockServer02() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({
    title: '',
    author: ''
  });
  const postIdRef = useRef<number>(0);

  useEffect(() => {
    const fetchPosts = async () => {
      // api변수에 axios를 사용한 메서드가 기본 경로로 저장되어 있음
      const response = await api.get('/posts');
      setPosts(response.data);

      if (response.data.length > 0) {
        postIdRef.current = response.data[response.data.length - 1].id;
      }
    };

    fetchPosts();
  }, []);

  const handleAddPost = async () => {
    const id: number = postIdRef.current + 1;

    const response = await api.post('/posts', {
      id,
      title: newPost.title,
      author: newPost.author
    });

    setPosts([...posts, response.data]);
    postIdRef.current = id;
    setNewPost({ title: '', author: '' })
  };

  const handleUpdatePost = async (id: number) => {

  };

  const hanldeDeletePost = async (id: number) => {

  };

  return (
    <div>
      <h4>Posts 게시판</h4>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title} by {post.author}
            <button onClick={() => handleUpdatePost(post.id)}>Update</button>
            <button onClick={() => hanldeDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <input 
        type="text"
        placeholder='Title'
        value={newPost.title}
        onChange={e => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input 
        type="text"
        placeholder='Author'
        value={newPost.author}
        onChange={e => setNewPost({ ...newPost, author: e.target.value })}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  )
}
