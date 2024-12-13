import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Stat {
  name: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: string;
    type: 'increase' | 'decrease' | 'neutral';
  };
}

interface AdminStatsProps {
  stats: Stat[];
}

export function AdminStats({ stats }: AdminStatsProps) {
  const getChangeColor = (type: 'increase' | 'decrease' | 'neutral') => {
    switch (type) {
      case 'increase':
        return 'text-emerald-600';
      case 'decrease':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
            {stat.change && (
              <p className={`mt-2 text-sm ${getChangeColor(stat.change.type)}`}>
                {stat.change.value}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
