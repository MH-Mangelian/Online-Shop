'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupStart } from '../redux/authSlice';

//Global style body Html 
import '../app/globals.css';

//components
import NavTopGreen from '@/components/NavTopGreen';
import Header from '@/components/Header';

const signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupStart({ name, email, password })); // استفاده از اکشن signupStart برای ثبت نام
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main>
      <NavTopGreen/>
      <Header/>

      <section css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 30px;
        margin-left : auto;
        margin-right: auto;
        width: 95vw;
        padding: 20px 5px;
        
      `}>
          <div css={css`
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: hsl(120, 41%, 30%);
          border-radius: 20px;
          width: 100%;
          height: 500px;
          @media (max-width: 640px) {
            height: 100vh;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
          }
        `}>
            <h2>Sign Up</h2>
            <div>
              <form onSubmit={handleSignup}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit">Signup</button>
              </form>
              <p>
                Already have an account?{' '}
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </p>
            </div>
        </div>
      

      </section>
    </main>
  )
}

export default signup;
