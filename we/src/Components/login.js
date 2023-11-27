
function Login(){
    return(
        <div>
        <section className="login-register-forms">
        {/* Login Form */}
        <form>
          <h2>Login</h2>
          <label htmlFor="login-email">Email:</label>
          <input type="email" id="login-email" name="login-email" required />

          <label htmlFor="login-password">Password:</label>
          <input type="password" id="login-password" name="login-password" required />

          <button type="submit">Login</button>
          </form>
          </section>
        
        </div>

    );
}
export default Login;