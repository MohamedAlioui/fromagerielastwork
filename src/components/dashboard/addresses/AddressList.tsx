import React from 'react';
import { MapPin, Pencil, Trash2 } from 'lucide-react';

const addresses = [
  {
    id: 1,
    type: 'Domicile',
    name: 'Ahmed Alioui',
    address: '123 Rue de la République',
    city: 'Sfax',
    postalCode: '3000',
    phone: '+216 74 123 456',
    isDefault: true
  },
  {
    id: 2,
    type: 'Bureau',
    name: 'Ahmed Alioui',
    address: '45 Avenue Habib Bourguiba',
    city: 'Sfax',
    postalCode: '3000',
    phone: '+216 74 789 012',
    isDefault: false
  }
];

export function AddressList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {addresses.map((address) => (
        <div key={address.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium text-gray-900">{address.type}</h3>
                  {address.isDefault && (
                    <span className="px-2 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full">
                      Par défaut
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-1">{address.name}</p>
                <p className="text-gray-600">{address.address}</p>
                <p className="text-gray-600">{address.city}, {address.postalCode}</p>
                <p className="text-gray-600">{address.phone}</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                <Pencil className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}