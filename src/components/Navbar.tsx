import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { useAuth } from '../hooks/useAuth';
import { Badge } from './ui/Badge';
import { useCart } from '../hooks/useCart';
import { ProfileButton } from './ProfileButton';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { items } = useCart();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDashboard) return null;

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/products', label: 'Nos Produits' },
    { href: '/recipes', label: 'Idées Recettes' },
    { href: '/about', label: 'Qui Sommes Nous' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md md:hidden"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                to={link.href} 
                className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                  location.pathname === link.href ? 'text-emerald-600 font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:flex"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            <Link 
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="success"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Link>

            {user ? (
              <ProfileButton />
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="secondary" size="sm">
                    Se connecter
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
        <div className="relative w-4/5 max-w-xs bg-white h-full p-6">
          <div className="flex flex-col h-full">
            <div className="space-y-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {!user && (
              <div className="pt-6 border-t border-gray-200">
                <Link 
                  to="/register" 
                  className="block mb-3" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full">
                    S'inscrire
                  </Button>
                </Link>
                <Link 
                  to="/login" 
                  className="block" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="secondary" className="w-full">
                    Se connecter
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}