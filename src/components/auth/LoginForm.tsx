import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Loader, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormInput } from './FormInput';
import { useAuth } from '../../hooks/useAuth';
import { RememberMe } from './RememberMe';
import { ForgotPassword } from './ForgotPassword';
import { LoginCredentials } from '../../types/auth';

export function LoginForm() {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await login(data);
      // After login, the user state will be updated automatically
      // We can access it directly from the useAuth hook
      const { user } = useAuth.getState();
      if (user?.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <FormInput
        label="Email"
        type="email"
        icon={Mail}
        placeholder="votre@email.com"
        {...register('email', {
          required: 'Email requis',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email invalide'
          }
        })}
        error={errors.email?.message}
      />

      <FormInput
        label="Mot de passe"
        type="password"
        icon={Lock}
        placeholder="••••••••"
        {...register('password', {
          required: 'Mot de passe requis',
          minLength: {
            value: 6,
            message: 'Le mot de passe doit contenir au moins 6 caractères'
          }
        })}
        error={errors.password?.message}
      />

      <div className="flex items-center justify-between">
        <RememberMe register={register} />
        <ForgotPassword />
      </div>

      <Button
        type="submit"
        className="w-full flex justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          'Se connecter'
        )}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Pas encore de compte ?{' '}
        <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500">
          S'inscrire
        </Link>
      </p>
    </form>
  );
}