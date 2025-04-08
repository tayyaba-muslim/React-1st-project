import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [newTask, setNewTask] = useState("");

    // functions
    const addTask = () => {
        let taskInput = document.getElementById("task")
        // spread operator
        setTodos([...todos, taskInput.value])
        taskInput.value = ""
    }

    const deleteTask = (index) => {
        let newTodos = todos.filter((task, i) => i !== index);
        setTodos(newTodos);
    }

    const editTask = (index) => {
        setEditIndex(index);
        setNewTask(todos[index]);
    }

    const saveTask = () => {
        let updatedTodos = todos.map((task, index) =>
            index === editIndex ? newTask : task
        );
        setTodos(updatedTodos);
        setEditIndex(null);
        setNewTask("");
    }

    return (
        <div className='container' >
            <h1 className='text-center'>Enter Task to do</h1>

            <input
                type="text"
                id="task"
                placeholder="Enter task here"
                className="form-control"
            />
            <button className="btn btn-primary" onClick={addTask}>Add</button>

            {/* Editing Section */}
            {editIndex !== null && (
                <div className="mt-3">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="form-control"
                    />
                    <button className="btn btn-success mt-2" onClick={saveTask}>Save</button>
                    <button className="btn btn-secondary mt-2 mx-2" onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
            )}

            <div className="container mt-4">
                {todos.length === 0 ? <h3>No data found</h3> :
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((element, index) => (
                                <tr key={index}>
                                    <td>{element}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => editTask(index)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger mx-4" onClick={() => deleteTask(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default Todo