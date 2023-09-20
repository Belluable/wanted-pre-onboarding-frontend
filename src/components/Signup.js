// src/components/Signup.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const isEmailValid = () => email.includes('@');
  const isPasswordValid = () => password.length >= 8;

  const handleSignup = () => {
    // 회원가입 로직 (예: API 통신)
    // 회원가입이 성공적으로 완료되면 /signin으로 리다이렉트
    history.push('/signin');
  }

  return (
    <div>
      <input data-testid="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input data-testid="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button data-testid="signup-button" disabled={!isEmailValid() || !isPasswordValid()} onClick={handleSignup}>
        회원가입
      </button>
    </div>
  );
}

