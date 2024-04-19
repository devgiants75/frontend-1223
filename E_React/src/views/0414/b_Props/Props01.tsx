import React from 'react'

//! Props(properties, 속성)

//? 단일 Props 전달
// : 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용
// - props의 경우 자식 컴포넌트에서 읽기 전용 사용
//   (변경 불가)

type DataType = {
  name: string;
}

//? 자식 컴포넌트
// : 부모 컴포넌트로부터 데이터를 받아 출력
function Data(props: DataType) {
  return (
    <div>안녕하세요, {props.name}님 :p</div>
  )
}

//? 여러 개의 Props 전달과 비구조화 할당
// 비구조화 할당(구조 분해)
// : 객체나 배열에서 해당 묶음 구조를 풀이해서 작성
type HelloType = {
  name: string;
  color: string;
}

function Hello({name, color}: HelloType) {
  return <div style={{ color: color}}>안녕하세요, {name}님!!!</div>
}

//? defaultProps로 기본값 설정
// : 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값 설정
// : 컴포넌트명.defaultProps = { 기본속성: '기본속성값' }

Hello.defaultProps = {
  name: '이름없음'
}

//? Props.children
// : 컴포넌트 태그 사이에 위치한 '내용'을 전달 받기 위해 사용되는 props

type ChildrenType = {
  // ReactNode: React 내의 HTML 요소들
  children: React.ReactNode;
}

// 다른 컴포넌트를 감싸는 Wrapper 컴포넌트
// React.FC
// : 해당 컴포넌트가 React의 기능 컴포넌트 임을 명시, ChildrenType 타입의 props를 전달받음을 명시
const Wrapper: React.FC<ChildrenType> = ({children}) => {

  const style = {
    border: '2px solid black',
    padding: '16px'
  };

  return(
    <div style={style}>
      {/* 
        React의 Node 요소를 포함 
        : 단일 태그 컴포넌트로 사용 X
        : 열리고 닫히는 태그 사이의 내용으로
          Node 요소(컴포넌트)가 포함되어 있어야 함
      */}
      {children}
    </div>
  )
}

// 부모 컴포넌트
// : 자식 컴포넌트의 속성으로 데이터 전달
export default function Props01() {
  return (
    // Wrapper 컴포넌트는 Data와 Hello 컴포넌트를 props로 전달하는 기능적 컴포넌트
    <Wrapper>
      {/* 
        자식 컴포넌트로 props 전달 시 
        : 호출 컴포넌트에 속성값으로 전달      
      */}
      <Data name='이승아' />
      <Hello color='pink' />
    </Wrapper>
  )
}
