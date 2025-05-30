import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("todo");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Task title required");

    addTask({ title, description, priority, status, dueDate });
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setStatus("todo");
    setDueDate("");
    navigate("/showtask");
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setStatus("todo");
    setDueDate("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow my-4">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Task Title</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />

        <label className="block mb-2 font-medium">Description</label>
        <textarea
          className="w-full border rounded px-3 py-2 mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows={4}
        ></textarea>

        <label className="block mb-2 font-medium">Priority</label>
        <select
          className="w-full border rounded px-3 py-2 mb-4"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label className="block mb-2 font-medium">Status</label>
        <select
          className="w-full border rounded px-3 py-2 mb-4"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <label className="block mb-2 font-medium">Due Date</label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2 mb-4"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add Task
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
