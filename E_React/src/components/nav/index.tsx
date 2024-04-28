import React from 'react'
import { Link } from 'react-router-dom'

// to 속성의 값은
// : 전체 메인 URL인 
// : localhost:3000 뒤의 경로로 지정
// - Route 컴포넌트의 path 속성과 동일한 값으로 지정

export default function index() {
  return (
    <>
      <div style={{
        margin: '10px',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
        <Link to="/">Home</Link>
      </div>
      <div style={{
        margin: '10px',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
        <Link to="/0413">0413</Link>
      </div>
      <div style={{
        margin: '10px',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
        <Link to="/0414">0414</Link>
      </div>
      <div style={{
        margin: '10px',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
        <Link to="/0420">0420</Link>
      </div>
      <div style={{
        margin: '10px',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
        <Link to="/0421">0421</Link>
      </div>
      <div style={{
        margin: '10px',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
        <Link to="/0427">0427</Link>
      </div>
      <div style={{
        margin: '10px',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
        <Link to="/0428">0428</Link>
      </div>
    </>
  )
}
