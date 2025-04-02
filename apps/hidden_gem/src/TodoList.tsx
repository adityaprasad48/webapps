import { useReducer, useState } from "react";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "toggle":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "delete":
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error("Unknown action type");
  }
}

// Why use useReducer here?
// Better state management – Instead of multiple useState calls, useReducer centralizes the logic.

// Scalability – Can be extended easily (e.g., edit feature, API calls).

// Predictability – Each action has a clear effect, making debugging easier.

export default function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: "add", payload: input });
      setInput("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg space-y-4">
      <h1 className="text-xl font-bold">Todo List</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          className="border p-2 w-full rounded-lg"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {state.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between p-2 border rounded-lg ${
              todo.completed ? "bg-gray-300 line-through" : ""
            }`}
          >
            <span onClick={() => dispatch({ type: "toggle", payload: todo.id })} className="cursor-pointer">
              {todo.text}
            </span>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded-lg"
              onClick={() => dispatch({ type: "delete", payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
