import { useState, useEffect } from 'react';

interface AdminStats {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  averageOrderValue: number;
  recentOrders: any[];
  salesData: any[];
}

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStats>({
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0,
    averageOrderValue: 0,
    recentOrders: [],
    salesData: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setStats({
          totalSales: 12450,
          totalOrders: 45,
          totalCustomers: 120,
          averageOrderValue: 276,
          recentOrders: [
            {
              id: 'CMD202402001',
              customer: 'Sophie Martin',
              date: new Date(2024, 1, 15),
              total: '85.50 TND',
              status: 'En cours'
            },
            {
              id: 'CMD202402002',
              customer: 'Thomas Dubois',
              date: new Date(2024, 1, 14),
              total: '45.25 TND',
              status: 'Livré'
            }
          ],
          salesData: [
            { month: 'Jan', sales: 4000 },
            { month: 'Fév', sales: 3000 },
            { month: 'Mar', sales: 5000 },
            { month: 'Avr', sales: 4500 },
            { month: 'Mai', sales: 6000 },
            { month: 'Juin', sales: 5500 }
          ]
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, isLoading };
}