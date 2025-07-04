'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function NewTicket() {
  const [formData, setFormData] = useState({
    ticketNo: '',
    date: '',
    name: '',
    department: '',
    subject: '',
    category: '',
    type: '',
    priority: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Optional: send to backend
  };

  return (
    <>
      <Sidebar />
      <div className="fixed w-full pt-[10px] pl-[260px] pr-6 bg-white min-h-screen overflow-hidden">
        <h1 className="text-2xl font-serif font-semibold mb-2 text-center">Create New Ticket</h1>

        <form
          onSubmit={handleSubmit}
          className="  px-6  rounded-lg bg-white max-w-6xl mx-auto"
        >
          {/* Top 4 Fields: Ticket No, Date, Name, Department */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className='flex gap-2 items-center'>
              <label className="block mb-1 font-medium">Ticket No.</label>
              <input
                type="text"
                name="ticketNo"
                className="w-full p-2 rounded bg-gray-300 shadow-inner"
                value={formData.ticketNo}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-2 items-center'>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                name="date"
                className="w-full p-2 rounded bg-gray-300 shadow-inner"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-2 items-center'>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded bg-gray-300 shadow-inner"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-2 items-center'>
              <label className="block mb-1 font-medium">Department</label>
              <input
                type="text"
                name="department"
                className="w-full p-2 rounded bg-gray-300 shadow-inner"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-6">
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-2 rounded bg-gray-300 shadow-inner"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Category, Type, Priority & Description */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex-1 min-w-[200px] space-y-4">
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  className="w-full p-2 rounded bg-gray-300 shadow-inner"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Type</label>
                <input
                  type="text"
                  name="type"
                  className="w-full p-2 rounded bg-gray-300 shadow-inner"
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Priority</label>
                <input
                  type="text"
                  name="priority"
                  className="w-full p-2 rounded bg-gray-300 shadow-inner"
                  value={formData.priority}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex-1 min-w-[250px]">
              <label className="block mb-1 font-medium">Description</label>
              <div className="relative">
                <textarea
                  name="description"
                  rows="7"
                  className="w-full p-2 rounded bg-gray-300 shadow-inner resize-none"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label className="absolute bottom-2 right-2 bg-teal-500 text-black p-1 rounded cursor-pointer text-xl font-bold">
                  📎
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* reCAPTCHA and Submit aligned */}
          <div className="flex justify-between items-center mt-2 flex-wrap gap-4">
            <div className="border border-gray-400 p-6 px-10 bg-white shadow-sm">
              <input type="checkbox" className="mr-2 w-6 h-6" /> I&apos;m not a robot
              <div className="text-xs mt-1 text-gray-500">reCAPTCHA</div>
            </div>

            <button
              type="submit"
              className="bg-teal-400 text-black px-12 py-2 rounded hover:bg-teal-500 font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
