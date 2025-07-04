'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const res = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Password reset link sent to your email!');
    } else {
      setMessage(data.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center login">
      <div className="bg-teal-100/70 p-10 px-24    text-center">
        <p className="mb-6">
          Don’t worry, Enter your email below and we will<br />
          send you a link to change password.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-white mb-6 p-3 border border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {message && (
            <p className="text-sm text-green-700 mb-4">{message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded text-lg mb-4"
          >
            Submit
          </button>

          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg"
            onClick={() => router.push('/login')}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
