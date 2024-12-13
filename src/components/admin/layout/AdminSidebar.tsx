import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  ChefHat,
  Star,
  Settings,
  MessageSquare,
  Tag,
  X,
  BarChart3,
  FileText
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { 
    name: 'Tableau de bord', 
    href: '/admin', 
    icon: LayoutDashboard 
  },
  { 
    name: 'Statistiques', 
    href: '/admin/analytics', 
    icon: BarChart3 
  },
  { 
    name: 'Produits', 
    href: '/admin/products', 
    icon: Package 
  },
  { 
    name: 'Commandes', 
    href: '/admin/orders', 
    icon: ShoppingCart 
  },
  { 
    name: 'Clients', 
    href: '/admin/customers', 
    icon: Users 
  },
  { 
    name: 'Recettes', 
    href: '/admin/recipes', 
    icon: ChefHat 
  },
  { 
    name: 'Avis clients', 
    href: '/admin/reviews', 
    icon: MessageSquare 
  },
  { 
    name: 'Programme fidélité', 
    href: '/admin/loyalty', 
    icon: Star 
  },
  { 
    name: 'Codes promo', 
    href: '/admin/coupons', 
    icon: Tag 
  },
  { 
    name: 'Rapports', 
    href: '/admin/reports', 
    icon: FileText 
  },
  { 
    name: 'Paramètres', 
    href: '/admin/settings', 
    icon: Settings 
  }
];

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
        <div
          className={`absolute top-0 left-0 w-72 h-full bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-4 py-2">
            <NavMenu onItemClick={onClose} />
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 bg-white border-r border-gray-200 min-h-screen">
        <div className="sticky top-0 px-4 py-6">
          <NavMenu />
        </div>
      </aside>
    </>
  );
}

function NavMenu({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <nav className="space-y-1">
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={onItemClick}
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
            <span className="truncate">{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}