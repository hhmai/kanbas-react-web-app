import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import Highlight from "./Highlight";
import Multiply from "./Multiply";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div>
      <h2>Assignment 3</h2>
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
