import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [
    { id: 1, text: "영화 보러 가기", completed: false },
    { id: 2, text: "운동하기", completed: true },
    { id: 3, text: "피부과 가기", completed: false },
  ];

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
