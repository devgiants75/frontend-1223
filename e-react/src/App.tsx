import React from 'react';
import { Route, Routes } from 'react-router-dom';

// 파일명을 index로 지정하는 경우
// : 웹 페이지의 메인 파일 
//   - 해당 파일이 존재하는 디렉토리(폴더)의 기본(메인)이 되는 파일임을 파일명으로 명시
// : 폴더 명 만으로 해당 파일 호출이 가능
import Index0413 from './views/0413';
import Index0414 from './views/0414';

function App() {
  return (
    <>
      {/* 
      Routes 태그 외부에 있는 코드의 경우
      : URL 경로와 상관없이 렌더링
      */}
      <h1>React 수업 자료</h1>
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
      </Routes>
    </>
  );
}

export default App;
