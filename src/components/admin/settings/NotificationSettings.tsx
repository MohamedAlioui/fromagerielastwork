import React from 'react';
import { Button } from '../../ui/Button';

export function NotificationSettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        Paramètres des notifications
      </h3>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Notifications par email
              </h4>
              <p className="text-sm text-gray-500">
                Recevoir les notifications par email
              </p>
            </div>
            <input
              type="checkbox"
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              defaultChecked
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Notifications de commande
              </h4>
              <p className="text-sm text-gray-500">
                Recevoir une notification pour chaque nouvelle commande
              </p>
            </div>
            <input
              type="checkbox"
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              defaultChecked
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Notifications de stock
              </h4>
              <p className="text-sm text-gray-500">
                Recevoir une notification quand un produit est presque en rupture
              </p>
            </div>
            <input
              type="checkbox"
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              defaultChecked
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Enregistrer les préférences
          </Button>
        </div>
      </form>
    </div>
  );
}
