import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// 포스트 인터페이스 정의
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function BlogPost() {
  // useParams 사용 - URL에서 postId 파라미터 값 추출
  // : URL에 담긴 postId 값은 문자열 타입
  const { postId } = useParams<{ postId: string }>();

  // post 상태 관리 - 초기값 null 지정
  const [post, setPost] = useState<Post | null>(null);

  // 사이드 이팩트 정의
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

      setPost(response.data);
    };
    fetchPost();
  }, [postId]);

  return (
    <div>
      <h3>=== Blog Post Details ===</h3>
      {post ? (
        // post 상태가 존재하면(데이터 로딩이 완료되면) 상세 내용 출력
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ) : (
        // 데이터가 아직 로딩 중인 경우 - 로딩 메시지 출력
        <p>포스트가 로딩 중입니다.</p>
      )}
    </div>
  )
}

