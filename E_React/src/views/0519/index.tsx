import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogPosts from "./a_Router/BlogPosts";
import BlogPost from "./a_Router/BlogPost";
import QueryParams01 from "./b_QueryParams/QueryParams01";
import QueryParams02 from "./b_QueryParams/QueryParams02";
import Axios01 from "./c_Axios/Axios01";
import Axios02 from "./c_Axios/Axios02";
import Axios03 from "./c_Axios/Axios03";
import Axios04 from "./c_Axios/Axios04";
import ContextApi01 from "./d_ContextApi/ContextApi01";
import ThemeProvider from "./d_ContextApi/ThemeProvider";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0519
      </h1>

      <h2>1. Practice</h2>
      <Routes>
        {/* 중첩된 라우터에서 빈 /는 메인 경로를 의미 */}
        <Route path="/" element={<BlogPosts />} />
        <Route path="/posts/:postId" element={<BlogPost />} />

      </Routes>

      <h2>2. QueryParams & useSearchParams</h2>
      <Routes>
        <Route path="/" element={<QueryParams01 />} />
        <Route path="/product" element={<QueryParams02 />} />
      </Routes>

      <h2>3. Axios</h2>
      <Axios01 />
      <Axios02 />
      <Axios03 />
      <Axios04 />

      <h2>4. Context API - 전역 상태 관리</h2>
      <ThemeProvider>
      <ContextApi01 />
        <div>
          <h1>안녕하세요 테마 스위치 앱입니다.</h1>
          <p>해당 내용들은 ThemeProvider의 컴포넌트들입니다.</p>
        </div>
      </ThemeProvider>
    </div>
  );
}
