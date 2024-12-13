import React from 'react';
import { NavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface AdminNavItemProps {
  name: string;
  href: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export function AdminNavItem({ name, href, icon: Icon, onClick }: AdminNavItemProps) {
  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) => `
        flex items-center px-4 py-2.5 text-sm font-medium rounded-lg mb-1
        transition-colors duration-200
        ${isActive 
          ? 'bg-emerald-50 text-emerald-700' 
          : 'text-gray-700 hover:bg-gray-50'
        }
      `}
    >
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      <span className="truncate">{name}</span>
    </NavLink>
  );
}