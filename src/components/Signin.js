// src/components/Signin.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const isEmailValid = () => email.includes('@');
  const isPasswordValid = () => password.length >= 8;

  const handleLogin = async () => {
    // 로그인 로직 (예: API 통신)
    const token = "FAKE_JWT_TOKEN";  // 실제로는 API 응답에서 가져와야 합니다.

    if (token) {
      localStorage.setItem('jwt', token);
      history.push('/todo');
    }
  }

  return (
    <div>
      <input data-testid="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input data-testid="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button data-testid="signin-button" disabled={!isEmailValid() || !isPasswordValid()} onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}

export default Signin;

