import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Student Community</h1>
        <p>Connect with students who share your interests!</p>
      </header>
      <section className="login-register-forms">
        {/* Login Form */}
        <form className="login-form">
          <h2>Login</h2>
          <label htmlFor="login-email">Email:</label>
          <input type="email" id="login-email" name="login-email" required />

          <label htmlFor="login-password">Password:</label>
          <input type="password" id="login-password" name="login-password" required />

          <button onClick={() => setLogin(!login)} type="submit" className="login-button">
            {login ? 'Logout' : 'Login'}
          </button>
          <button className="register-button">Register</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
