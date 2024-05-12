import React, { useCallback, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

//! 간단한 할 일 목록 애플리케이션

//, Todo 컴포넌트
// : 할 일 항목들을 리스트 형태로 보여줌
// : 각 항목을 토글하거나 삭제하는 기능을 제공

//, Filters 컴포넌트
// : 사용자가 전체, 완료된, 미완료된 할 일을 필터링 할 수 있는 버튼을 제공

//, useLocalStorage 파일
// : 로컬 스토리지를 사용해 데이터를 지속적으로 저장하고, 할 일 목록을 관리

//& 할 일(Todo) 타입 정의
type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

export default function Index() {
  // 할 일 목록과 상태 관리를 로컬 스토리지 훅을 사용하여 관리
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  // 필터 상태 ('all', 'completed', 'active')
  const [filter, setFilter] = useState<'all' | 'completed' | 'acitve'>('all');

  // 새로운 할 일 추가 함수
  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }, [setTodos, todos]);

  // 할 일 완료/미완료 토글 함수
  const toggleTodo = useCallback((id: number) => {
    const newTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }, [setTodos, todos]);

  // 할 일 삭제 함수

  return (
    <div>index</div>
  )
}
