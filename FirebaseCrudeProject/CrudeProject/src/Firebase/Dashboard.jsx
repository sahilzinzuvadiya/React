import { onAuthStateChanged } from 'firebase/auth';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../FirebaseConfige';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ theme }) {
    const [userId, setUserId] = useState();
    const [task, setTask] = useState('');
    const [desc, setDesc] = useState('');
    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUserId(user.uid);
        });
    }, []);

    useEffect(() => {
        if (userId) {
            fetchUser();
            fetchTask();
        }
    }, [userId]);

    const handliClick = async (e) => {
        e.preventDefault();

        if (editIndex == null) {
            await addDoc(collection(db, 'Tasks'), {
                task,
                desc,
                userId,
                status: 'pending',
            }).then(() => {
                fetchTask();
            });
        } else {
            await updateDoc(doc(db, 'Tasks', editIndex), {
                task,
                desc,
                userId,
            });
            fetchTask();
        }

        setTask('');
        setDesc('');
        setEditIndex(null);
    };

    const fetchTask = async () => {
        const snapshot = await getDocs(collection(db, 'Tasks'));
        const detailedData = snapshot.docs
            .map((item) => ({
                docId: item.id,
                ...item.data(),
            }))
        const filterdata = detailedData.filter((item) => item.userId === userId);
        setRecord(filterdata);
    };

    const fetchUser = async () => {
        if (userId) {
            const res = await getDoc(doc(db, 'Users', userId));
            console.log(res.data());
        }
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'Tasks', id));
        fetchTask();
    };

    const handleEdit = (id) => {
        const singleData = record.find((item) => item.docId === id);
        if (singleData) {
            setTask(singleData.task);
            setDesc(singleData.desc);
            setEditIndex(id);
        }
    };

    const handleUpload = async (id) => {
        await updateDoc(doc(db, 'Tasks', id), { status: 'completed' });
        fetchTask();
    };

    const handleLogOut = async () => {
        await auth.signOut();
        navigate("/")
    };

    return (
        <div className={theme == 'light' ? "min-h-screen bg-gray-100 p-6" : "min-h-screen p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"}>
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className={theme=='light'?"text-4xl font-bold text-blue-800":"text-4xl font-bold text-indigo-700"}>🎯 Task Manager</h1>
                    <button
                        onClick={handleLogOut}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                </div>

                {/* Form */}
                <div className={theme == 'light' ? "bg-white shadow-md rounded-xl p-6 mb-10" : "shadow-md rounded-xl p-6 mb-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"}>
                    <form
                        onSubmit={handliClick}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
                    >
                        <div>
                            <label className="block mb-1 font-medium">Task Name</label>
                            <input
                                type="text"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter task name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Description</label>
                            <input
                                type="text"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter task description"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={theme == 'light' ? "bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition" : "bg-indigo-700 text-white rounded px-6 py-2 hover:bg-blue-700 transition"}
                        >
                            {editIndex == null ? 'Add Task' : 'Update Task'}
                        </button>
                    </form>
                </div>

                {/* Task Table */}
                <div className="overflow-x-auto">
                    <table className={theme == 'light' ? "w-full table-auto bg-white shadow-md rounded-xl overflow-hidden" : "w-full table-auto bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white shadow-md rounded-xl overflow-hidden"}>
                        <thead className={theme === 'light' ? 'bg-blue-100 text-blue-800' : 'bg-gray-800 text-white'}>
                            <tr>
                                <th className="p-3 text-left">#</th>
                                <th className="p-3 text-left">Task</th>
                                <th className="p-3 text-left">Description</th>
                                <th className="p-3 text-left">Actions</th>
                                <th className="p-3 text-left">Complete</th>
                                <th className="p-3 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-6 text-gray-500">
                                        No tasks available.
                                    </td>
                                </tr>
                            ) : (
                                record.map((task, i) => {
                                    const isCompleted = task.status === 'completed';
                                    return (
                                        <tr
                                            key={task.docId}
                                            className={`border-t ${theme === 'light'
                                                    ? i % 2 === 0
                                                        ? 'bg-white'
                                                        : 'bg-gray-50'
                                                    : i % 2 === 0
                                                        ? 'bg-gray-800'
                                                        : 'bg-gray-700'
                                                }`}
                                        >
                                            <td className="p-3">{i + 1}</td>
                                            <td className="p-3">{task.task}</td>
                                            <td className="p-3 truncate max-w-xs">{task.desc}</td>
                                            <td className="p-3">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleDelete(task.docId)}
                                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        onClick={() => handleEdit(task.docId)}
                                                        disabled={isCompleted}
                                                        className={`px-3 py-1 rounded ${isCompleted
                                                                ? 'bg-gray-300 cursor-not-allowed'
                                                                : 'bg-yellow-400 hover:bg-yellow-500 text-white'
                                                            }`}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <button
                                                    onClick={() => handleUpload(task.docId)}
                                                    disabled={isCompleted}
                                                    className={`w-full px-3 py-1 rounded ${isCompleted
                                                            ? 'bg-gray-300 cursor-not-allowed'
                                                            : 'bg-green-500 hover:bg-green-600 text-white'
                                                        }`}
                                                >
                                                    Complete
                                                </button>
                                            </td>
                                            <td className="p-3">
                                                <span
                                                    className={`text-sm font-semibold px-3 py-1 rounded-full ${task.status === 'completed'
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
