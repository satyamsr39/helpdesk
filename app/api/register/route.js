import { NextResponse } from 'next/server';

// Dummy in-memory user store
let users = [];

export async function POST(req) {
  const { username, password, email } = await req.json();

  // Basic validation
  if (!username || !password || !email) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }

  // Add user (no password hashing here — for real apps, use bcrypt)
  const newUser = { id: Date.now(), username, password, email };
  users.push(newUser);

  // Create a fake JWT (replace with secure logic)
  const token = jwt.sign(
    { id: newUser.id, username: newUser.username },
    process.env.JWT_SECRET || 'dev-secret',
    { expiresIn: '1h' }
  );

  return NextResponse.json({ message: 'User created', token }, { status: 201 });
}
