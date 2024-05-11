import React, { useEffect, useMemo, useReducer } from 'react'
import useInput from './hooks/useInput';

//! 메인 컴포넌트
// : 커스텀 함수를 사용

// 사용자 입력 값에 대한 타입 명시
interface FormState {
  username: string;
  email: string;
}

type FormAction =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      throw new Error(`지정되지 않은 액션 타입입니다.`);
  }
}

export default function Custom03() {
  const usernameInput = useInput('');
  const emailInput = useInput('');
  const [formState, dispatch] = useReducer(formReducer, {
    username: '',
    email: ''
  })

  useEffect(() => {
    dispatch({ type: 'SET_USERNAME', payload: usernameInput.value });
  }, [usernameInput.value]);
  
  useEffect(() => {
    dispatch({ type: 'SET_EMAIL', payload: emailInput.value });
  }, [emailInput.value]);

  const userInfo = useMemo(() => {
    return `${formState.username} (${formState.email})`;
  }, [formState]);

  return (
    <div>
      <input 
        type="text" 
        placeholder='사용자 이름을 입력하세요.'
        // value='내용값'
        // onChange={handleInputChange}
        {...usernameInput}
      />
      <input 
        type="email" 
        placeholder='사용자 이메일을 입력하세요.'
        {...emailInput}
      />
      <div>
        User Information: {userInfo}
      </div>
    </div>
  )
}
