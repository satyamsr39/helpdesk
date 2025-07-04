'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaChevronRight,
  FaHome,
  FaTicketAlt,
  FaRegPlusSquare,
} from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
    { name: 'New Ticket', path: '/new-ticket', icon: <FaRegPlusSquare /> },
    { name: 'My Ticket', path: '/my-ticket', icon: <FaTicketAlt /> },
  ];

  return (
    <>
     

      { (
        <div className="left-0 h-[100vh] fixed w-[250px] bg-gray-300 pl-2 z-40 shadow-lg">
          <nav className="flex flex-col gap-4 pl-6 pt-6 ml-1 text-xl font-medium font-serif">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-black bg-white shadow'
                      : 'hover:text-black hover:bg-gray-200'
                  }`}
                >
                  {/* Show arrow only for active item */}
                  {isActive && (
                    <span className="text-xl font-bold text-black">{<FaChevronRight />}</span>
                  )}
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
