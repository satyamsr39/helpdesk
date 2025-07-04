'use client';
import { useRouter } from 'next/navigation';
import { FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    
    router.push('/login');
  };

  return (
    <header className="w-full h-[90px] navbar  flex items-center justify-between px-4 ">
      <div className="text-white text-3xl font-bold italic">Helpdesk</div>
      
      <div className="flex items-center gap-4">
        {/* Language Buttons */}
        <div className="flex items-center gap-1 border-2  bg-black border-black border-l-6 rounded border-r-6  font-bold text-white text-xs  ">
          <span className='bg-black px-3 py-1 rounded-lg'>BM</span>
          <span className=" text-black navbar  px-3 py-1">BI</span>
        </div>

        {/* Icons */}
        <FaBell className="text-black text-xl cursor-pointer" />
        <FaUser className="text-black text-xl cursor-pointer" />
        <FaSignOutAlt 
          className="text-black text-xl cursor-pointer"
          onClick={handleLogout}
        />
      </div>
    </header>
  );
}
