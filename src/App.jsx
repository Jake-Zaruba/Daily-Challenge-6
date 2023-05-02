import { useReducer, useState } from "react";

const ACTIONS = { ADD_TODO: "ADD_TODO" };

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return { todos: [...state.todos, { text: action.todo }] };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [todo, setTodo] = useState("");

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch({ type: ACTIONS.ADD_TODO, todo })}>
        Add todo
      </button>
      <button>Delete todo</button>
      <h2>{state.todos.text}</h2>
    </>
  );
}

export default App;
