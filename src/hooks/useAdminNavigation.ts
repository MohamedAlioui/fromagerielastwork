import { useMemo } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart,
  MessageSquare,
  Star,
  Tag,
  Settings,
  BarChart3
} from 'lucide-react';

export function useAdminNavigation() {
  const navigation = useMemo(() => [
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
      name: 'Paramètres',
      href: '/admin/settings',
      icon: Settings
    }
  ], []);

  return navigation;
}