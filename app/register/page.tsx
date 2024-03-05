'use client';
import { useState } from 'react';
import schema from './schema';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({ email: '', name: '', password: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submit action

    setErrors({ email: '', name: '', password: '' });

    const result = schema.safeParse({ email, name, password });

    if (!result.success) {
      const errorMap: any = {};
      result.error.issues.forEach((issue) => {
        errorMap[issue.path[0]] = issue.message;
      });
      setErrors(errorMap);
      return;
    }

    try {
      const payload = { email, name, password };
      const res = await axios.post('/api/register', payload);

      console.log('Registration successful', res.data);
    } catch (error: any) {
      console.error('Registration failed', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          className="input input-bordered input-primary max-w-xs mb-2"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

        <input
          className="input input-bordered input-primary max-w-xs mb-2"
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

        <input
          className="input input-bordered input-primary max-w-xs mb-2"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
