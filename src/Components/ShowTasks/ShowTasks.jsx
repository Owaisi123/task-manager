import React, { useState } from "react";

const ShowTasks = ({ tasks, deleteTask, updateTask }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedTask, setEditedTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
  });

  const handleEditClick = (task) => {
    setEditingId(task.id);
    setEditedTask({ ...task });
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask(editedTask);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">My Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks available.</p>
      ) : (
        <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow p-4 rounded-lg border-l-4 border-indigo-500"
            >
              {editingId === task.id ? (
                <form onSubmit={handleUpdate} className="space-y-2">
                  <input
                    type="text"
                    name="title"
                    value={editedTask.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  <textarea
                    name="description"
                    value={editedTask.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <select
                    name="priority"
                    value={editedTask.priority}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <input
                    type="date"
                    name="dueDate"
                    value={editedTask.dueDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <select
                    name="status"
                    value={editedTask.status}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Done</option>
                  </select>

                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white text-lg px-3 py-1 rounded-md shadow-sm transition duration-200"
                      title="Update Task"
                    >
                      🔄
                    </button>

                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-gray-500 hover:bg-gray-600 text-white text-lg px-3 py-1 rounded-md shadow-sm transition duration-200"
                      title="Cancel Edit"
                    >
                      ❌
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {task.title}
                    </h3>
                    <p className="text-gray-600">{task.description}</p>
                    <div className="flex justify-between mt-2 text-sm space-x-4">
                      <span className="text-gray-500">
                        Priority: <b>{task.priority}</b>
                      </span>
                      <span className="text-gray-500">
                        Due: <b>{task.dueDate || "N/A"}</b>
                      </span>
                      <span className="text-gray-500">
                        Status: <b>{task.status}</b>
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditClick(task)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white text-lg px-3 py-1 rounded-md shadow-sm transition duration-200"
                      title="Edit Task"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-lg px-3 py-1 rounded-md shadow-sm transition duration-200"
                      title="Delete Task"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowTasks;