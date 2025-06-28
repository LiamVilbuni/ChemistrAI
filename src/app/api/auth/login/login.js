// 'use server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import React from 'react';

const users = [
  { email: 'test@example.com', password: '$2a$10$...' }
];
export default async function login(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  console.log('User:', user);
  console.log('Response Status:', res.status);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  // Compare password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  // Create a JWT token
  const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });
  return res.status(200).json({ token });
}