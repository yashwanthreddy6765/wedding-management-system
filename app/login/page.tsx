'use client';

import React, { FormEvent, ChangeEvent, useState } from 'react';
import Link from 'next/link';

interface LoginFormData {
  email: string;
  password: string;
}

interface FormError {
  field: 'email' | 'password' | 'general';
  message: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormError[]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormError[] = [];
    
    if (!formData.email) {
      newErrors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push({ field: 'email', message: 'Invalid email format' });
    }
    
    if (!formData.password) {
      newErrors.push({ field: 'password', message: 'Password is required' });
    } else if (formData.password.length < 6) {
      newErrors.push({ field: 'password', message: 'Password must be at least 6 characters' });
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setErrors([]);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login successful:', formData);
      window.location.href = '/dashboard';
    } catch {
      setErrors([{ 
        field: 'general', 
        message: 'Login failed. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => prev.filter(err => err.field !== name as 'email' | 'password'));
  };

  const getFieldError = (field: 'email' | 'password'): string | undefined => {
    return errors.find(err => err.field === field)?.message;
  };

  const generalError = errors.find(err => err.field === 'general')?.message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              Welcome to WedHub
            </h1>
            <p className="text-gray-600">Sign in to plan your perfect wedding</p>
          </div>

          {generalError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm" role="alert">
              {generalError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                  getFieldError('email')
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-pink-500 focus:ring-pink-200'
                } focus:ring-2 outline-none`}
                placeholder="you@example.com"
                aria-label="Email address"
              />
              {getFieldError('email') && (
                <p className="text-red-600 text-sm mt-1">{getFieldError('email')}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                  getFieldError('password')
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-pink-500 focus:ring-pink-200'
                } focus:ring-2 outline-none`}
                placeholder="••••••••"
                aria-label="Password"
              />
              {getFieldError('password') && (
                <p className="text-red-600 text-sm mt-1">{getFieldError('password')}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="flex items-center gap-2">
            <hr className="flex-1" />
            <span className="text-gray-500 text-sm">or</span>
            <hr className="flex-1" />
          </div>

          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-pink-600 font-semibold hover:text-rose-600 transition">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
