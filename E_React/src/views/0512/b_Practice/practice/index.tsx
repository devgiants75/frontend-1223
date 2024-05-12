import React, { useCallback, useMemo, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';
import TodoList from './TodoList';
import Filters from './Filters';

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
  completed: boolean; // 완료 시 true, 미완료 시 false
}

export default function Index() {
  // 할 일 목록과 상태 관리를 로컬 스토리지 훅을 사용하여 관리
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  // 필터 상태 ('all', 'completed', 'active')
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

  // 입력 값 상태 관리
  const [inputValue, setInputValue] = useState('');

  //& 함수 반환 값 확인
  const add = (a: number, b: number): number => {
    console.log(a + b);
    return a + b;
  }

  let result = add(3, 5);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value) {
      addTodo(event.currentTarget.value);
      setInputValue('');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

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
  const deleteTodo = useCallback((id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }, [setTodos, todos]);

  // 필터 상태에 따라 보여질 할 일 목록 계산
  const filteredTodos = useMemo(() => {
    switch(filter) {
      case 'all':
        return todos; // 모든 할 일
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
    }
  }, [filter, todos]);

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        placeholder='Add new todo'
        // onKeyDown={ // 키를 누를 때마다 호출되는 함수 정의
        //   e => e.key === 'Enter' 
        //   && e.currentTarget.value // 비워져있지 않은 경우
        //   // 위의 모든 조건이 참이면 addTodo 함수가 호출
        //   // : 현재 입력 필드의 값을 사용하여 새로운 할 일을 추가
        //   && addTodo(e.currentTarget.value) 
        // }
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={handleChange}
      />
      <TodoList 
        todos={filteredTodos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
      <Filters setFilter={setFilter}/>
    </div>
  )
}
