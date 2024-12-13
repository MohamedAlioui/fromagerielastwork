import React, { useState } from 'react';
import { Search, Star, ThumbsUp, MessageSquare, Trash2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

interface Review {
  id: string;
  productName: string;
  customerName: string;
  rating: number;
  comment: string;
  date: Date;
  helpful: number;
  status: 'pending' | 'approved' | 'rejected';
  images?: string[];
}

const reviews: Review[] = [
  {
    id: '1',
    productName: 'Fromage Amir Semi Curé',
    customerName: 'Sophie Martin',
    rating: 5,
    comment: "Un fromage exceptionnel ! Le goût est parfaitement équilibré et la texture est crémeuse à souhait.",
    date: new Date('2024-02-15'),
    helpful: 12,
    status: 'approved',
    images: [
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=200&q=80'
    ]
  },
  {
    id: '2',
    productName: 'Mozzarella Centra',
    customerName: 'Thomas Dubois',
    rating: 4,
    comment: "Très bon produit, mais le prix est un peu élevé.",
    date: new Date('2024-02-10'),
    helpful: 8,
    status: 'pending'
  }
];

const statusColors = {
  pending: 'bg-amber-100 text-amber-800',
  approved: 'bg-emerald-100 text-emerald-800',
  rejected: 'bg-red-100 text-red-800'
};

export function ReviewList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredReviews = reviews.filter(review =>
    (review.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     review.customerName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStatus === 'all' || review.status === selectedStatus)
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Rechercher un avis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="all">Tous les statuts</option>
          <option value="pending">En attente</option>
          <option value="approved">Approuvé</option>
          <option value="rejected">Rejeté</option>
        </select>
      </div>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="divide-y divide-gray-200">
          {filteredReviews.map((review) => (
            <div key={review.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {review.productName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Par {review.customerName} • {review.date.toLocaleDateString()}
                  </p>
                </div>
                <Badge className={statusColors[review.status]}>
                  {review.status}
                </Badge>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'text-amber-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-4">{review.comment}</p>

              {review.images && review.images.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {review.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Review image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span>Répondre</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span>{review.helpful} utile</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {review.status === 'pending' && (
                    <>
                      <Button size="sm">
                        Approuver
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        Rejeter
                      </Button>
                    </>
                  )}
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex items-center space-x-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Supprimer</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
