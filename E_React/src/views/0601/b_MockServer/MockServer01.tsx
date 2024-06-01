import axios from 'axios';
import React, { useEffect, useState } from 'react'

//! Mock Server
// : 백엔드 없이 프론트엔드 개발에 있어
//   , 서버 역할을 담당하는 라이브러리

//? JSON Server 사용
// 사용 방법

// 1) 설치
// npm install -g json-server

// 2) 최상위 디렉토리에서 db.json 파일 생성

// 3) json-server 실행
// json-server --watch db.json --port 3000
// : json-server가 db.json 파일을 감시하면서 해당 데이터에 대한 API를 제공

// 4) json-server 명령어 등록(scripts 객체에 등록)
// - package.json파일의 scripts 객체에 db.json 연결 등록

// 5) 등록된 scripts로 json-server 실행
// - npm run server

interface Book {
  id: number;
  title: string;
  author: string;
}

export default function MockServer01() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h4>Book List</h4>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}
