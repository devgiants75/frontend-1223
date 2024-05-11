import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Board.module.css';
import useInput2 from '../hooks/useInput2';

//& 게시판 프로젝트 구성
// 1. 구현할 기능 목록
// : 게시판 목록 조회
// : 게시물 생성
// : 게시물 조회 (클릭 시 세부 정보 확인)
// : 게시물 수정
// : 게시물 삭제

// 2. 게시물(프로젝트 데이터) 구성
// : id(게시물 고유 코드)
// : author(게시물 작성자)
// : date(게시물 작성일자)
// : title(게시물 제목)
// : content(게시물 내용)

//! 게시물 타입 정의
type PostType = {
  id: number;
  author: string;
  date: string;
  title: string;
  content: string;
}

//! 커스텀 훅 (posts 데이터 가져오기 - 가상의 posts 서버)
const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setPosts([
        // 실제 api로 가져와야 할 데이터를 명시적으로 작성하여 전달
        { id: 1, author: '이승아', date: '2024-05-11', title: '첫 게시물1', content: '리액트 커스텀 훅1'},
        { id: 2, author: '이도경', date: '2024-05-12', title: '첫 게시물2', content: '리액트 커스텀 훅2'},
        { id: 3, author: '이현아', date: '2024-05-13', title: '첫 게시물3', content: '리액트 커스텀 훅3'},
        { id: 4, author: '정주연', date: '2024-05-14', title: '첫 게시물4', content: '리액트 커스텀 훅4'},
        { id: 5, author: '윤대휘', date: '2024-05-15', title: '첫 게시물5', content: '리액트 커스텀 훅5'},
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // 게시물 생성 로직
  const addPost = useCallback((post: PostType) => {
    setPosts(prev => [...prev, { ...post }]);
  }, []);

  // 게시물 수정 로직
  const updatePost = useCallback((updatedPost: PostType) => {
    setPosts(prev => prev.map(post => post.id === updatedPost.id ? updatedPost : post ));
  }, []);

  // 게시물 삭제 로직
  const deletePost = useCallback((id: number) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  }, []);

  return { posts, addPost, updatePost, deletePost, loading, error };
}

export default function Board() {
  const { posts, addPost, updatePost, deletePost, loading, error } = usePosts();

  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const titleInput = useInput2('');
  const contentInput = useInput2('');

  const postIdRef = useRef(5);
  
  const handleAddPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: PostType = {
      id: postIdRef.current++,
      author: '작성자',
      // new Date(): JS의 Date 객체를 생성하는 생성자
      // toISOString(): 국제 표준 날짜 및 시간 표기법
      // >> 'YYYY-MM-DDTHH:mm:ss:sssZ'
      date: new Date().toISOString().slice(0, 10),
      title: titleInput.value,
      content: contentInput.value
    };
    addPost(newPost);
    titleInput.reset(); // 제목 입력 필드 리셋
    contentInput.reset(); // 내용 입력 필드 리셋
  }

  const handleUpdatePost = (post: PostType) => {
    updatePost({
      ...post,
      title: '수정된 제목',
      content: '수정된 내용'
    });
  };

  const handleDeletePost = (id: number) => {
    deletePost(id);
  };
  
  const handleSelectPost = (post: PostType) => {
    setSelectedPost(post);
  };

  return (
    <div className={styles.formContainer}>
      {loading && <p>로딩중입니다.</p>}
      {error && <p>에러 발생: {error}</p>}
      <br />
      <form onSubmit={handleAddPost}>
        <input 
          type="text" 
          {...titleInput.bind}
          placeholder='제목'
          required
          className={styles.inputField}
        />
        <textarea 
          {...contentInput.bind}
          placeholder='내용'
          required
          className={styles.textareaField}
        />
        <button 
          type='submit'
          className={styles.submitButton}
        >게시물 추가</button>
      </form>
      <hr />

      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <div className={styles.postDetails}>
              {post.title} by {post.author} on {post.date}
            </div>
            <button className={styles.postButton} onClick={() => handleSelectPost(post)}>게시물 확인</button>
            <button className={styles.postButton} onClick={() => handleUpdatePost(post)}>수정</button>
            <button className={`${styles.postButton} ${styles.deleteButton}`} onClick={() => handleDeletePost(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div className={styles.selectedPost}>
          <h4 className={styles.selectedTitle}>{selectedPost.title}</h4>
          <p className={styles.selectedContent}>{selectedPost.content}</p>
        </div>
      )}
    </div>
  )
}
