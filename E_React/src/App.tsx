import React from 'react';
import { Route, Routes } from 'react-router-dom';

// 파일명을 index로 지정하는 경우
// : 웹 페이지의 메인 파일 
//   - 해당 파일이 존재하는 디렉토리(폴더)의 기본(메인)이 되는 파일임을 파일명으로 명시
// : 폴더 명 만으로 해당 파일 호출이 가능

import Nav from './components/nav';
import Index0413 from './views/0413';
import Index0414 from './views/0414';
import Index0420 from './views/0420';
import Index0421 from './views/0421';
import Index0427 from './views/0427';
import Index0428 from './views/0428';
import Index0504 from './views/0504';

function App() {
  return (
    <>
      {/* 
        Routes 태그 외부에 있는 코드의 경우
        : URL 경로와 상관없이 렌더링

        Router의 Link 태그
        : Link 컴포넌트 
          - 라우터에서 페이지를 불러오는 방식
          - a태그와 유사하게 경로를 지정
            (페이지를 새로고침 하지 X 
              - SPA 특성을 사용)

          - to 속성을 사용하여 이동하고자 하는 경로를 지정
      */}
      <h1>React 수업 자료</h1>
      <Nav />
      <Routes>
        {/*  
          npm run start
          기본 경로 - localhost:3000
          
          Route의 path속성으로 지정된 경로를 element가 렌더링

          npm run start의 첫 번째 렌더링 페이지의 경우: 경로를 /로 전달
          (a태그의 href="#"와 유사)

          <Route path="/" element={<렌더링 할 페이지 />} />
        */}
        <Route path='/0413' element={<Index0413 />}/>
        {/* JSX 문서에서 HTML 내에 JS 코드 작성: 중괄호 내에 작성 */}
        <Route path='/0414' element={<Index0414 />}/>
        <Route path='/0420' element={<Index0420 />}/>
        <Route path='/0421' element={<Index0421 />}/>
        <Route path='/0427' element={<Index0427 />}/>
        <Route path='/0428' element={<Index0428 />}/>
        <Route path='/0504' element={<Index0504 />}/>
      </Routes>
    </>
  );
}

export default App;
