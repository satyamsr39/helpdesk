'use client';
import Sidebar from "@/components/Sidebar";
export default function Dashboard() {
  const stats = [
    { label: 'Total Tickets', value: 12, bg: 'bg-blue-500' },
    { label: 'Total Solved', value: 8, bg: 'bg-green-500' },
    { label: 'Total Awaiting Approval', value: 2, bg: 'bg-red-400' },
    { label: 'Total in Progress', value: 2, bg: 'bg-yellow-300' },
  ];

  return (
    <div className=" pl-[260px] pr-6  ">
        <Sidebar/>
        <div className="font-serif font-light text-gray-700 text-4xl   text-center p-10">Dashboard</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className={`${item.bg} rounded-lg p-6 text-center relative`}
            style={{ boxShadow: '6px 6px 0px #a3a3a3' }}
          >
            <h2 className="text-lg font-semibold mb-2 text-black">
              {item.label}
            </h2>
            <p className="text-5xl font-bold text-black">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
