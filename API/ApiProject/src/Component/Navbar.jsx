import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
  const [record, setRecord] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    id: '',
    name: '',
    desc: '',
    price: '',
    img: '',
  });

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    await axios.get("http://localhost:1006/users").then((res) => {
      setRecord(res.data);
    });
  };

  const deletedata = async (id) => {
    await axios.delete(`http://localhost:1006/users/${id}`).then(() => {
      let updated = record.filter((item) => item.id !== id);
      setRecord(updated);
    });
  };

  const Editdata = (id) => {
    const selectedItem = record.find((item) => item.id == id);
    setEditData(selectedItem);
    setEditMode(true);
  };

  const handleEditSubmit = async (e) => {
  e.preventDefault();

  await axios.put(`http://localhost:1006/users/${editData.id}`, editData).then((res) => {
      fetchdata();        
      // setEditMode(false); 
    })
    
};


  return (
    <div>
      {/* Navbar */}
      <div className='w-full fixed top-0 z-50 shadow-md backdrop-blur-md bg-white/80'>
        <div className='max-w-[1200px] mx-auto px-5 py-3 flex items-center justify-between'>
          <div className='text-3xl font-extrabold text-emerald-600 tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer'>
            LOGO
          </div>
          <div className='hidden md:flex gap-8 text-[17px] font-semibold'>
            {['Home', 'About', 'Service', 'Blog', 'Gallery'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className='relative text-gray-700 hover:text-emerald-600 transition-all duration-300 group'
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="relative hidden md:block w-[230px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Link to="form">
            <button className="relative overflow-hidden px-5 py-2.5 rounded-xl text-white bg-emerald-600 group transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative z-10">Add Product</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        {
          record.map((item) => (
            <div
              key={item.id}
              className="w-[260px] bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 group"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[160px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-emerald-600 mb-1">{item.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                <p className="text-lg font-semibold text-gray-900 mt-3">₹{item.price}</p>
                <button
                  onClick={() => deletedata(item.id)}
                  className="mt-4 w-full py-2 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-500 transition-all duration-300 hover:scale-[1.02]"
                >
                  Delete
                </button>
                <button
                  onClick={() => Editdata(item.id)}
                  className="mt-2 w-full py-2 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-500 transition-all duration-300 hover:scale-[1.02]"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        }
      </div>

      {/* Edit Modal */}
      {editMode && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleEditSubmit}
            className="bg-white p-6 rounded-xl shadow-lg w-[350px] space-y-4"
          >
            <h2 className="text-xl font-bold text-emerald-600">Edit Product</h2>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="desc"
              value={editData.desc}
              onChange={(e) => setEditData({ ...editData, desc: e.target.value })}
              placeholder="Description"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              value={editData.price}
              onChange={(e) => setEditData({ ...editData, price: e.target.value })}
              placeholder="Price"
              className="w-full p-2 border rounded"
            />
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={(e) =>
                setEditData({ ...editData, img: URL.createObjectURL(e.target.files[0]) })
              }
              className="w-full p-2 border rounded"
            />

            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

