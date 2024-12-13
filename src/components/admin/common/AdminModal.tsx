import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../../ui/Button';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdminModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: AdminModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="rounded-full p-1"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>

          <div className="px-6 py-4">{children}</div>

          {footer && (
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}