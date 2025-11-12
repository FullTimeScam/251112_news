import React from 'react';

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, isActive, children }) => {
  const baseClasses = "transition-all duration-300 ease-in-out px-4 py-2 rounded-lg backdrop-blur-sm";
  const activeClasses = "text-white bg-white bg-opacity-20 font-bold scale-110 shadow-lg";
  const inactiveClasses = "text-gray-400 bg-black bg-opacity-20 hover:text-white hover:bg-opacity-30";

  return (
    <a
      href={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </a>
  );
};