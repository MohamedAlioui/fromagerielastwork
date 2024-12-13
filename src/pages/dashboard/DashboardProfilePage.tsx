import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { ProfileForm } from '../../components/dashboard/profile/ProfileForm';
import { PasswordForm } from '../../components/dashboard/profile/PasswordForm';
import { NotificationSettings } from '../../components/dashboard/profile/NotificationSettings';

export function DashboardProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Mon Profil</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProfileForm />
          <PasswordForm />
        </div>
        <NotificationSettings />
      </div>
    </DashboardLayout>
  );
}