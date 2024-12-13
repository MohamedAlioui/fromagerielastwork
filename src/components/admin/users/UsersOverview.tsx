import React from 'react';
import { UserList } from './UserList';

export function UsersOverview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Users Management</h1>
      </div>
      <UserList />
    </div>
  );
}