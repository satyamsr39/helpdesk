'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthInput from '@/components/AuthInput';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

  

    setLoading(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center login">
      <div className="w-full max-w-lg bg-teal-100/70 p-12 rounded shadow-lg">
        <h1 className="text-3xl font-bold italic text-center mb-8">
          Helpdesk System
        </h1>

        <form onSubmit={handleSubmit}>
          <AuthInput
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            autoFocus
          />

          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="mt-6"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-10 py-3 rounded text-lg font-semibold
                       bg-green-500 hover:bg-green-600 text-white
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between mt-8 text-base">
          <Link
            href="/forget-password"
            className="text-red-600 hover:underline"
          >
            Forgot password
          </Link>
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
