import React from 'react';
import { Bell, Mail, ShoppingBag, Truck } from 'lucide-react';
import { Button } from '../../ui/Button';

const notifications = [
  {
    id: 'orders',
    title: 'Commandes',
    description: 'Notifications sur le statut de vos commandes',
    icon: ShoppingBag,
    email: true,
    push: true
  },
  {
    id: 'delivery',
    title: 'Livraisons',
    description: 'Mises à jour sur vos livraisons',
    icon: Truck,
    email: true,
    push: true
  },
  {
    id: 'promotions',
    title: 'Promotions',
    description: 'Offres spéciales et réductions',
    icon: Bell,
    email: false,
    push: true
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'Actualités et nouveaux produits',
    icon: Mail,
    email: true,
    push: false
  }
];

export function NotificationSettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Paramètres de notification</h3>
      
      <div className="space-y-6">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div key={notification.id} className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                  <p className="text-sm text-gray-500">{notification.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={notification.email}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Email</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={notification.push}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Push</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end">
        <Button type="button">
          Enregistrer les préférences
        </Button>
      </div>
    </div>
  );
}