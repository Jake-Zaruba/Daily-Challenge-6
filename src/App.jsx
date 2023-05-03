import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.text, id: Math.floor(Math.random() * 100) },
        ],
      };
    case ACTIONS.DELETE_TODO:
      return state.todos.filter((item) => {
        item.id !== action.payload.id;
      });

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [todo, setTodo] = useState("");

  const list = state.todos.map((item) => {
    return (
      <div key={item.id}>
        <span>{item.text}</span>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: item.id } })
          }
        >
          Delete todo
        </button>
      </div>
    );
  });

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch({ type: ACTIONS.ADD_TODO, text: todo })}>
        Add todo
      </button>

      <div>{list}</div>
    </>
  );
}

export default App;
