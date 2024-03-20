import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import Highlight from "./Highlight";
import Multiply from "./Multiply";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div>
      <h2>Assignment 3</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <TodoList />
      <ul className="list-group">
        <TodoItem />
        <TodoItem
          todo={{ title: "Buy bread", done: false, status: "IN PROGRESS" }}
        />
        <TodoItem />
        <TodoItem
          todo={{ title: "Pick up kids", done: false, status: "INCOMPLETE" }}
        />
      </ul>
      <Multiply a={5} b={3} />
      {Multiply({ a: 5, b: 3 })}
      Lorem ipsum dolor sit amet,
      <Highlight>consectetur adipiscing elit.</Highlight>
      Nulla
      {Styles()}
      <Styles />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
