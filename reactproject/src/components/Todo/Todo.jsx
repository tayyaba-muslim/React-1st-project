import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTodos([...todos, newTask.trim()]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setNewTask(todos[index]);
  };

  const saveTask = () => {
    const updatedTodos = todos.map((task, index) =>
      index === editIndex ? newTask.trim() : task
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setNewTask("");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Todo List</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Enter task here"
          className="form-control"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {editIndex !== null ? (
          <>
            <button className="btn btn-success" onClick={saveTask}>Save</button>
            <button className="btn btn-secondary ms-2" onClick={() => {
              setEditIndex(null);
              setNewTask("");
            }}>Cancel</button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={addTask}>Add</button>
        )}
      </div>

      {todos.length === 0 ? (
        <h3 className="text-muted text-center">No tasks found</h3>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Task</th>
              <th style={{ width: "200px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((task, index) => (
              <tr key={index}>
                <td>{task}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Todo;
