'use client';
import { useState } from 'react';
import { MenuItem } from '@/types/MenuItem';
import {NavigationProps} from '@/types/NavigationProps';

const Navigation = ({ menuItems }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<Set<string>>(new Set());

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (id: string) => {
    setOpenMenu((prev) => {
      const newMenu = new Set(prev);
      if (newMenu.has(id)) {
        newMenu.delete(id);
      } else {
        newMenu.add(id);
      }
      return newMenu;
    });
  };

  const renderMenuItems = (items: MenuItem[], level: number = 0) => (
    <ul
      className={`list-none md:flex lg:flex ${level === 0 ? 'flex-wrap md:flex-nowrap' : ''} ${level > 0 ? 'pl-0' : ''} ${level > 0 ? 'border-t border-gray-300' : ''}`}>
      {items.map((item) => (
        <li key={item.id} className={`relative ${level === 0 ? 'mr-2.5' : ''} mb-2 mr-4`}>
          <div
            className="flex items-center cursor-pointer hover:text-[#ffb634]"
            onClick={() => item.children && item.children.length > 0 && toggleSubMenu(item.id)}
          >
            <span className="text-lg font-semibold">{item.name}</span>
            {item.children && item.children.length > 0 && (
              <span className="ml-1 text-gray-500">{openMenu.has(item.id) ? '-' : '+'}</span>
            )}
          </div>
          {item.children && item.children.length > 0 && openMenu.has(item.id) && (
            <div
              className={`absolute top-full left-0 flex ${level === 0 ? 'space-x-4' : 'space-x-2'} bg-black text-white border border-gray-700 z-10 min-w-max`}>
              {renderMenuItems(item.children, level + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="p-4 relative">
      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
        {renderMenuItems(menuItems)}
      </div>
    </nav>
  );
};

export default Navigation;
