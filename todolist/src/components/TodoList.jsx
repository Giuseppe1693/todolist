import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  const clearTodo = () => {
    if (todos.length === 0) return;
    setTodos([]);
  };

  return (
    <div className="bg-blue-300 rounded-2xl px-10 py-10 mt-5">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Scrivi elemento..."
        className="bg-white mr-3 px-5 py-3 rounded-xl"
      />
      <button onClick={addTodo} className="bg-gray-200 px-3 py-3 rounded-xl mr-3">
        Aggiungi
      </button>
      <button onClick={clearTodo} className="bg-gray-200 px-3 py-3 rounded-xl">
        Svuota
      </button>

      <ul className="border-2 rounded-2xl bg-white mt-3 p-3">
        {todos.map((todo, index) => (
          <li key={index} className="font-bold flex justify-between items-center mb-2 px-2">
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-400 text-white px-3 py-1 rounded-lg ml-3 hover:bg-red-500"
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <p className="font-bold">Totale: {todos.length}</p>
    </div>
  );
}

export default TodoList;
