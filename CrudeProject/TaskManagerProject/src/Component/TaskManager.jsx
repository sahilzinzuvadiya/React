import React, { useEffect, useState } from 'react';

export default function TaskManager() {
  const [formdata, setFormdata] = useState({});
  const [record, SetRecord] = useState([]);
  const [editindex, setEditindex] = useState(null);

  useEffect(() => {
    let alldata = JSON.parse(localStorage.getItem("tasks")) || [];
    SetRecord(alldata);
  }, []);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!formdata.name || !formdata.desc) {
      alert("Please fill out both fields");
      return;
    }

    if (editindex == null) {
      let obj = { id: Date.now(), status: "pending", ...formdata };
      const updated = [...record, obj];
      SetRecord(updated);
      localStorage.setItem("tasks", JSON.stringify(updated));
    } else {
      let updated = [...record];
      let index = updated.findIndex((item) => item.id === editindex);
      updated[index].name = formdata.name;
      updated[index].desc = formdata.desc;
      localStorage.setItem("tasks", JSON.stringify(updated));
      SetRecord(updated);
    }

    setEditindex(null);
    setFormdata({ name: "", desc: "" });
  };

  const handleDelete = (id) => {
    let newdata = record.filter(item => item.id !== id);
    SetRecord(newdata);
    localStorage.setItem("tasks", JSON.stringify(newdata));
  };

  const handleEdit = (id) => {
    let singledata = record.find(item => item.id == id);
    setFormdata({
      name: singledata.name,
      desc: singledata.desc
    });
    setEditindex(id);
  };

  const handleUpload = (id) => {
    const updated = record.map((item) => {
      if (item.id === id) {
        return { ...item, status: "completed" };
      }
      return item;
    });
    SetRecord(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">🎯 Task Manager</h1>

        {/* Form Card */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block mb-1 font-medium">Task Name</label>
              <input
                type="text"
                name="name"
                value={formdata.name || ''}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <input
                type="text"
                name="desc"
                value={formdata.desc || ''}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task description"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition"
            >
              {editindex == null ? "Add Task" : "Update Task"}
            </button>
          </form>
        </div>

        {/* Task Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-md rounded-xl overflow-hidden">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Actions</th>
                <th className="p-3 text-left">Complete</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {record.length == 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No tasks available.
                  </td>
                </tr>
              ) : (
                record.map((task, i) => {
                  const isCompleted = task.status == "completed";
                  return (
                    <tr
                      key={task.id}
                      className={`border-t ${i % 2 == 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">{task.name}</td>
                      <td className="p-3">{task.desc}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleDelete(task.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleEdit(task.id)}
                            disabled={isCompleted}
                            className={`px-3 py-1 rounded ${isCompleted ? 'bg-gray-300 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-white'}`}
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleUpload(task.id)}
                          disabled={isCompleted}
                          className={`w-full px-3 py-1 rounded ${isCompleted ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                        >
                          Upload
                        </button>
                      </td>
                      <td className="p-3">
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded-full ${task.status == 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                            }`}
                        >
                          {task.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
