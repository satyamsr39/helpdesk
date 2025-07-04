import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // TODO: Check if email exists in DB, then send a real email.
  console.log(`Send reset link to: ${email}`);

  return NextResponse.json({ message: 'Reset email sent (mock)' });
}
