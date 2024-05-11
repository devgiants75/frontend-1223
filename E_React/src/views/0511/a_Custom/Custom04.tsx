import React, { useState } from 'react'
import useInput2 from './hooks/useInput2';

// 게시판 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Custom04() {
  // 제목 입력을 관리하는 useInput2 훅
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput2('');
  // 내용 입력을 관리하는 useInput2 훅
  const { value: content, bind: bindContent, reset: resetContent } = useInput2('');

  // 게시글 목록을 상태로 관리
  const [posts, setPosts] = useState<Post[]>([]);

  // 게시글 추가 함수
  const addPost = () => {
    // 제목과 내용이 모두 입력되었는지 확인
    if (!title || !content) {
      // 둘 중에 하나라도 입력이 되지 않을 경우 경고창 표시
      alert('제목과 내용을 모두 입력하세요.');
      return;
    }

    const newPost = {
      id: posts.length + 1,
      title,
      content
    }

    // 게시글 목록에 새 게시글 추가
    setPosts([...posts, newPost]);

    // 제목&내용 입력 필드 초기화
    resetTitle();
    resetContent();
  }

  return (
    <div>
      <h3>미니 게시판</h3>
      <div>
        <input 
          type="text" 
          placeholder='제목을 입력해주세요.'
          {...bindTitle}
        />
        <br />
        <textarea 
          placeholder='내용을 입력해주세요.'
          {...bindContent}
        />
        <button onClick={addPost}>게시글 추가</button>
      </div>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
