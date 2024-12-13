import React from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { LoyaltyTransaction } from '../../types/loyalty';
import { formatPoints } from '../../utils/loyaltyUtils';

interface LoyaltyHistoryProps {
  transactions: LoyaltyTransaction[];
}

export function LoyaltyHistory({ transactions }: LoyaltyHistoryProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Historique des points
        </h3>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'earn'
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-amber-50 text-amber-600'
                }`}>
                  {transaction.type === 'earn' ? (
                    <ArrowUpCircle className="w-6 h-6" />
                  ) : (
                    <ArrowDownCircle className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className={`font-medium ${
                transaction.type === 'earn' ? 'text-emerald-600' : 'text-amber-600'
              }`}>
                {transaction.type === 'earn' ? '+' : '-'}{formatPoints(transaction.points)} pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}