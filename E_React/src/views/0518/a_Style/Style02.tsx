import React from 'react'
import styles from './styles/Style02.module.css';

//! css 모듈 사용법 (컴포넌트 스펙시픽 스타일)
// : 일반 외부 css파일과 유사
// >> (컴포넌트 자체의) 로컬 스코프로 제한

//? import 방법
// : import 모듈명 from '경로';

export default function Style02() {
  return (
    // 클래스 이름을 동적으로 할당
    <div className={styles.container}>
      클래스를 사용한 스타일링
      <p id={styles.uniqueElement}>
        아이디를 사용한 스타일링
      </p>
    </div>
  )
}
