'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { z } from 'zod'; // Import Zod for schema validation

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Zod schema for validating Todo
const todoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }), // Title must be a non-empty string
  completed: z.boolean().optional(),
});

const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [updatedTitle, setUpdatedTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch todos when component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Function to post a new todo
  const postTodo = async () => {
    // Validate new todo using Zod schema
    try {
      todoSchema.parse({ title: newTodo, completed: false }); // Will throw an error if validation fails
    } catch (e: any) {
      setError(e.errors[0]?.message); // Get the first error message
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: newTodo,
        completed: false,
      });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      setError('Failed to post todo');
    }
  };

  // Function to update a todo (PUT request)
  const putTodo = async (id: number) => {
    if (!updatedTitle) return;

    // Validate updated title using Zod schema
    try {
      todoSchema.parse({ title: updatedTitle, completed: false }); // Validate the updated title
    } catch (e: any) {
      setError(e.errors[0]?.message); // Get the first error message
      return;
    }

    try {
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: updatedTitle,
        completed: false,
      });
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, title: updatedTitle } : todo)));
      setUpdatedTitle('');
    } catch (error) {
      setError('Failed to update todo');
    }
  };

  // Function to delete a todo (DELETE request)
  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      setError('Failed to delete todo');
    }
  };

  // Function to patch a todo (PATCH request)
  const patchTodo = async (id: number) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      if (!todoToUpdate) return;

      const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      setError('Failed to update todo status');
    }
  };

  // Error handling
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className=" text-black text-3xl font-semibold mb-6">ToDo List</h1>

      {/* New Todo Form */}
      <div className="mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="bg-white text-black p-2 border border-gray-300 rounded-md w-72 mr-3"
        />
        <button
          onClick={postTodo}
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold"
        >
          Add Todo
        </button>
      </div>

      {/* List of Todos */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <span
                  className={` text-black  ${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {todo.title}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                {/* Toggle Completed (PATCH) */}
                <button
                  onClick={() => patchTodo(todo.id)}
                  className={`${
                    todo.completed ? 'bg-red-500' : 'bg-green-500'
                  } text-white px-3 py-1 rounded-md font-semibold`}
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>

                {/* Update Todo (PUT) */}
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  placeholder="Update title"
                  className="bg-white text-black p-1 border border-gray-300 rounded-md"
                />
                <button
                  onClick={() => putTodo(todo.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold"
                >
                  Update
                </button>

                {/* Delete Todo (DELETE) */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDo;
