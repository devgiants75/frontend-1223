import React, { useState } from 'react'

//! 사용자 입력을 처리하는 훅

//& 1. 사용자 입력 처리 훅의 반환 타입을 정의
interface UseInputReturn {
  value: string; // 입력 필드의 현재 값
  // 입력 필드의 값을 설정하는 함수
  setValue: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void; // 입력 필드의 값으로 초기값을 리셋하는 함수
  bind: {
    value: string; // 입력 필드의 값
    // 입력 필드의 값이 변경될 때 호출될 함수
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
  }
}

// 초기값을 매개변수로 받고, 입력상태를 관리하는 커스텀 훅
export default function useInput2(initialValue: string): UseInputReturn {
  const [value, setValue] = useState(initialValue);

  // 입력 필드의 값이 변경될 때 호출되는 이벤트 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // 이벤트 발생 시, 해당 타겟의 값으로 상태 업데이트
    setValue(e.target.value);
  }

  // 입력 필드의 값을 초기값으로 리셋
  const reset = () => {
    setValue(initialValue);
  }

  return {
    value,
    setValue,
    reset,
    bind: {
      value,
      onChange: handleChange
    }
  }
}
