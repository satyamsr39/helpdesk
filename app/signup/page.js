'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '', email: '' });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data?.error || 'Something went wrong');
      return;
    }

    // Optional: Save token to localStorage/cookie
    localStorage.setItem('token', data.token);

    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center login">
      <div className="bg-teal-100/70 p-10 rounded w-full max-w-md">
        <h1 className="text-3xl italic font-bold text-center mb-1">Helpdesk System</h1>
        <p className="text-center mb-6">Sign up here</p>

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            className="w-full mb-4 p-3 border border-gray-400"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border border-gray-400"
            value={form.password}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full mb-6 p-3 border border-gray-400"
            value={form.email}
            onChange={handleChange}
          />

          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-between mt-6 text-sm">
          <a className="text-red-600" href="/forget-password">Forgot password</a>
          <a className="font-semibold" href="/login">Sign In</a>
        </div>
      </div>
    </div>
  );
}
