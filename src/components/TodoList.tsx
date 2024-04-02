// import TodoItem from "./TodoItem";
// export type TodoProps = {
//   id: string;
//   title: string;
//   isComplete: false;
// };

// type TodoListProps = {
//   todos: TodoProps[];
// };
// function TodoList({ todos }: TodoListProps) {
//   return (
//     <>
//       {todos.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </>
//   );
// }

// export default TodoList;
import TodoItem from "./TodoItem";

export type TodoProps = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TodoListProps = {
  todos: TodoProps[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo}>
          <span>x</span>
        </TodoItem>
      ))}
    </>
  );
}

export default TodoList;
