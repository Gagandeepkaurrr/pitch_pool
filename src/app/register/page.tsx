'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ClientMotion } from '@/components/ClientMotion';
import { useAuth } from '@/contexts/AuthContext';

// Separate component that uses useSearchParams
function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: searchParams.get('role') || 'INNOVATOR',
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      router.push(`/dashboard/${user.role.toLowerCase()}`);
    }
  }, [user, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(
        formData.email,
        formData.password,
        formData.name,
        formData.role as 'INVESTOR' | 'INNOVATOR'
      );
      router.push(`/dashboard/${formData.role.toLowerCase()}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ClientMotion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Join as {formData.role === 'INNOVATOR' ? 'Innovator' : 'Investor'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Or{' '}
            <button
              onClick={() => setFormData(prev => ({ ...prev, role: prev.role === 'INNOVATOR' ? 'INVESTOR' : 'INNOVATOR' }))}
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              switch to {formData.role === 'INNOVATOR' ? 'Investor' : 'Innovator'}
            </button>
          </p>
        </div>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </ClientMotion>
    </div>
  );
}

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}

// Main component with Suspense boundary
export default function Register() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RegisterForm />
    </Suspense>
  );
} 