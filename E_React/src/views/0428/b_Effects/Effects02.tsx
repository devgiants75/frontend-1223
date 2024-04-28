import React, { useEffect, useState } from 'react'

// 타이머 기능을 부수 효과로 사용
export default function Effects02() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // 정리 함수
    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    }

  }, []);

  return (
    <div>
      타이머: {count}
    </div>
  )
}
