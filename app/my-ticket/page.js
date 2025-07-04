'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function MyTicketPage() {
  const [search, setSearch] = useState('');

  const tickets = [
    { id: 1234, subject: 'Login issue', status: 'In Progress', support: 'Tech support', date: '13/08/21', rating: 0 },
    { id: 1124, subject: 'New ticket issue', status: 'On hold', support: 'Operation Team', date: '14/08/21', rating: 0 },
    { id: 1224, subject: 'New request', status: 'Closed', support: 'Tech support', date: '13/08/21', rating: 3.5 },
    { id: 1244, subject: 'Ticket submission', status: 'In Progress', support: 'Operation Team', date: '14/08/21', rating: 0 },
    { id: 1114, subject: 'Login issue', status: 'In Progress', support: 'Tech support', date: '3/08/21', rating: 0 },
  ];

  const getStatusBadge = (status) => {
    const base = 'px-2 py-[2px] rounded-full text-sm font-medium';
    switch (status) {
      case 'In Progress':
        return `${base} bg-green-400 text-black`;
      case 'On hold':
        return `${base} bg-[#0f2b46] text-white`;
      case 'Closed':
        return `${base} bg-gray-700 text-white`;
      default:
        return `${base} bg-gray-300 text-black`;
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      if (rating >= index + 1) return <span key={index}>★</span>;
      if (rating >= index + 0.5) return <span key={index}>☆</span>; 
      return <span key={index}>☆</span>;
    });
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
    ticket.id.toString().includes(search)
  );

  return (
    <>
      <Sidebar />
      <div className=" fixed w-full pl-[260px] pt-[80px] pr-4 pb-8 bg-white min-h-screen font-serif overflow-x-hidden">
        <h1 className="text-2xl font-semibold text-center mb-6">List of Ticket</h1>

        <div className="  max-w-5xl mx-auto p-4 bg-white">
          <div className="flex flex-col  gap-2 py-2 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find ticket"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=" text-lg px-3 py-1 rounded shadow-md bg-gray-300"
              />
            </div>

            <div className="flex items-center gap-1">
              <span>Show:</span>
              <select className="border px-2 py-1 shadow bg-gray-200 text-black">
                <option>10</option>
              </select>
              <span>Entries</span>
            </div>
          </div>

          <table className="w-full text-left border-t text-base">
            <thead>
              <tr className="bg-white">
                <th className="py-2 px-2">Ticket No.</th>
                <th className="py-2 px-2">Subject</th>
                <th className="py-2 px-2">Status</th>
                <th className="py-2 px-2">Support by</th>
                <th className="py-2 px-2">Date</th>
                <th className="py-2 px-2">Rate</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket, idx) => (
                <tr key={ticket.id} className={idx % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}>
                  <td className="py-2 px-2 text-blue-800 underline cursor-pointer">{ticket.id}</td>
                  <td className="py-2 px-2">{ticket.subject}</td>
                  <td className="py-2 px-2">
                    <span className={getStatusBadge(ticket.status)}>{ticket.status}</span>
                  </td>
                  <td className="py-2 px-2">{ticket.support}</td>
                  <td className="py-2 px-2">{ticket.date}</td>
                  <td className="py-2 px-2 text-yellow-600 text-lg">{renderStars(ticket.rating)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-2 text-sm px-1">
            <span>Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries</span>
            <span className="text-black cursor-pointer select-none">&laquo; &lt; 1 &gt; &raquo;</span>
          </div>
        </div>
      </div>
    </>
  );
}
