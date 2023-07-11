import React from "react";
import styled from "styled-components";

// - todo의 타입 정의
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// - TodoList 컴포넌트가 받는 props를 정의 > Todo 객체 배열 포함
interface TodoListProps {
  todos: Todo[];
}

// - TodoList 컴포넌트를 함수형 컴포넌트로 정의 (React.FC<TodoListProps>>)
// - todos props를 받고, 할 일 목록(TodoItem)을 렌더링함.
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      <TodoListContainer>
        <h1>To-Do List</h1>
        {todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.text}</span>
          </TodoItem>
        ))}
      </TodoListContainer>
    </>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

// 'completed' props를 받음. completed의 타입은 boolean
const TodoItem = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  // completed가 true냐 false냐에 따라 스타일 다르게 적용.
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;
