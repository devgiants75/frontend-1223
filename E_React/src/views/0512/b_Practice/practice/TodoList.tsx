import React from 'react'

// Todo 항목 타입 정의
type Todo = {
  id: number;
  text: string;
  completed: boolean; // 완료 시 true, 미완료 시 false
}

// TodoList 컴포넌트의 props 타입 정의
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
          {todo.text}
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
