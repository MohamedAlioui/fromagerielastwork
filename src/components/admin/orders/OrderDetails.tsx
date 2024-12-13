
import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Package, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';

interface OrderDetailsProps {
  order: {
    id: string;
    orderNumber: string;
    date: Date;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    customer: {
      name: string;
      email: string;
      phone: string;
    };
    shipping: {
      address: string;
      city: string;
      postalCode: string;
    };
    items: Array<{
      name: string;
      quantity: number;
      price: number;
      weight: number;
    }>;
    subtotal: number;
    shipping: number;
    total: number;
  };
  onUpdateStatus: (status: string) => void;
}

const statusColors = {
  pending: 'bg-amber-100 text-amber-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-emerald-100 text-emerald-800',
  cancelled: 'bg-red-100 text-red-800'
};

export function OrderDetails({ order, onUpdateStatus }: OrderDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Commande #{order.orderNumber}
          </h3>
          <p className="text-sm text-gray-500">
            {format(order.date, 'dd MMMM yyyy, HH:mm', { locale: fr })}
          </p>
        </div>
        <Badge className={statusColors[order.status]}>
          {order.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Client</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Package className="w-4 h-4 mr-2" />
              <span>{order.customer.name}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <span>{order.customer.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>{order.customer.phone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Livraison</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{order.shipping.address}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>Estimation: 24-48h</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h4 className="font-medium text-gray-900 mb-4">Articles</h4>
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity}x • {item.weight}kg
                </p>
              </div>
              <p className="font-medium text-gray-900">
                {item.price.toFixed(2)} TND
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Sous-total</span>
            <span>{order.subtotal.toFixed(2)} TND</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Frais de livraison</span>
            <span>{order.shipping.toFixed(2)} TND</span>
          </div>
          <div className="flex justify-between text-lg font-medium text-gray-900 pt-2">
            <span>Total</span>
            <span>{order.total.toFixed(2)} TND</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button
          variant="secondary"
          onClick={() => onUpdateStatus('cancelled')}
          disabled={order.status === 'cancelled' || order.status === 'delivered'}
        >
          Annuler
        </Button>
        <Button
          onClick={() => {
            const nextStatus = {
              pending: 'processing',
              processing: 'shipped',
              shipped: 'delivered'
            }[order.status];
            if (nextStatus) {
              onUpdateStatus(nextStatus);
            }
          }}
          disabled={order.status === 'cancelled' || order.status === 'delivered'}
        >
          {order.status === 'pending' ? 'Traiter' :
           order.status === 'processing' ? 'Expédier' :
           order.status === 'shipped' ? 'Marquer comme livré' :
           'Terminé'}
        </Button>
      </div>
    </div>
  );
}
