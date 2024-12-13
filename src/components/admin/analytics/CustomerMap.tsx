import React from 'react';

interface Region {
  name: string;
  customers: number;
  percentage: number;
}

interface CustomerMapProps {
  regions: Region[];
}

export function CustomerMap({ regions }: CustomerMapProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Distribution des Clients</h3>
      
      <div className="space-y-4">
        {regions.map((region) => (
          <div key={region.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">{region.name}</span>
              <span className="text-gray-900 font-medium">{region.customers}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-500 h-2 rounded-full"
                style={{ width: `${region.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}