import { useReducer, useState } from "react";

const defaultState = {
  todos: [],
  isComplete: false,
};

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.ADD_TODO) {
    return { ...state, todos: [...todos, { title: todo }] };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [todo, setTodo] = useState("");

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch({ type: ACTIONS.ADD_TODO })}>
        Add todo
      </button>

      {/* <div>{list}</div> */}
    </>
  );
}

export default App;
