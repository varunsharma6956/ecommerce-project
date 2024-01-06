import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and signup

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic using Firebase or your chosen authentication service
    console.log('Logging in...', email, password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic using Firebase or your chosen authentication service
    console.log('Signing up...', email, password);
  };

  return (
    <div className="auth">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={isLogin ? handleLogin : handleSignup}>
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default Auth;