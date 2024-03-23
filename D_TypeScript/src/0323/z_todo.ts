// z_todo.ts
{
//! 타입스크립트로 TODO 리스트 구현

// 요구 사항
// - Todo 항목의 인터페이스 정의(ITodoItem)
//   : Todo 항목은 id(number), task(string), completed(boolean)

// - Todo 리스트를 관리할 수 있는 함수 구현
// 1. addTodo: 새로운 Todo 항목을 추가
// 2. completeTodo: Todo 항목의 completed 상태를 true로 변경
// 3. deleteTodo: Todo 항목을 삭제
// : 각 함수는 Todo 항목 배열을 입력받고, 변경된 배열을 반환

interface ITodoItem {
  id: number;
  task: string;
  completed: boolean;
}

function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {
  const newTodo: ITodoItem = {
    // 기존의 Todo 항목들 중에서 가장 큰 id에 1을 더해 새로운 ID를 생성
    // 비어있으면 0에서 시작
    id: Math.max(0, ...todos.map(t => t.id)) + 1, // 새로운 ID 생성
    task: task,
    completed: false, // 새로운 Todo 항목은 기본적으로 미완료 상태
  };
  // 기존 Todo 리스트에 새로운 Todo 항목을 추가
  return [...todos, newTodo];
}

// 특정 Todo 항목을 완료 상태로 변경하는 함수
function completeTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  // 요소 개수의 차이가 X > map
  return todos.map(todo => 
    // 현재 순회되는 요소와 매개변수의 id값이 일치한다면
    // , 해당 요소의 completed 속성을 변경
    todo.id === id ? {...todo, completed: true} : todo
  );
}

// 특정 Todo 항목을 삭제하는 함수
function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  // 요소 개수의 차이가 O > filter

  // 해당 id를 가진 Todo 항목을 제외한 
  // , 나머지 항목들로 구성된 새 배열을 반환
  return todos.filter(todo => todo.id !== id);
}

// 함수 사용 예시
let todos: ITodoItem[] = []; // -Todo 리스트를 담을 빈 배열 초기화
todos = addTodo(todos, '타입스크립트 복습하기');
todos = addTodo(todos, '자바스크립트 복습하기');
todos = addTodo(todos, 'HTML/CSS 복습하기');
console.log(todos);
// [ { id: 1, task: '타입스크립트 복습하기', completed: false } ]

todos = completeTodo(todos, 1);
todos = completeTodo(todos, 2);
console.log(todos);
// [ { id: 1, task: '타입스크립트 복습하기', completed: true } ]

todos = deleteTodo(todos, 1);
console.log(todos);
// []

}