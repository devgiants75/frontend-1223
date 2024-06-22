import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {

  // 링크 주소를 배열로 저장
  // : 각 페이지의 경로를 포함
  const links = ['/', '0413', '0414', '0420', '0421', '0427', '0428', '0504', '0505', '0511', '0512', '0518', '0519', '0601', '0602', 'home'];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '10px',
      padding: '10px 20px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      {/* links 배열을 순회하면서 Link 컴포넌트를 생성 */}
      {links.map(link => (
        // Link 컴포넌트에 고유 key 할당, to속성으로 URL경로 지정
        <NavLink 
          key={link} 
          to={link} 
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : 'black',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          {/*  
            링크가 '/'인 경우: Home의 이름을 사용
            , 그 외인 경우: 각 링크의 이름을 그대로 사용
          */}
          {link === '/' ? 'HOME' : link}
        </NavLink>
      ))}
    </div>
  )
}
