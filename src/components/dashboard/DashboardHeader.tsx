import React from 'react';
import { Bell, Settings, LogOut, Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import { Logo } from '../Logo';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="hidden md:block">
              <Logo />
            </Link>
            <div className="ml-4 md:ml-8">
              <h1 className="text-xl font-semibold text-gray-900">
                Bonjour, {user?.name}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link 
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
              <Settings className="h-5 w-5" />
            </button>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={logout}
              className="hidden md:flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Déconnexion</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}