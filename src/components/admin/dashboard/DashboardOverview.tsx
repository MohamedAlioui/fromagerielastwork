import React from 'react';
import { TrendingUp, Users, ShoppingBag, CreditCard } from 'lucide-react';
import { AnalyticsCard } from './AnalyticsCard';
import { RevenueChart } from './RevenueChart';
import { TopProducts } from './TopProducts';
import { RecentOrders } from './RecentOrders';
import { CustomerMap } from './CustomerMap';

const mockData = {
  analytics: [
    {
      title: 'Total Revenue',
      value: '12,450 TND',
      icon: TrendingUp,
      change: { value: '+12% vs last month', type: 'increase' as const }
    },
    {
      title: 'Total Customers',
      value: '1,234',
      icon: Users,
      change: { value: '+8.1% vs last month', type: 'increase' as const }
    },
    {
      title: 'Total Orders',
      value: '456',
      icon: ShoppingBag,
      change: { value: '+23.4% vs last month', type: 'increase' as const }
    },
    {
      title: 'Average Order Value',
      value: '276 TND',
      icon: CreditCard,
      change: { value: '+4.3% vs last month', type: 'increase' as const }
    }
  ],
  revenueData: [
    { date: 'Jan', revenue: 4000 },
    { date: 'Feb', revenue: 3000 },
    { date: 'Mar', revenue: 5000 },
    { date: 'Apr', revenue: 4500 },
    { date: 'May', revenue: 6000 },
    { date: 'Jun', revenue: 5500 }
  ],
  topProducts: [
    {
      id: 1,
      name: 'Fromage Amir Semi Curé',
      sales: 245,
      revenue: '6,825 TND',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Mozzarella Centra',
      sales: 190,
      revenue: '1,548 TND',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=200&q=80'
    }
  ],
  recentOrders: [
    {
      id: 'CMD202402001',
      customer: 'Sophie Martin',
      date: new Date(2024, 1, 15),
      total: '85.50 TND',
      status: 'pending' as const,
      items: [
        { name: 'Fromage Amir Semi Curé', quantity: 2 },
        { name: 'Mozzarella Centra', quantity: 1 }
      ]
    },
    {
      id: 'CMD202402002',
      customer: 'Thomas Dubois',
      date: new Date(2024, 1, 14),
      total: '45.25 TND',
      status: 'delivered' as const,
      items: [
        { name: 'Gouda à l\'ail noir', quantity: 1 }
      ]
    }
  ],
  regions: [
    { name: 'Sfax', customers: 450, percentage: 45 },
    { name: 'Tunis', customers: 320, percentage: 32 },
    { name: 'Sousse', customers: 180, percentage: 18 },
    { name: 'Other', customers: 50, percentage: 5 }
  ]
};

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockData.analytics.map((item, index) => (
          <AnalyticsCard key={index} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={mockData.revenueData} />
        </div>
        <div>
          <CustomerMap regions={mockData.regions} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts products={mockData.topProducts} />
        <RecentOrders orders={mockData.recentOrders} />
      </div>
    </div>
  );
}