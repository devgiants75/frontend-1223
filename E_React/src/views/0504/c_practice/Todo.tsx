import React, { useCallback, useMemo, useRef, useState } from 'react'
// 스타일 시트 임포트 
import './Todo.css';

//! React Hook 사용 Todo 프로젝트 
// - useState, useRef, useCallback, useMemo

//! 각 할 일 항목의 타입을 지정
interface TodoItemProps {
  id: number; // 할 일의 고유 ID
  text: string; // 할 일의 내용
  completed: boolean; // 할 일의 완료 상태
}

export default function Todo() {
  //! 데이터 상태 관리
  //, todos: 할 일 목록을 관리
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  //, filter: 현재 필터 상태를 관리(모든, 활성화, 완료)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  //! 다음 할 일에 대한 ID 추적 - useRef 사용
  const nextIdRef = useRef(0);

  //* 할 일 구현 로직은 useCallback을 사용하여
  // : 필요할 때만 재생성되도록 최적화
  // : 정적 함수 >> 컴포넌트 렌더링 시에만 생성

  //! 할 일 추가 함수
  const addTodo = useCallback((text: string) => {
    setTodos(todos => [
      ...todos,
      { id: nextIdRef.current++, text, completed: false}
    ]);
  }, []);

  //! 할 일 완료 상태를 토글하는 함수
  const toggleTodo = useCallback((id: number) => {
    setTodos(todos => todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo
    ));
  }, []);

  //! 할 일 삭제 함수
  const deleteTodo = useCallback((id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  //! 현재 설정된 필터에 따라 할 일 목록을 필터링
  // : useMemo를 사용하여 필터링 결과를 메모화(캐싱)
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        // 완료되지 않은 항목을 필터링
        return todos.filter(todo => !todo.completed);
      case 'completed':
        // 완료된 항목을 필터링
        return todos.filter(todo => todo.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }, [todos, filter]);

  //! 입력 필드에서 엔터키를 눌렀을 때
  //  , 호출되는 이벤트 핸들러
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      if (input.value.trim() !== '') {
        addTodo(input.value.trim());
        input.value = '';
      }
    }
  }

  return (
    <div className='app-container'>
      <h1>My Todo List</h1>
      <input 
        type="text" 
        className='todo-input'
        placeholder='Add a new task'
        onKeyPress={handleKeyPress}
      />
      <div className='buttons-container'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <li key={todo.id} className='todo-item'>
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              className='delete-button'
              onClick={() => deleteTodo(todo.id)}
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
